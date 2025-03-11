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
