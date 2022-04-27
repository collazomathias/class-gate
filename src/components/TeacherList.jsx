import React from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { teacherAction } from '../actions/teacherAction';


//columnas de la tabla:
const columns = [{
    name: "Maestros",
    selector: row => row.nombre,
    sortable: true,
},
{
    name: "Especialidad",
    selector: row => row.especialidad,
    sortable: true,
    
}]
const TeacherList = () => {
    const {actionTeacherGetAll} = teacherAction();
    const dispatch = useDispatch();
    //arreglo que contiene maestros
    const arrTeachers = useSelector((state) => state.getAllTeacherReducer.teacherGetAll)
    arrTeachers.length ===0? dispatch(actionTeacherGetAll()): <></>



    //traduce el pie de tabla:
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    
    return (<>
        <p>Listado de Maestros:</p>
        <div>

            <DataTable
                title="Listado de Maestros"
                columns={columns}
                data={arrTeachers}
                pagination
                dense
                paginationComponentOptions={paginationComponentOptions}
            />
        </div>
    </>
    )
}

export default TeacherList;