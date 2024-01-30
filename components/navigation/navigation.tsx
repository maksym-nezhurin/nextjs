'use client'

import React, {JSX} from 'react';
import {MenuItems} from "@/constants/menu";
import { IMenuItem } from "@/interfaces/menuItem";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import cn from "classnames";
import styles from './navigation.module.css';

export const Navigation = (): JSX.Element | React.ReactNode => {
    const pathname = usePathname();
    console.log('pathname', pathname)

    return (
        <div className="mb-2 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            {
                MenuItems.map((MenuItem: IMenuItem<string>) => {
                    return (
                        <Link key={MenuItem.id}
                              href={MenuItem.path}
                              className={cn(
                                  "rounded-lg border border-transparent px-5 py-4 transition-colors",
                                  {
                                      [styles.active]: MenuItem.path === pathname,
                                      'group hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30': MenuItem.path !== pathname
                                  }
                              )}
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