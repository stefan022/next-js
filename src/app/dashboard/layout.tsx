import { FC, ReactNode } from 'react'

interface IProps {
    children: ReactNode;
}

const DashboardLayout: FC<IProps> = ({ children }): JSX.Element => {
    return (
        <section>
            {children}
        </section>
    )
}

export default DashboardLayout