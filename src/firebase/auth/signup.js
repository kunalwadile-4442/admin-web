import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config'; // Ensure correct Firebase config path

const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { user: userCredential.user };
    } catch (error) {
        return { error };
    }
};

export default signIn;
