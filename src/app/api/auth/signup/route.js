import { auth } from "@/firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { cookies } from "next/headers";
import { sign } from "jsonwebtoken";

export async function POST(req) {
    try {
        const { email, password, role } = await req.json();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Generate JWT Token
        const token = sign({ uid: user.uid, email, role }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // Store token in HTTP-Only Cookie
        cookies().set("accessToken", token, { httpOnly: true, maxAge: 3600 });

        return Response.json({ message: "User registered successfully", token }, { status: 201 });
    } catch (error) {
        return Response.json({ error: error.message }, { status: 400 });
    }
}
