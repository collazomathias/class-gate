import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import DataTable from "react-data-table-component";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsArrowLeftRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import "../assets/styles/components/MateriaList.css";
import { teacherAction } from "../actions/teacherAction";


export const MateriaList = ({ isManagementMaterias, setIsManagementMaterias, idMaestro, setIdMaestro }) => {

    const dispatch = useDispatch();

    const { actionUpdateMateriaMaestro, actionRemoveMateriaMaestro, actionAllMateriasFromMaestro, actionNotMateriasFromMaestro} = teacherAction();

    const { allMateriasFromMaestro, notMateriasFromMaestro } = useSelector(state => state.teacherReducer);

    useEffect(() => {
        if(idMaestro) dispatch(actionAllMateriasFromMaestro(idMaestro));
        if(idMaestro) dispatch(actionNotMateriasFromMaestro(idMaestro));
    }, [actionAllMateriasFromMaestro, actionNotMateriasFromMaestro, dispatch, idMaestro]);

    const paginationLangConfig = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    }

   
    const columns_materias_teacher = [
        {
            name: `Materias del profesor`,
            id: "columnStudent",
            selector: row => row.nombreMateria,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            },
            grow: 3
        },
        {
            id: "columnAction",
            cell: row => <div className="option-button-container">
                <button onClick={()=>removeMateriaFromTeacher(row.nombreMateria)} title="Quitar estudiante" className="delete-button"><FaTrash /></button>
            </div>,
            right: true,
            grow: 1,
        }
    ]

    const columns_not_materias_teacher = [
        {
            name: "Materias sin asignar",
            id: "columnStudent",
            selector: row => row.nombreMateria,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            },
            grow: 3
        },
        {
            id: "columnAction",
            cell: row => <div className="option-button-container">
                <button onClick={()=>addMateriaToTeacher(row.nombreMateria)} title="Agregar estudiante" className="add-button"><IoMdAdd /></button>
            </div>,
            right: true,
            grow: 1
        }
    ]

    const removeMateriaFromTeacher = (nombreMateria) => {
        dispatch(actionRemoveMateriaMaestro(idMaestro, nombreMateria));
    }

    const addMateriaToTeacher= (nombreMateria) => {
        dispatch(actionUpdateMateriaMaestro(idMaestro, nombreMateria));
    }

    return (
        <div className={isManagementMaterias ? "modal-materia-list" : "modal-materia-list-hidden"}>
            <div className="modal-content">
                <span onClick={() => setIsManagementMaterias(false)} className="modal-close-button"><IoMdClose /></span>
                <h1 className="modal-title">Gestión de materias</h1>
                <div className="modal-tables-container">
                    <div className="table-container">
                        {
                            allMateriasFromMaestro.length !== 0 ?
                                <DataTable className="table-responsive"
                                    columns={columns_materias_teacher}
                                    data={allMateriasFromMaestro}
                                    pagination
                                    fixedHeader
                                    fixedHeaderScrollHeight="calc(100% - 50px)"
                                    paginationComponentOptions={paginationLangConfig}
                                /> :
                                <div className="empty-table">
                                    <h1>Estudiante del grupo </h1>
                                    <p>No hay estudiantes asignados a este grupo.</p>
                                </div>
                        }
                    </div>
                    <BsArrowLeftRight className="double-arrow-icon" />
                    <div className="table-container">
                        {
                            notMateriasFromMaestro.length !== 0 ?
                                <DataTable className="table-responsive"
                                    columns={columns_not_materias_teacher}
                                    data={notMateriasFromMaestro}
                                    pagination
                                    fixedHeader
                                    fixedHeaderScrollHeight="calc(100% - 50px)"
                                    paginationComponentOptions={paginationLangConfig}
                                /> :
                                <div className="empty-table">
                                    <h1>Estudiantes sin grupo asignado</h1>
                                    <p>No hay estudiantes sin grupo.</p>
                                </div>
                        }
                    </div>

                </div>
                <div className="modal-button-container">
                    <button onClick={() => setIsManagementMaterias(false)} >Guardar cambios</button>
                </div>
            </div>

        </div>
    )
}


