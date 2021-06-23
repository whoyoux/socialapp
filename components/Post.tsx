import { useState } from 'react';
import Image from 'next/image';

interface IPost {
    title: string;
    desc: string;
    likes: number;
    displayName: string;
    photoURL: string;
}

export default function Post(post: IPost) {
    const [isLiked, setIsLiked] = useState(false);
    const [comment, setComment] = useState('');

    const handleComment = (e: any) => {
        setComment(e.target.value);
    };

    const sendComment = (e: any) => {
        e.preventDefault();

        if (comment.trim().length > 0) {
            console.log(comment);
            e.target.value = '';
            setComment('');
            alert('Sent!');
        } else {
            console.error('Comment has to have more than 0 length!');
            alert('Comment has to have more than 0 length!');
        }
    };
    return (
        <>
            <div className="text-left border border-solid p-7 m-5 rounded mx-auto">
                <h1 className="text-3xl font-medium">{post.title}</h1>
                <div className="flex flex-row group cursor-pointer hover:underline">
                    <Image
                        src={post.photoURL}
                        alt={post.displayName}
                        width={32}
                        height={32}
                    />
                    <p className="text-xl my-3 ml-2 ">{post.displayName}</p>
                </div>
                <p className="text-xl">{post.desc}</p>
                <div className="flex flex-row justify-evenly mt-5">
                    <button
                        className="w-1/12 h-10 border border-solid rounded focus:outline-none hover:border-red-600"
                        onClick={() => setIsLiked(!isLiked)}
                    >
                        {isLiked ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mx-auto"
                                viewBox="0 0 20 20"
                                fill="red"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 mx-auto"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="red"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        )}
                    </button>

                    <form
                        action=""
                        className="appearance-none flex flex-row w-11/12 justify-evenly"
                    >
                        <input
                            type="text"
                            name="commentInput"
                            id=".commentInput"
                            placeholder="Your comment here."
                            className="shadow ml-2 w-11/12 appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={handleComment}
                            value={comment}
                        />
                        <input
                            type="submit"
                            className="w-10 h-10 border border-solid rounded ml-3 cursor-pointer bg-transparent hover:border-black"
                            value="🚀"
                            onClick={sendComment}
                        />
                    </form>
                </div>
            </div>
        </>
    );
}
