import React, {JSX} from 'react';
import {MenuItems} from "@/constants/menu";
import { IMenuItem } from "@/interfaces/menuItem";
import Link from "next/link";

export const Navigation = (): JSX.Element | React.ReactNode => {
    return (
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {
                MenuItems.map((MenuItem: IMenuItem) => {
                    return (
                        <Link href={MenuItem.path}
                              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                              rel="noopener noreferrer"
                        >
                            <h2 className={`mb-3 text-2xl font-semibold`}>
                                {MenuItem.label}
                                <span
                                    className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">-&gt;</span>
                            </h2>
                            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                                {MenuItem.description}
                            </p>
                        </Link>
                    )
                })
            }
        </div>
    )
}