import Head from 'next/head';

import styles from '../styles/Home.module.css';

import Calculator from '../components/Calculator';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Fuel Calculator</title>
            </Head>

            <main className={styles.main}>
                <h1>Fuel Calculator</h1>
                <Calculator />
            </main>
        </div>
    );
}
