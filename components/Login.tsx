import Head from 'next/head';
import { auth, provider } from '../lib/firebase';

export default function Login() {
    const signIn = (e: any) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) => {
            console.log(error);
            alert(error.message);
        });
    };
    return (
        <>
            <Head>
                <title>Login - Social App</title>
            </Head>
            <main className="grid place-items-center w-screen h-screen text-center">
                <div>
                    <h1 className="text-5xl m-0">Login</h1>
                    <button
                        onClick={signIn}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
                    >
                        Login with google
                    </button>
                </div>
            </main>
        </>
    );
}
