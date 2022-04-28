import { getAuth } from "@firebase/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import firebaseApp from "../firebase/credentials";

const firestore = getFirestore(firebaseApp);

const auth = getAuth();

const actionNewAcudiente = (acudiente) => async (dispatch) => {

    try {
        await fetch("https://class-gate.herokuapp.com/addAcudiente", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(acudiente),
        })
        .then((res) => res.json())
        .then(async (data) => {
            console.log(data);
            const acudienteRegister = await createUserWithEmailAndPassword(auth, data.correo, data.documentoIdentidad)
            .catch(function (error) {
                alert(error.message);
            });
    
            const docRef = await doc(firestore, `users/${acudienteRegister.user.uid}`);
            await setDoc(docRef, { email: data.correo, role: "acudiente" });
            
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message,
        });
    }
};

const actionCloseAlertMessage = () => async (dispatch) => {
    dispatch({
      type: "closeAlertMessage",
    });
};

export const action = () => {
    return {
        actionNewAcudiente,
        actionCloseAlertMessage,
    };
};
