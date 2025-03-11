import { getFirestore, doc, getDoc } from "firebase/firestore";
import firebase_app from "../firebase/config";

const db = getFirestore(firebase_app);

export default async function getDocument(collection, id) {
    try {
        const docRef = doc(db, collection, id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return { data: docSnap.data(), error: null };
        } else {
            return { data: null, error: "Document not found" };
        }
    } catch (error) {
        console.error("Error fetching document:", error);
        return { data: null, error };
    }
}
