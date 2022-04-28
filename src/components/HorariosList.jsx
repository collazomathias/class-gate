import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { actionGroup } from "../actions/actionGroup";

export const HorariosList = ( idGrupo ) => {


    const dispatch = useDispatch();

    const { actionGetAllHorariosGrupos } = actionGroup();

    const [horariosClase, setHorariosClase] = useState([]);


    useEffect(() => {
        dispatch(actionGetAllHorariosGrupos(idGrupo));
    }, [actionGetAllHorariosGrupos, dispatch]);

    //todos horarios grupo:
    const allHorariosGrupos = useSelector((state) => state.groupReducer.getAllHorariosGrupos);
    console.log(allHorariosGrupos)
   

    const paginationLangConfig = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",

    }
    const columns = [
        {
            name: "Materia",
            id: "columnStudent",
            selector: row => row.materia.nombreMateria,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            }
        },
        {
            name: "Maestro",
            id: "columnStudent",
            selector: row => row.maestro.nombre,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            },
           
        },
        {
            id: "columnAction",
            cell: row => <div >
                <button onClick={() => setHorariosClase(row.horarios)} title="Ver horarios clase" >Ver</button>
            </div>,
            left: true,
         
        }
    ]

    
    const columns_horarios = [
        {
            name: "Hora Inicio",
            id: "columnStudent",
            selector: row => row.horarioInicial,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            },
           
        },
        {
            name: "Hora Fin",
            id: "columnStudent",
            selector: row => row.horarioFinal,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            },
          
        },
        {
            name: "Dia",
            id: "columnStudent",
            selector: row => row.dia,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            },
           
        }
    ]


    return (<>

        <DataTable
            title="Movie List - First row expanded"
            columns={columns}
            data={allHorariosGrupos}
            pagination
            paginationComponentOptions={paginationLangConfig}

        />

        <DataTable
            title="Movie List - First row expanded"
            columns={columns_horarios}
            data={horariosClase}
            pagination
            paginationComponentOptions={paginationLangConfig}

        />

    </>
    )
}