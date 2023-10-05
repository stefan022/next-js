'use client';

import { FC, MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import styles from "./style.module.scss";

const Home: FC = (): JSX.Element => {
    const router = useRouter();

    const handleRouter: MouseEventHandler = () => router.push('/dashboard');

    return (
        <button 
            type="button" 
            onClick={handleRouter}
            className={styles.button}
        >
            Open Dashboard
        </button>
    )
}

export default Home