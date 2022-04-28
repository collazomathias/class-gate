import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import emailjs from 'emailjs-com';
import { teacherAction } from '../actions/teacherAction';

export const Contact = () => {
    
    const { actionAllMaestro } = teacherAction();
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
        emailjs.sendForm('service_14zwd3g', 'template_jyacclo', e.target, 'BM4RNr2vJkeOZEPhz')
            .then(res => {
                alert("Se envió correctamente el correo!")
                console.log(res)
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    }
    //


    return (
        <>
            {/*             Se deben respetar los id/nombres de las etiquetas 
            ya que las utiliza para identificar los campos para el envio de mail*/}
            <form onSubmit={sendEmail}>
                <div>
                    <h1>Contacto</h1>
                </div>

                <label htmlFor="name">Nombre</label>
                <div>
                    <input type="text" id='name' name='name' placeholder='Ingrese Nombre' required
                        minLength="4" maxLength="30" />
                </div>
                <label htmlFor="email">Correo</label>
                <div>
                    <input type="text" id='email' name='email' placeholder='Ingrese Correo' required />
                </div>
                <label htmlFor="to_name">Seleccione Maestro</label>
                <div>
                    <select name="to_name" id="to_name">
                        {emailsTeachers.map(a => <option>{a}</option>)}
                    </select>
                </div>
                <div>
                    <textarea name="message" id="message" type="text"></textarea>
                </div>
                <button type='submit'>Enviar Correo</button>

            </form>


        </>)

}


