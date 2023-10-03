'use client';

import { FC } from 'react'

import DashboardLayout from './layout'
import Link from 'next/link'
import Error from './error'
import { ErrorBoundary } from '@/error/ErrorBoundary'
import { resetFunc } from '@/helpers/resetFunc'

const Dashboard: FC = (): JSX.Element => {
    return (
        <DashboardLayout>
            <ErrorBoundary fallback={ 
                <Error 
                    error={"Something went wrong!"} 
                    reset={resetFunc}
                /> 
            }>
                <p>Welcome to the Dashboard</p>
                <Link href={"/dashboard/products"}>Products</Link>
                <Link href={"/dashboard/settings"}>Settings</Link>
            </ErrorBoundary>
        </DashboardLayout>
    )
}

export default Dashboard