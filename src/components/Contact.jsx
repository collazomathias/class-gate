import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
import { teacherAction } from "../actions/teacherAction";
import "../assets/styles/components/GroupForm.css";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "../assets/styles/components/Contact.css";
import { actionMessage } from "../actions/actionMessage";

export const Contact = () => {

    const { actionAllMaestro } = teacherAction();

    const { actionErrorMessage, actionSuccessMessage } = actionMessage();

    const dispatch = useDispatch();


    //lista maestros:
    useEffect(() => {
        dispatch(actionAllMaestro());
    }, [actionAllMaestro, dispatch]);

    const arrTeachers = useSelector((state) => state.teacherReducer.allMaestro)
    const emailsTeachers = arrTeachers.map(a => a.nombre);
    //


    //funcion envio de email
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_14zwd3g", "template_jyacclo", e.target, "BM4RNr2vJkeOZEPhz")
        .then(res => {
            dispatch(actionSuccessMessage("El correo se envió correctamente"));
            e.target.reset();
        }, (error) => {
            dispatch(actionErrorMessage(error.message));
        });
    }

    return (
        <>
            {/*             Se deben respetar los id/nombres de las etiquetas 
            ya que las utiliza para identificar los campos para el envio de mail*/}
            <form className="contact-form-container" onSubmit={sendEmail}>
                <div>
                    <h1>Contacto</h1>
                </div>

                <label htmlFor="name">Nombre</label>
                <div className="input-container">
                    <BsFillPersonFill className="group-input-icon" />
                    <input className="input-container" type="text" id="name" name="name" placeholder="Ingresa tu nombre..." required
                        minLength="4" maxLength="30" />
                </div>
                <label htmlFor="email">Correo</label>
                <div className="input-container">
                    <AiOutlineMail className="group-input-icon" />
                    <input className="input-container" type="text" id="email" name="email" placeholder="Ingresa tu correo..." required />
                </div>
                <label htmlFor="to_name">Maestro</label>
                <select className="select-maestro-contacto"  name="to_name" id="to_name">
                    {emailsTeachers.map(a => <option key={a}>{a}</option>)}
                </select>
                <label htmlFor="to_name">Mensaje</label>
                <textarea className="text-area" name="message" id="message" type="text" resize="none"></textarea>
                <button type="submit">Enviar Correo</button>

            </form>


        </>)

}


