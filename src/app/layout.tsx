'use client';

import { FC, ReactNode } from "react"
import { exo_2 } from "@/constants/googleFont/exo_2"
import Script from "next/script";
import { onLoad } from "@/script/onLoad";

import "../scss/main.scss"

interface IProps {
    children: ReactNode;
}

const RootLayout: FC<IProps> = ({ children }): JSX.Element => {
    return (
        <html lang="en">
            <body className={`${exo_2.variable}`}>{children}</body>
            <Script
                src="https://code.jquery.com/jquery-3.6.0.min.js"
                onLoad={onLoad}
            />
        </html>
    ) 
}

export default RootLayout
