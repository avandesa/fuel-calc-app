import Head from 'next/head';
import Image from 'next/image';

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

            <footer className={styles.footer}>
                <a
                    href="https://github.com/avandesa/fuel-calc-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/img/github.png"
                        alt="View source code on Github"
                    />
                </a>
                <a
                    href="https://twitter.com/alexvds17"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/img/twitter.png" alt="Follow me on Twitter" />
                </a>
            </footer>
        </div>
    );
}
