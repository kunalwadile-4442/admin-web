import React from 'react';

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600 border-solid"></div>
        </div>
    );
}