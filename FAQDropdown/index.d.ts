import * as React from "react";

export interface DropdownProps {
    children?: React.ReactNode;
    className?: string;
    label: React.ReactNode;
    border?: boolean;
}

export default function Dropdown(pros: DropdownProps): React.ReactElement;
