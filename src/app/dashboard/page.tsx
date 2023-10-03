import { FC } from 'react'

import DashboardLayout from './layout'
import Link from 'next/link'

const Dashboard: FC = (): JSX.Element => {
    return (
        <DashboardLayout>
            <p>Welcome to the Dashboard</p>
            <Link href={"/dashboard/settings"}>Settings</Link>
        </DashboardLayout>
    )
}

export default Dashboard