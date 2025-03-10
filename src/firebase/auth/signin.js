// import firebase_app from "../config";
// import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

// const auth = getAuth(firebase_app);

// export default async function signIn(email, password) {
//     let result = null,
//         error = null;
//     try {
//         result = await signInWithEmailAndPassword(auth, email, password);
//     } catch (e) {
//         error = e;
//     }

//     return { result, error };
// }
import { setCookie } from "cookies-next";
import { firebaseAuth } from "@/firebase/config";

export default async function signIn(email, password) {
    try {
        const userCredential = await firebaseAuth.signInWithEmailAndPassword(email, password);
        const token = await userCredential.user.getIdToken();

        // Set token in cookies
        setCookie("accessToken", token, { maxAge: 60 * 60 * 24, path: "/" });

        return { success: true };
    } catch (error) {
        return { error };
    }
}
