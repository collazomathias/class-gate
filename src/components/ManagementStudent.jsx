import React from "react";
import { IoMdClose } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { actionAcudiente } from "../actions/actionAcudiente";
import "../assets/styles/components/ManagementStudent.css";
import { MdDriveFileRenameOutline, MdPersonAddAlt1 } from "react-icons/md";

export const ManagementStudent = ({ setIsManagementStudents, isManagementStudents, docIdAcudiente }) => {

    const { students } = useSelector(state => state.acudienteReducer);

    const { actionSaveStudent } = actionAcudiente();

    const dispatch = useDispatch();

    const submitStudentHandler = async (event) => {
        event.preventDefault();
        const docId = event.target.elements.estudianteDocId.value;
        const name = event.target.elements.estudianteName.value;
        const grado = event.target.elements.estudianteGrado.value;
        const edad = event.target.elements.estudianteEdad.value;
        const newStudent = {
            documentoIdentidad: docId,
            nombre: name,
            grado: grado,
            edad: edad,
            documentoIdentidadAcudiente: docIdAcudiente,
            estado: true,
        };
        await dispatch(actionSaveStudent(newStudent));
        event.target.reset();
    };

    const columns_group_students = [
        {
            name: "Estudiante",
            id: "columnStudent",
            selector: row => row.nombre,
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

    const paginationLangConfig = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    }

    return (
        <div className={ isManagementStudents ? "student-list-modal-container" : "student-list-modal-container-hidden"}>
            <div className="modal-content">
                <span onClick={() => setIsManagementStudents(false)} className="modal-close-button"><IoMdClose /></span>
                <h1 className="modal-title">Gestionar estudiantes del acudiente</h1>
                <div className="modal-tables-container">
                    <div className="table-container border-less">
                        <h2 className="title-table-container">Agregar estudiante</h2>
                        <form onSubmit={submitStudentHandler}>
                            <div className="label-input-container">
                                <label htmlFor="estudianteDocId">Número de identificación</label>
                                <div className="input-container">
                                    <MdDriveFileRenameOutline className="input-icon input-icon-modal" /> 
                                    <input required type="text" minLength="2" maxLength="12" pattern="[0-9]+" id="estudianteDocId" placeholder="Ingrese la identificación..." />
                                </div>
                            </div>
                            <div className="label-input-container">
                                <label htmlFor="estudianteName">Nombre completo</label>
                                <div className="input-container">
                                    <MdDriveFileRenameOutline className="input-icon input-icon-modal" /> 
                                    <input required type="text" minLength="2" maxLength="255" pattern="[a-zA-Z ]+" id="estudianteName" placeholder="Ingrese el nombre..." />
                                </div>
                            </div>
                            <div className="label-input-container">
                                <label htmlFor="estudianteGrado">Grado</label>
                                <div className="input-container">
                                    <MdDriveFileRenameOutline className="input-icon input-icon-modal" /> 
                                    <input required type="text" maxLength="2" id="estudianteGrado" placeholder="Ingrese el grado..." />
                                </div>
                            </div>
                            <div className="label-input-container">
                                <label htmlFor="estudianteEdad">Edad</label>
                                <div className="input-container">
                                    <MdDriveFileRenameOutline className="input-icon input-icon-modal" /> 
                                    <input required type="text" maxLength="2" pattern="[0-9]+" id="estudianteEdad" placeholder="Ingrese la edad..." />
                                </div>
                            </div>
                            <button type="submit"><MdPersonAddAlt1 className="modal-button-icon" />Agregar</button>
                        </form>
                    </div>
                    <div className="table-container table-100">
                    {
                        students.length !== 0 ? 
                        <DataTable className="table-responsive"
                            columns={columns_group_students}
                            data={students}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="calc(100% - 60px)"
                            paginationComponentOptions={paginationLangConfig}
                        /> : 
                        <div className="empty-table">
                            <h1>Estudiantes vinculados al acudiente</h1>
                            <p>El acudiente no tiene estudiantes vinculados</p>
                        </div>
                    }
                    </div>
                </div>
                <div className="modal-button-container">
                    <button onClick={() => setIsManagementStudents(false)} >Guardar cambios</button>
                </div>
            </div>
        </div>
    )
}