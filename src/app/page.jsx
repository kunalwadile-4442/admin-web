"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

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
           <Navbar/>
           <div className="min-h-screen flex flex-col items-center px-6 pt-20 pb-12">
              <motion.h1
                className="text-4xl font-bold text-center mb-6"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}  >Hello kunal</motion.h1>
                </div>
        </div>

          
          
      
    );
}
