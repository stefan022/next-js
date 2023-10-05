'use client';

import { FC, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import "./style.scss"

const Home: FC = (): JSX.Element => {
    const router = useRouter();

    const handleRouter: MouseEventHandler = () => router.push('/dashboard');

    return (
        <button
            type="button"
            onClick={handleRouter}
            className="button"
        >
            Open Dashboard
        </button>
    )
}

export default Home