import Head from 'next/head';
import Image from 'next/image';

import { auth } from '../lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import Navbar from '../components/Navbar';
import Post from '../components/Post';

const posts = [
    {
        title: 'Siema',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus purus. Nam sit amet tellus dapibus, posuere sapien in, sollicitudin risus. Curabitur sit amet finibus felis, in maximus tortor',
        displayName: 'Jan Kowalski',
        photoURL:
            'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg',
        likes: 65
    },
    {
        title: 'Essa',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus purus. Nam sit amet tellus dapibus, posuere sapien in, sollicitudin risus. Curabitur sit amet finibus felis, in maximus tortorLorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus purus. Nam sit amet tellus dapibus, posuere sapien in, sollicitudin risus. Curabitur sit amet finibus felis, in maximus tortor',
        displayName: 'Jan Kowalski',
        photoURL:
            'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg',
        likes: 2
    },
    {
        title: 'Lorem ipsum',
        desc: 'Lorem ipsum',
        displayName: 'Jan Kowalski',
        photoURL:
            'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg',
        likes: 12
    },
    {
        title: 'Lorem ipsum 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum maximus purus. Nam sit amet tellus dapibus, posuere sapien in, sollicitudin risus. Curabitur sit amet finibus felis, in maximus tortor 2',
        displayName: 'Jan Kowalski',
        photoURL:
            'https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg',
        likes: 54
    }
];

export default function Login() {
    const [user] = useAuthState(auth);

    const sendPost = (e: any) => {
        e.preventDefault();
    };

    return (
        <>
            <Head>
                <title>Social App</title>
            </Head>
            <Navbar />
            <main className="text-center mt-10">
                {/* Write post */}
                <form className="w-11/12 lg:w-1/2 mx-auto mt-5 p-7 border border-solid rounded mb-5">
                    <h1 className="text-2xl mb-5">Send post</h1>
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Title"
                        className="shadow w-full mb-5 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        // onChange={handleComment}
                        // value={comment}
                    />
                    <textarea
                        className="w-full px-3 py-2 mb-5 text-gray-700 border rounded-lg focus:outline-none resize-none"
                        placeholder="Your comment..."
                        rows={5}
                    ></textarea>

                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Photo URL"
                        className="shadow w-full mb-5 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        // onChange={handleComment}
                        // value={comment}
                    />
                    <input
                        type="submit"
                        value="Send 🚀"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full cursor-pointer"
                        onClick={sendPost}
                    />
                </form>
                {/* End of write post */}
                <h1 className="text-5xl mb-10">Posts</h1>

                <div className="w-11/12 lg:w-1/2 mx-auto mt-5">
                    {posts.map((post, index) => (
                        <Post
                            title={post.title}
                            desc={post.desc}
                            likes={post.likes}
                            displayName={post.displayName}
                            photoURL={post.photoURL}
                            key={index}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}
