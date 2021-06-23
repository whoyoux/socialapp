import Head from 'next/head';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';

import Navbar from '../components/Navbar';

export default function Login() {
    const [user] = useAuthState(auth);
    useEffect(() => {
        //console.log(user);
    }, []);
    return (
        <>
            <Head>
                <title>Social App</title>
            </Head>
            <Navbar />
            <main className="text-center">
                <h1 className="text-5xl">Social app</h1>
                <div className="w-1/4 mx-auto flex flex-row items-center justify-evenly">
                    <img src={user?.photoURL!} alt="photo url" />
                    <div className="justify-center">
                        <p>{user?.displayName}</p>
                    </div>
                </div>
            </main>
        </>
    );
}
