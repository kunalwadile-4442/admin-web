'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import InputField from '@/components/InputField';
import { motion } from 'framer-motion';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        toast.success('Message sent successfully!');
        reset(); // Reset the form after submission
    };

    return (
       
            
            <div className="min-h-screen flex flex-col items-center  px-6 pt-20 pb-12">
                <Toaster position="top-center" reverseOrder={false} /> {/* Toast notification container */}
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact us
      </motion.h1>

            <motion.form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Name Input */}
                <InputField 
                    label="Name" 
                    type="text" 
                    id="name" 
                    register={register} 
                    errors={errors} 
                    placeholder="Enter your name"
                />

                {/* Email Input */}
                <InputField 
                    label="Email" 
                    type="email" 
                    id="email" 
                    register={register} 
                    errors={errors} 
                    placeholder="Enter your email"
                />

                {/* Message Input */}
                <div className="mt-4">
                    <label className="block text-gray-700 font-bold mb-2">Message</label>
                    <textarea
                        {...register('message', { required: 'Message is required.' })}
                        rows="4"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100 text-gray-700"
                        placeholder="Write your message..."
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                {/* Submit Button */}
                <motion.button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Send Message
                </motion.button>
            </motion.form>
        </div>
    );
}
