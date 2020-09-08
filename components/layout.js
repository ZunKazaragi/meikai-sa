import Head from 'next/head';
import styles from './Layout.module.css';
import Link from 'next/link';

const name = "Project Meikaisa";

export default function Layout({children, home, title}) {

    return (
        <>
        <Head>
            <link rel="icon" href="/logo-2.ico"/>
            <title>{title}</title>
            <meta 
                name="description"
                content="Temukan kesehatan dan ketenangan dalam Karate"
            />
        </Head>
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>{name}</h1>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
            <hr/>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
                </div>
            )}
        </div>
        </>
    )
}