'use client';
import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

const InputField = ({ label, type, id, register, errors,placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';
    
    return (
        <div className="relative">
            <label htmlFor={id} className="block text-gray-700 font-bold mb-2">{label}</label>
            <input
            placeholder={placeholder}
                type={isPassword && showPassword ? 'text' : type}
                id={id}
                {...register(id, { required: `${label} is required.` })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-gray-100 text-gray-700"
            />
            {isPassword && (
                <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-10 text-gray-600"
                >
                    {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
                </button>
            )}
            {errors[id] && <p className="text-red-500 text-sm mt-1">{errors[id].message}</p>}
        </div>
    );
};

export default InputField;