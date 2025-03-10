"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            const res = await fetch("/api/auth/user");
            const data = await res.json();
            if (!data.user) {
                router.push("/login");
            } else {
                setUser(data.user);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="p-5">
            <h1>Welcome to Dashboard</h1>
            {user && <p>Email: {user.email}</p>}
        </div>
    );
}
