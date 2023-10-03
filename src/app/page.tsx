'use client';
import { useRouter } from 'next/navigation';

import { FC, MouseEventHandler } from 'react'


const Home: FC = (): JSX.Element => {
    const router = useRouter();

    const handleRouter: MouseEventHandler = () => router.push('/dashboard');

    return (
        <button type="button" onClick={handleRouter}>
            Open Dashboard
        </button>
    )
}

export default Home