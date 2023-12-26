import {JSX} from "react";

export interface IMenuItem {
    id: string | number,
    path: string,
    label: string,
    icon?: JSX.Element,
    description: string
}