import Head from 'next/head';
import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from '../components/Navbar';
//import Image from 'next/Image';

export default function Login() {
    const [user] = useAuthState(auth);

    return (
        <>
            <Head>
                <title>Social App</title>
            </Head>
            <Navbar />
            <main className="text-center">
                <h1 className="text-5xl">Social app</h1>
                <div className="w-1/4 mx-auto flex flex-row items-center justify-evenly">
                    <img
                        src={user?.photoURL!}
                        alt="photo url"
                        // width={100}
                        // height={100}
                    />
                    <div className="justify-center">
                        <p>{user?.displayName}</p>
                    </div>
                </div>
            </main>
        </>
    );
}
