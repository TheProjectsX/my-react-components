"use client";

import React from "react";
import {
    MdKeyboardDoubleArrowLeft,
    MdKeyboardDoubleArrowRight,
} from "react-icons/md";

const Drawer = ({ children, drawerContent, drawerOpened, setDrawerOpened }) => {
    return (
        <div
            style={{
                "--drawer-size": "272px",
                "--shrink-visible": "24px",
            }}
            className={`relative h-full flex overflow-hidden`}
        >
            {/* Drawer */}
            <div
                className={`relative transition-[width] ease-in-out duration-300 delay-100 h-full z-10 ${
                    drawerOpened
                        ? "w-0 lg:w-[var(--drawer-size)]"
                        : "w-0 lg:w-[var(--shrink-visible)]"
                }`}
            >
                {/* Drawer Content */}
                <div
                    className={`h-full bg-white transition-[translate] ease-in-out duration-300 delay-100 border-r border-neutral-300 pl-4 pr-[var(--shrink-visible)] py-3 overflow-y-auto ${
                        drawerOpened
                            ? "scrollbar-thin"
                            : "-translate-x-[var(--drawer-size)] lg:-translate-x-[calc(var(--drawer-size)-var(--shrink-visible))] scrollbar-none"
                    }`}
                    style={{ width: "var(--drawer-size)" }}
                >
                    {drawerContent}
                </div>
                {/* Controller */}
                <button
                    className={`p-1.5 rounded-full hover:bg-slate-200 cursor-pointer items-center active:scale-90 transition-[scale] duration-300 absolute top-5 -right-4 bg-white border border-neutral-400 hidden lg:flex`}
                    onClick={(e) => setDrawerOpened((prev) => !prev)}
                >
                    {drawerOpened ? (
                        <MdKeyboardDoubleArrowLeft className="text-lg" />
                    ) : (
                        <MdKeyboardDoubleArrowRight className="text-lg" />
                    )}
                </button>
            </div>

            {/* Content */}
            <div
                className={`grow relative h-full scrollbar-thin ${
                    drawerOpened ? "lg:overflow-y-auto" : "overflow-y-auto"
                }`}
            >
                {children}

                {/* Black cover for Drawer */}
                <div
                    className={`absolute inset-0 bg-black/15 ${
                        drawerOpened ? "lg:hidden" : "hidden"
                    }`}
                    onClick={() => setDrawerOpened(false)}
                    onScroll={(e) => e.preventDefault()}
                ></div>
            </div>
        </div>
    );
};

export default Drawer;
