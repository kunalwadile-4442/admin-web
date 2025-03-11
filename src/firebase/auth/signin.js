import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config'; // Ensure correct Firebase config path

const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("Login successful:", userCredential.user);
        return { user: userCredential.user, error: null };
    } catch (error) {
        console.error("Firebase Auth Error:", error);
        return { user: null, error }; // Return both user and error
    }
};

export default signIn;
