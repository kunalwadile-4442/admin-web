// 'use client'
// import { useAuthContext as useAuth } from '@/context/AuthContext';
// import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
// import { notFound, redirect } from 'next/navigation';

// export default function AdminPage() {
//     const { user, loading } = useAuth();
//     const router = useRouter();

//     useEffect(() => {
//         if (!loading && !user) {
//             redirect('/');
//         }
//     }, [user, loading, router]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (!user) {
//         notFound();
//     }

//     const handleLogout = () => {
//         // Here, you can also clear the authentication state if needed.
//         router.push('/login');
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//             <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
//                 <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
//                     Welcome to the Admin Dashboard
//                 </h1>
//                 {user && (
//                     <div className="text-center">
//                         <p className="text-gray-600 mb-6">Hello, {user.email}</p>
//                         <button
//                             onClick={handleLogout}
//                             className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
//                         >
//                             Logout
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


// "use client";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import LogoutButton from "@/components/logoutButton";

// export default function AdminPage() {
//     const router = useRouter();
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const fetchUser = async () => {
//             const res = await fetch("/api/auth/user");
//             const data = await res.json();
//             if (!data.user || data.role !== "admin") {
//                 router.push("/login");
//             } else {
//                 setUser(data.user);
//             }
//         };
//         fetchUser();
//     }, []);

//     return (
//         <div className="p-5">
//             <h1>Welcome, Admin</h1>
//             {user && <p>Email: {user.email}</p>}
//             <LogoutButton />
//         </div>
//     );
// }
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LogoutButton from "@/components/logoutButton";

export default function AdminPage() {
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
            const res = await fetch("/api/auth/user");
            const data = await res.json();

            if (!data.user) {
                router.replace("/login"); // Redirect unauthorized users
            }
        };
        checkAuth();
    }, []);

    return (
        <div className="p-5">
            <h1>Welcome, Admin</h1>
            <LogoutButton />
        </div>
    );
}
