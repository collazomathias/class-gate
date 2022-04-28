import React, { useEffect }from "react";
import { IoMdClose } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { actionAcudiente } from "../actions/actionAcudiente";

export const ManagementStudent = ({
    setIsManagementStudents,
    isManagementStudents,
    setDocIdAcudiente,
    docIdAcudiente
}) => {

    const { students } = useSelector(state => state.acudienteReducer);

    const {
        actionSaveStudent,
        actionAcudienteStudent
    } = actionAcudiente();

    const dispatch = useDispatch();

    const submitStudentHandler = async (event) => {
        console.log("submitStudentHandler");
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
                {/* <button title="Quitar estudiante" className="delete-button"><FaTrash /></button> */}
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


    return (<div className={ isManagementStudents ? "student-list-modal-container" : "student-list-modal-container-hidden"}>
    <div className="modal-content">
        <span onClick={() => setIsManagementStudents(false)} className="modal-close-button"><IoMdClose /></span>
        <h1 className="modal-title">Gestionar estudiantes del acudiente</h1>
        <div className="modal-tables-container">
            <div className="table-container">
                <h2>Agregar estudiante</h2>
                <form onSubmit={submitStudentHandler}>
                    <label htmlFor="estudianteDocId">Número de identificación</label>
                    <input
                    required
                    type="text"
                    minLength="2"
                    maxLength="12"
                    pattern="[0-9]+"
                    className="form-estudianteDocId"
                    id="estudianteDocId"
                    aria-describedby="Número de identificación"
                    placeholder="Número de identificación"
                    />
                    <label htmlFor="estudianteName">Nombre completo</label>
                    <input
                    required
                    type="text"
                    minLength="2"
                    maxLength="255"
                    pattern="[a-zA-Z ]+"
                    className="form-estudianteName"
                    id="estudianteName"
                    aria-describedby="Nombre completo"
                    placeholder="Nombre completo"
                    />
                    <label htmlFor="estudianteGrado">Grado</label>
                    <input
                    required
                    type="text"
                    maxLength="2"
                    className="form-estudianteGrado"
                    id="estudianteGrado"
                    aria-describedby="Grado"
                    placeholder="Grado"
                    />
                    <label htmlFor="estudianteEdad">Edad</label>
                    <input
                    required
                    type="text"
                    maxLength="2"
                    pattern="[0-9]+"
                    className="form-estudianteEdad"
                    id="estudianteEdad"
                    aria-describedby="Edad"
                    placeholder="Edad"
                    />
                    <button type="submit" className="btn btn-primary">
                    Agregar
                    </button>
                </form>
            </div>
            <div className="table-container">
                {
                    students.length !== 0 ? 
                    <DataTable className="table-responsive"
                        columns={columns_group_students}
                        data={students}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="calc(100% - 50px)"
                        paginationComponentOptions={paginationLangConfig}
                    /> : 
                    <div className="empty-table">
                        <h1>Estudiantes vinculados al acudiente</h1>
                        <p>El acudiente no tiene estudiantes vinculados</p>
                    </div>
                }
            </div>
        </div>
    </div>
</div>)
}