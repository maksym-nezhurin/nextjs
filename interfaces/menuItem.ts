import {JSX} from "react";
import {Route} from "next";

export interface IMenuItem<T extends string> {
    id: string | number,
    path: Route<T> | URL,
    label: string,
    icon?: JSX.Element,
    description: string
}