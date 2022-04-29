import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { actionGroup } from "../actions/actionGroup";
import "../assets/styles/components/HorariosList.css";
import { IoMdClose } from "react-icons/io";
import { RiBookletFill } from "react-icons/ri";

export const HorariosList = ({ idGroup, seeGroupClass, setSeeGroupClass }) => {

    const dispatch = useDispatch();

    const { actionGetAllHorariosGrupos } = actionGroup();

    const [horariosClase, setHorariosClase] = useState([]);
    //todos horarios grupo:
    const allHorariosGrupos = useSelector((state) => state.groupReducer.getAllHorariosGrupos);


    useEffect(() => {
        if(idGroup) dispatch(actionGetAllHorariosGrupos(idGroup));
    }, [actionGetAllHorariosGrupos, dispatch, idGroup]);

   
    const paginationLangConfig = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",

    }
    const columns = [
        {
            id: "columnMateria",
            name: "Materia",
            selector: row => row.materia ? row.materia.nombreMateria : null,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            }
        },
        {
            id: "columnMaestro",
            name: "Maestro",
            selector: row => row.maestro ? row.maestro.nombre : null,
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
                <button onClick={() => setHorariosClase(row.horarios)} title="Ver horarios clase" className="add-button"><RiBookletFill /></button>
            </div>,
            right: true,
         
        }
    ]

    
    const columns_horarios = [
        {
            id: "columnHI",
            name: "Hora Inicio",
            selector: row => row.horarioInicial ? row.horarioInicial : null,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            },
           
        },
        {
            id: "columnHF",
            name: "Hora Fin",
            selector: row => row.horarioFinal ? row.horarioFinal : null,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            },
          
        },
        {
            id: "columnDay",
            name: "Dia",
            selector: row => row.dia ? row.dia : null,
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
        <div className={seeGroupClass ? "horarios-list-modal-container" : "horarios-list-modal-container-hidden"}>
            <div className="modal-tables-horario-container">
                <span onClick={() => setSeeGroupClass(false)} className="modal-close-button"><IoMdClose /></span>
                <h1 className="modal-horarios-title">Ver horario de clases</h1>        
                <div className="datatables-container-horario">
                    { allHorariosGrupos && allHorariosGrupos.length ?
                    <div className="dt-container"> 
                    <DataTable
                        columns={columns}
                        data={allHorariosGrupos ? allHorariosGrupos : null}
                        pagination
                        paginationComponentOptions={paginationLangConfig}
                        fixedHeader
                        fixedHeaderScrollHeight="440px"
                    /> </div> :
                    <div className="empty-table dt-container">
                        <h1>Clases</h1>
                        <p>No hay clases agregadas en este grupo.</p>
                    </div>
                    }
                    { horariosClase &&   horariosClase.length ? 
                    <div className="dt-container">
                    <DataTable
                        columns={columns_horarios}
                        data={horariosClase ? horariosClase : null}
                        pagination
                        paginationComponentOptions={paginationLangConfig}
                        fixedHeader
                        fixedHeaderScrollHeight="440px"
                    /> </div> : 
                    <div className="empty-table dt-container">
                        <h1>Horarios de clase</h1>
                        <p>No hay horarios agregados a esta clase.</p>
                    </div>
                    }
                </div>
            </div>
        </div>
        

    </>
    )
}