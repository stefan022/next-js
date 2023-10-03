import { FC, ReactNode } from "react"
import { inter } from "@/constants/inter"

import "../scss/main.scss"

interface IProps {
    children: ReactNode;
}

const RootLayout: FC<IProps> = ({ children }): JSX.Element => {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    ) 
}

export default RootLayout
