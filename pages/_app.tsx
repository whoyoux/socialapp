import '../styles/globals.css';
import type { AppProps } from 'next/app';

import Head from 'next/head';

import Login from '../components/Login';

import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App({ Component, pageProps }: AppProps) {
    const [user] = useAuthState(auth);
    return (
        <>
            <Head>
                <title>Social app</title>
                <meta name="description" content="Social app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {!user ? <Login /> : <Component {...pageProps} />}
        </>
    );
}
export default App;
