import React, {Suspense} from "react";
import type { Metadata } from 'next'
import {FULL_NAME} from "@/constants/contacts";
import { Inter } from 'next/font/google'
import { Navigation } from "@/components/navigation/navigation";
import { Up } from "@/components/Up/up";
import cn from 'classnames';

import './page.css';
import './globals.css'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Personal web site',
  description: 'My personal web site as a senior web developer',
}

// App router implementation

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pb-32 pt-24">
            <div className="z-10 mb-3 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 w-full border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Code is in my mind....&nbsp;
                </p>
                <div
                    className={cn(
                        'fixed bottom-0 left-0 h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none',
                        'infoBlock px-2'
                    )}>
                    <p>{FULL_NAME} (Senior Software Engineer)</p>
                    <p>Personal Blog</p>
                </div>
            </div>

            <Suspense fallback={null}>
                <Navigation/>
            </Suspense>

            <div className="innerContainer lg:border lg:rounded-xl">{children}</div>

            <Up/>
        </main>
        </body>
        </html>
    );
}
