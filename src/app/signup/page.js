'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import signUp from '@/firebase/auth/signup';
import Link from 'next/link';

export default function SignupPage() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm();
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const onSubmit = async (data) => {
        try {
            const { error } = await signUp(data.email, data.password);
            if (error) {
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        setError('email', { type: 'manual', message: 'Email is already in use. Try logging in.' });
                        break;
                    case 'auth/invalid-email':
                        setError('email', { type: 'manual', message: 'Invalid email format.' });
                        break;
                    case 'auth/weak-password':
                        setError('password', { type: 'manual', message: 'Password should be at least 6 characters.' });
                        break;
                    default:
                        setError('root', { type: 'manual', message: 'Something went wrong. Please try again.' });
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
                <h1 className="text-4xl font-bold text-center mb-8 text-indigo-600">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'Email is required.',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: 'Invalid email format.',
                                },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-100 text-gray-700"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="relative">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            {...register('password', {
                                required: 'Password is required.',
                                minLength: { value: 6, message: 'Password must be at least 6 characters.' },
                            })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-100 text-gray-700"
                        />
                        <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute right-3 top-10 text-gray-600"
                        >
                            {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                        </button>
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    {errors.root && <p className="text-red-500 text-sm text-center">{errors.root.message}</p>}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                    >
                        {isSubmitting ? 'Signing Up...' : 'Sign Up'}
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <Link href="/login" className="text-indigo-600 font-bold">Log In</Link>
                </p>
            </div>
        </div>
    );
}