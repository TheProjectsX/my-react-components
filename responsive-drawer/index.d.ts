import * as React from "react";

export interface DrawerProps {
    children: React.ReactNode;
    drawerContent: React.ReactNode;
    drawerOpened: boolean;
    setDrawerOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Drawer(props: DrawerProps): React.ReactElement;
