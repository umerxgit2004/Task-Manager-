"use client"
import { useRouter } from 'next/navigation';

const SignIn = () => {
    const router = useRouter();

    const handleSignIn = (e: React.FormEvent) => {
        e.preventDefault();
        // Perform sign-in logic here

        // After successful sign in, redirect to home page
        router.push('/');
    };

    return (
        <div className="h-screen flex flex-col items-center justify-center bg-gray-800 text-white">
            <h1 className="text-3xl font-bold mb-6">Sign In</h1>
            <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
                <input
                    type="email"
                    placeholder="Email"
                    className="px-4 py-2 rounded bg-gray-700 text-white"
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="px-4 py-2 rounded bg-gray-700 text-white"
                    required
                />
                <button type="submit" className="bg-blue-500 px-6 py-2 rounded hover:bg-blue-600">
                    Sign In
                </button>
            </form>
        </div>
    );
};

export default SignIn;
