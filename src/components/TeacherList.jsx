import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import DataTable from 'react-data-table-component';

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

const TeacherList = () => {
    // const put = useRef(null);
    //teachList.map(a=> put.current.innerHTML += `<li>${a.nombre}</li>`)
    //console.log(teachList.map(a=> `<h1>${a.nombre}</h1>`))



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
                    selector: "_id",
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