import { FC, ReactNode } from "react"
import { exo_2 } from "@/constants/googleFont/exo_2"

import "../scss/main.scss"

interface IProps {
    children: ReactNode;
}

const RootLayout: FC<IProps> = ({ children }): JSX.Element => {
    return (
        <html lang="en">
            <body className={`${exo_2.variable}`}>{children}</body>
        </html>
    ) 
}

export default RootLayout
