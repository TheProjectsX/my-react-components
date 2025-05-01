import * as React from "react";

export interface DrawerProps {
    children: React.ReactNode;
    drawerContent: React.ReactNode;
    drawerOpened: boolean;
    onDrawerOpened: () => void;
    onDrawerClosed: () => void;
}

export default function Drawer(props: DrawerProps): React.ReactElement;
