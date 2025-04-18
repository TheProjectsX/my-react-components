import React from "react";

export interface PopoverProps {
    children: React.ReactElement<any, any>;
    content?: string | React.ReactNode;
    className?: string;
    position?: "top" | "bottom" | "left" | "right";
    axis?: "top" | "bottom" | "left" | "right" | "center";
    viewOnHover?: boolean;
    indicator?: boolean;
}

export default function Popover(props: PopoverProps): React.ReactElement;
