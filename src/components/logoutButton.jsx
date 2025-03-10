// "use client";
// import { useRouter } from "next/navigation";

// export default function LogoutButton() {
//     const router = useRouter();

//     const handleLogout = async () => {
//         await fetch("/api/auth/logout");
//         router.push("/login");
//     };

//     return (
//         <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
//             Logout
//         </button>
//     );
// }

// "use client";
// import { useRouter } from "next/navigation";

// export default function LogoutButton() {
//     const router = useRouter();

//     const handleLogout = async () => {
//         await fetch("/api/auth/logout");
//         router.push("/login");

//         // Clear browser history to prevent back navigation
//         setTimeout(() => {
//             window.history.pushState(null, "", "/login");
//             window.history.replaceState(null, "", "/login");
//         }, 100);
//     };

//     return (
//         <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
//             Logout
//         </button>
//     );
// }
"use client";
import { useRouter } from "next/navigation";
import logout from "@/firebase/auth/logout";

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push("/login");

        // Prevent back button from going to the previous page
        setTimeout(() => {
            window.history.pushState(null, "", "/login");
            window.history.replaceState(null, "", "/login");
        }, 100);
    };

    return (
        <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded">
            Logout
        </button>
    );
}
