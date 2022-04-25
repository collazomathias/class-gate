import React, { useRef } from 'react'

export const TeacherForm = () => {

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
        const esp = e.target.elements.esp.value;
        const mate = mat;
        const state = e.target.elements.state.value;
        console.log(name, email, dir, cel, esp, mate, state)
    }

    return (<>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossorigin="anonymous"
        />
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
                    <label htmlFor="esp">Especialidad</label>
                    <input type="text" id='esp' placeholder='Ingrese Especialidad' />

                    <label htmlFor="mate">Materias</label>
                    <select id='mate' name="Materias" ref={matSelect}>
                        <option value="Matematicas">Matematicas</option>
                        <option value="Historia">Historia</option>
                        <option value="Ingles">Ingles</option>
                    </select>
                    <button onClick={addMat}>Agregar materia</button>
                    <label htmlFor="state">Estado</label>
                    <select name="Estado" id="state">
                        <option value="Activo">Activo</option>
                        <option value="Inactivo">Inactivo</option>
                    </select>


                    <button type='submit' className='btn btn-outline-secondary'>Guardar Maestro</button>
                </form>
            </div>
        </div>
    </>
    )

}
