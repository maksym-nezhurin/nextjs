import React, {JSX} from "react";
import {HTag} from "@/components";

function NotFoundPage (): JSX.Element {
    return <>
        <h3>Not found</h3>
        <HTag tag={'h4'}>Try to use another page</HTag>
    </>
}

export default NotFoundPage