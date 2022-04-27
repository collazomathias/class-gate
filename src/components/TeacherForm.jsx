import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { teacherAction } from '../actions/teacherAction';

export const TeacherForm = ({ docInput }) => {


    const dispatch = useDispatch();
    const { actionTeacherPost } = teacherAction();
    const { actionTeacherGetDoc } = teacherAction();
    //ref al select de materias
    const matSelect = useRef(null)
    //almacena en el array lista de materias
    let mat = [];
    const addMat = (e) => {
        e.preventDefault();
        let check = mat.find(a => a === matSelect.current.value);
        check === undefined ? mat.push(matSelect.current.value) : <></>
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        const document = docInput;
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const dir = e.target.elements.dir.value;
        const cel = e.target.elements.cel.value;
        const spec = e.target.elements.spec.value;
        const mate = mat;
        const status = e.target.elements.status.value;
        //validaciones
        if (!name) {
            alert('No has escrito nada en el usuario');
            return;
        }
        if (!(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i).test(email)) {
            alert("La dirección de email es incorrecta.");
            return;
        }
        //creacion objeto para el post
        const teacherPost = {
            documentoIdentidad: document,
            nombre: name,
            correo: email,
            direccion: dir,
            celular: parseInt(cel),
            especialidad: spec,
            materias: mate,
            estado: status
        }

        dispatch(actionTeacherPost(teacherPost))
        dispatch(actionTeacherGetDoc(docInput))
        alert("Registro Exitoso!!")
    }

    return (<>
        <div className='row justify-content-center'>
            <div className="col-5 ">
                <form action="" onSubmit={submitHandler} id="form" >
                    <p>{docInput}</p>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id='name' placeholder='Ingrese Nombre' required
                        minLength="4" maxLength="30" />

                    <label htmlFor="email">Correo</label>
                    <input type="text" id='email' placeholder='Ingrese Correo' required />

                    <label htmlFor="dir">Dirección</label>
                    <input type="text" id='dir' placeholder='Ingrese Direccion' maxLength="255" required />

                    <label htmlFor="cel">Celular</label>
                    <input type="number" id='cel' placeholder='Ingrese Celular' required />

                    <label htmlFor="spec">Especialidad</label>
                    <input type="text" id='spec' placeholder='Ingrese Especialidad' required />

                    <label htmlFor="mate">Materias</label>
                    <select id='mate' name="Materias" ref={matSelect}>
                        <option value="Trigonometría">Trigonometría</option>
                        <option value="Filosofia">Filosofia</option>
                        <option value="Español y Literatura">Español y Literatura</option>
                        <option value="Ingles">Ingles</option>
                        <option value="Política y Economía">Política y Economía</option>
                        <option value="Religión">Religión</option>
                        <option value="Fisica">Fisica</option>
                        <option value="Quimica">Quimica</option>
                    </select>
                    <button onClick={addMat}>Agregar materia</button>

                    <label htmlFor="state">Estado</label>
                    <select name="Estado" id="status">
                        <option value="true">Activo</option>
                        <option value="false">Inactivo</option>
                    </select>
                    <button type='submit'>Guardar Maestro</button>
                </form>
            </div>
        </div>
    </>
    )

}
