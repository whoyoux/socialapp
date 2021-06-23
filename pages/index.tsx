import { auth } from '../lib/firebase';

import { useAuthState } from 'react-firebase-hooks/auth';

import Login from '../components/Login';
import Main from '../components/Main';

export default function Home() {
    const [user, loading, error] = useAuthState(auth);
    return (
        <>
            {loading ? (
                <p className="text-7xl text-center">Loading</p>
            ) : !user ? (
                <Login />
            ) : (
                <Main />
            )}
        </>
    );
}
