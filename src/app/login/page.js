'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import signIn from '@/firebase/auth/signin';
import Link from 'next/link';
import InputField from '@/components/InputField';

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const { error } = await signIn(data.email, data.password);
            if (error) {
                switch (error.code) {
                    case 'auth/user-not-found':
                        setError('email', { type: 'manual', message: 'User not found. Please sign up.' });
                        break;
                    case 'auth/email-already-in-use':
                        setError('email', { type: 'manual', message: 'Email already exists. Try logging in.' });
                        break;
                    case 'auth/wrong-password':
                        setError('password', { type: 'manual', message: 'Incorrect password.' });
                        break;
                    case 'auth/invalid-email':
                        setError('email', { type: 'manual', message: 'Invalid email format.' });
                        break;
                    default:
                        setError('root', { type: 'manual', message: 'Something went wrong. Try again.' });
                }
                return;
            }
            router.push('/admin');
        } catch (error) {
            setError('root', { type: 'manual', message: 'An unexpected error occurred.' });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <InputField
                        placeholder="Enter your email"
                        label="Email"
                        type="email"
                        id="email"
                        register={register}
                        errors={errors}
                        validation={{
                            required: 'Email is required.',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Invalid email format.',
                            },
                        }}
                    />
                    <InputField
                        placeholder="Enter your password"
                        label="Password"
                        type="password"
                        id="password"
                        register={register}
                        errors={errors}
                        validation={{
                            required: 'Password is required.',
                            minLength: { value: 6, message: 'Password must be at least 6 characters.' },
                        }}
                    />
                    {errors.root && <p className="text-red-500 text-sm text-center">{errors.root.message}</p>}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    >
                        {isSubmitting ? 'Signing In...' : 'Sign In'}
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-indigo-600 font-bold">Sign Up</Link>
                </p>
            </div>
        </div>
    );
}
