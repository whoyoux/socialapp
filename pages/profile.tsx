import Head from 'next/head';
import Navbar from '../components/Navbar';
export default function Login() {
    return (
        <>
            <Head>
                <title>My profile - Social App</title>
            </Head>
            <Navbar />
            <main className="text-center">
                <h1 className="text-5xl">My profile</h1>
            </main>
        </>
    );
}
