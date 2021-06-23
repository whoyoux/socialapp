import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';

import Login from '../components/Login';

import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App({ Component, pageProps }: AppProps) {
    const [user, loading] = useAuthState(auth);
    return (
        <>
            <Head>
                <title>Social app</title>
                <meta name="description" content="Social app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {loading ? (
                <p className="text-5xl text-center mt-10">Loading</p>
            ) : !user ? (
                <Login />
            ) : (
                <Component {...pageProps} />
            )}
        </>
    );
}
export default App;
