import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import { teacherAction } from '../actions/teacherAction';

export const Contact = () => {
    const { actionTeacherGetAll } = teacherAction();
    const dispatch = useDispatch();


    //lista maestros:
    const arrTeachers = useSelector((state) => state.teacherReducer.teacherGetAll)
    arrTeachers.length === 0 ? dispatch(actionTeacherGetAll()) : <></>
    console.log(arrTeachers)
    const emailsTeachers = arrTeachers.map(a => a.nombre);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_14zwd3g', 'template_jyacclo', e.target, 'BM4RNr2vJkeOZEPhz')
            .then(res => {
                alert("Se envió correctamente el correo!")
                console.log(res)
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>

            <form onSubmit={sendEmail}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' name='name' placeholder='Ingrese Nombre' required
                    minLength="4" maxLength="30" />
                <label htmlFor="email">Correo</label>
                <input type="text" id='email' name='email' placeholder='Ingrese Correo' required />
                <label htmlFor="to_name">Seleccione Maestro</label>
                <select name="to_name" id="to_name">
                    {emailsTeachers.map(a => <option>{a}</option>)}
                </select>

                <textarea name="message" id="message" type="text"></textarea>

                <button type='submit'>Enviar Correo</button>

            </form>


        </>)

}


