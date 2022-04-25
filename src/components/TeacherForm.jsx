import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { teacherAction } from '../actions/teacherAction';

export const TeacherForm = () => {


    const dispatch = useDispatch();
    const { actionTeacherPost } = teacherAction();

    //ref al select de materias
    const matSelect = useRef(null)
    let mat = [];
    //almacena en el array lista de materias
    const addMat = (e) => {
        e.preventDefault();
        mat.push(matSelect.current.value)
        console.log(mat)
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const dir = e.target.elements.dir.value;
        const cel = e.target.elements.cel.value;
        const spec = e.target.elements.spec.value;
        const mate = mat;
        const state = e.target.elements.state.value;
        const teacherPost = {
            nombre: name,
            correo: email,
            direccion: dir,
            celular: cel,
            especialidad: spec,
            materias: mate,
            state: state
        }

        dispatch(actionTeacherPost(teacherPost))
        console.log(name, email, dir, cel, spec, mate, state)
    }

    return (<>
        
        <div className='row justify-content-center'>
            <div className="col-5 ">
                <form action="" onSubmit={submitHandler}>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id='name' placeholder='Ingrese Nombre' />
                    <label htmlFor="email">Correo</label>
                    <input type="text" id='email' placeholder='Ingrese Correo' />
                    <label htmlFor="dir">Dirección</label>
                    <input type="text" id='dir' placeholder='Ingrese Direccion' />
                    <label htmlFor="cel">Celular</label>
                    <input type="text" id='cel' placeholder='Ingrese Celular' />
                    <label htmlFor="spec">Especialidad</label>
                    <input type="text" id='spec' placeholder='Ingrese Especialidad' />

                    <label htmlFor="mate">Materias</label>
                    <select id='mate' name="Materias" ref={matSelect}>
                        <option value="Matematicas">Matematicas</option>
                        <option value="Historia">Historia</option>
                        <option value="Ingles">Ingles</option>
                    </select>
                    <button onClick={addMat}>Agregar materia</button>
                    <label htmlFor="state">Estado</label>
                    <select name="Estado" id="state">
                        <option value={true}>Activo</option>
                        <option value={false}>Inactivo</option>
                    </select>


                    <button type='submit' className='btn btn-outline-secondary'>Guardar Maestro</button>
                </form>
            </div>
        </div>
    </>
    )

}
