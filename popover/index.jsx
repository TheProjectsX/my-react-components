"use client";

import React, { useEffect, useRef, useState } from "react";

const Popover = ({
    children,
    content,
    className = "",
    position = "bottom",
    axis = "center",
    indicator = true,
}) => {
    const triggerRef = useRef(null);
    const contentRef = useRef(null);
    const [popoverStyle, setPopoverStyle] = useState({
        content: {},
        indicator: {},
    });

    const clonedTrigger = React.cloneElement(children, {
        ref: triggerRef,
        className: `${children.props.className || ""} peer`,
        "data-name": "popover-trigger",
    });

    useEffect(() => {
        const gap = 10;
        const indicatorGap = 6;
        const triggerRect = triggerRef.current?.getBoundingClientRect();
        const contentRect = contentRef.current?.getBoundingClientRect();

        const contentWidth = contentRect?.width ?? 0;
        const contentHeight = contentRect?.height ?? 0;
        const triggerWidth = triggerRect?.width ?? 0;
        const triggerHeight = triggerRect?.height ?? 0;

        const popoverContentStyles = {};
        const popoverIndicatorStyles = {};

        const size =
            position === "top" || position === "bottom"
                ? triggerHeight ?? 0
                : triggerWidth ?? 0;

        const oppositeSide = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left",
        };

        const windowSize = {
            width: window.innerWidth,
            height: window.innerHeight,
        };

        let finalPosition = position;

        if (
            (position === "top" &&
                (triggerRect?.top ?? 0) - gap - contentHeight < 0) ||
            (position === "bottom" &&
                (triggerRect?.bottom ?? 0) + gap + contentHeight >
                    windowSize.height) ||
            (position === "left" &&
                (triggerRect?.left ?? 0) - gap - contentWidth < 0) ||
            (position === "right" &&
                (triggerRect?.right ?? 0) + gap + contentWidth < 0)
        ) {
            finalPosition = oppositeSide[position];
        }

        popoverIndicatorStyles[oppositeSide[finalPosition]] = `${
            indicatorGap * -1
        }px`;
        popoverContentStyles[oppositeSide[finalPosition]] = `${size + gap}px`;

        const oppositeAxis = {
            top: ["top", "bottom"],
            bottom: ["top", "bottom"],
            left: ["left", "right"],
            right: ["left", "right"],
            center: ["center"],
        };

        const isSameAxis = oppositeAxis[axis].includes(position);

        const axisToUse =
            axis === "center" ? "center" : isSameAxis ? "center" : axis;

        if (axisToUse !== "center") {
            popoverContentStyles[axisToUse] = "0px";
            popoverIndicatorStyles[axisToUse] = `${indicatorGap}px`;
        } else {
            if (position === "top" || position === "bottom") {
                const offsetLeft = contentWidth / 2 - triggerWidth / 2;

                popoverContentStyles["left"] = `${offsetLeft * -1}px`;
                popoverIndicatorStyles["left"] = `${contentWidth / 2 - 8}px`;
            } else {
                const offsetTop = contentHeight / 2 - triggerHeight / 2;

                popoverContentStyles["top"] = `${offsetTop * -1}px`;
                popoverIndicatorStyles["top"] = `${contentHeight / 2 - 8}px`;
            }
        }

        setPopoverStyle({
            content: popoverContentStyles,
            indicator: popoverIndicatorStyles,
        });
    }, [position, axis]);

    return (
        <div data-name="popover-container" className="w-fit relative">
            {clonedTrigger}
            <div
                data-name="popover-content"
                className={`w-max absolute invisible peer-focus:visible hover:visible focus:visible shadow-[0_0_10px_rgba(0,0,0,0.1)] bg-white z-[999] ${className}`}
                style={popoverStyle.content}
                ref={contentRef}
            >
                {content}
                {indicator && (
                    <div
                        data-name="popover-indicator"
                        className="w-3 h-3 bg-white rotate-45 absolute z-[-10]"
                        style={popoverStyle.indicator}
                    ></div>
                )}
            </div>
        </div>
    );
};

export default Popover;
