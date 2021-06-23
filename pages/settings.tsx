import Head from 'next/head';

import Navbar from '../components/Navbar';

export default function settings() {
    return (
        <>
            <Head>
                <title>Settings - Social App</title>
            </Head>
            <Navbar />
            <main className="text-center">
                <h1 className="text-5xl">Settings</h1>
            </main>
        </>
    );
}
