import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { teacherAction } from '../actions/teacherAction';


const teachList = [{
    nombre: "         masmalsmda carlos",
    especialidad: "matematicas"
},
{
    nombre: "robert",
    especialidad: "matematicas"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
},
{
    nombre: "robert"
}
]



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
    
    const arrTeachers = useSelector((state) => state.getAllTeacherReducer.teacherGetAll)
    arrTeachers.length ===0? dispatch(actionTeacherGetAll()): <></>
    
    console.log(arrTeachers)


    //traduce el pie de tabla:
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };
    
    return (<>
        <p>Listado de Maestros:</p>
        <div className="col-5">

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