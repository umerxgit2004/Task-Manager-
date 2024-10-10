"use client"
import { useRouter } from 'next/navigation';

const Intro = () => {
    const router = useRouter();

    const handleSignIn = () => {
        router.push('/signin');
    };

    const handleSignUp = () => {
        router.push('/signup');
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <h1 className="text-4xl font-bold mb-6">Welcome to Task Manager</h1>
            <p className="text-lg mb-10">Sign in or Sign up to continue</p>
            <div className="space-x-4">
                <button
                    onClick={handleSignIn}
                    className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
                >
                    Sign In
                </button>
                <button
                    onClick={handleSignUp}
                    className="bg-green-500 px-6 py-3 rounded-lg hover:bg-green-600"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default Intro;
