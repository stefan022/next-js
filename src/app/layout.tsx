'use client';

import { FC, ReactNode } from "react"
import { exo_2 } from "@/constants/googleFont/exo_2"
import Script from "next/script";
import { onLoad } from "@/script/onLoad";

import "../scss/main.scss"
import { metadata } from "@/constants/metadata";

interface IProps {
    children: ReactNode;
}

const RootLayout: FC<IProps> = ({ children }): JSX.Element => {
    return (
        <html lang="en">
             <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{metadata.title as string}</title>
            </head>
            <body className={`${exo_2.variable}`}>{children}</body>
            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                onLoad={onLoad}
            />
        </html>
    ) 
}

export default RootLayout
