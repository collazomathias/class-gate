import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component';

const url="";

const teachList = [{
    nombre: "         masmalsmda carlos"
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
},
{
    nombre: "robert"
}
]
const fetchTeachers = async(dispatch)=>{
    await fetch(url)
        .then(response => response.json())
        .then((data)=>{
         
        }).catch(error=> console.log(error))

}


const TeacherList = () => {
    
    return (<>
        <p>Listado de Maestros:</p>
        <div className="col-5">

            <DataTable
                columns={[{
                    name: "Maestros",
                    selector: "nombre"
                },
                {
                    name: "",
                    selector: "id",
                    cell: (a) => (
                        <>
                            <button >Editar</button>

                        </>
                    )
                }]}
                data={teachList}
                pagination
            />
        </div>
    </>
    )
}

export default TeacherList;