import React from 'react'

export const Teacher =( {teacher} )=>{


    return(<>
        <ul>
                <li>Nombre: {teacher.nombre}</li>
                <li>Correo: {teacher.correo}</li>
                <li>Direccion: {teacher.direccion}</li>
                <li>Celular: {teacher.celular}</li>
                <li>Estado: {teacher.estado === true? "Activo": "Inactivo"}</li>
                <li>Especialidad: {teacher.especialidad}</li>
                <li>Materias que dicta: <ol>
                    {teacher.materias !== null?teacher.materias.map(a=> <li>{a}</li>):<></>}
                    </ol>
                </li>
                </ul>
                </>
    )
}