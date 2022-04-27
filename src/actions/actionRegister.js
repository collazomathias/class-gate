import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "../firebase/credentials";

const firestore = getFirestore(firebaseApp);


const actionRegisterTeacher = (auth, teacher) => async (dispatch) => {
    try {
        const teacherRegister = await createUserWithEmailAndPassword(auth, teacher.correo, teacher.password);
        const docRef = doc(firestore, `users/${teacherRegister.user.uid}`);
        setDoc(docRef, { email: teacher.correo, role: "maestro" });

         fetch("https://classgate.herokuapp.com/addMaestro", {
                    method: "POST",
                    body: JSON.stringify(teacher),
                    headers: { "Content-Type": "application/json" }
                })
                    .then(response => response.json())
                    .then(data => dispatch({
                        type: "addTeacher",
                        payload: data
                    }));

    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

export const actionRegister = () => {
    return { actionRegisterTeacher };
}