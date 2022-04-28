import React from "react";
import DataTable from "react-data-table-component";
import { FaTrash } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { BsArrowLeftRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import "../assets/styles/components/MateriaList.css";

export const MateriaList = ({ isManagementMaterias, setIsManagementMaterias }) => {


    const paginationLangConfig = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    }

    const materiasOfTeacher = [
        { nombreMateria: "Matematica" },
        { nombreMateria: "Historia" },
        { nombreMateria: "Geografia" },
        { nombreMateria: "Ingles" },
        { nombreMateria: "Filosofia" }
    ]

    const notMateriasOfTeacher = [
        { nombreMateria: "Matematica" },
        { nombreMateria: "Historia" },
        { nombreMateria: "Geografia" },
        { nombreMateria: "Ingles" },
        { nombreMateria: "Filosofia" }
    ]

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
                <button title="Quitar estudiante" className="delete-button"><FaTrash /></button>
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
                <button title="Quitar estudiante" className="add-button"><IoMdAdd /></button>
            </div>,
            right: true,
            grow: 1
        }
    ]

    return (
        <div className={isManagementMaterias ? "modal-materia-list" : "modal-materia-list-hidden"}>
            <div className="modal-content">
                <span onClick={() => setIsManagementMaterias(false)} className="modal-close-button"><IoMdClose /></span>
                <h1 className="modal-title">Gestión de materias</h1>
                <div className="modal-tables-container">
                    <div className="table-container">
                        {
                            materiasOfTeacher.length !== 0 ?
                                <DataTable className="table-responsive"
                                    columns={columns_materias_teacher}
                                    data={materiasOfTeacher}
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
                            notMateriasOfTeacher.length !== 0 ?
                                <DataTable className="table-responsive"
                                    columns={columns_not_materias_teacher}
                                    data={notMateriasOfTeacher}
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


