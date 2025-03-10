import { auth } from "@/firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

export async function POST(req) {
    try {
        const { email, password } = await req.json();
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Generate JWT Token
        const token = sign({ uid: user.uid, email }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Store token in HTTP-Only Cookie
        cookies().set("accessToken", token, { httpOnly: true, maxAge: 3600 });

        return Response.json({ message: "Login successful", token }, { status: 200 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}
