import React, { useEffect } from "react";
import "../assets/styles/components/StudentList.css";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { TiUserAdd } from "react-icons/ti";
import { BsArrowLeftRight } from "react-icons/bs";
import DataTable from "react-data-table-component";
import { actionGroup } from "../actions/actionGroup";

export const StudentList = ({ isManagementStudents,
                            managementStudentsGroupData,
                            setIsManagementStudents }) => {

    const dispatch = useDispatch();

    const { actionGetGroupStudents, actionGetStudentsWithOutGroup, actionRemoveStudentFromGroup, actionAddStudentToGroup } = actionGroup();
    const { groupStudents, studentsWithOutGroup } = useSelector(state => state.groupReducer);

    useEffect(() => {
        if(managementStudentsGroupData) dispatch(actionGetGroupStudents(managementStudentsGroupData.groupId));
        if(managementStudentsGroupData) dispatch(actionGetStudentsWithOutGroup(managementStudentsGroupData.groupGrade));
    }, [actionGetGroupStudents, actionGetStudentsWithOutGroup, dispatch, managementStudentsGroupData]);

    const columns_group_students = [
        {
            name: `Estudiante del grupo ${managementStudentsGroupData ? managementStudentsGroupData.groupName: null}`,
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
                <button onClick={() => removeStudentFromGroup(row.id)} title="Quitar estudiante" className="delete-button"><FaTrash /></button>
            </div>,
            right: true,
            grow: 1,
        }
    ]

    const columns_students_without_group = [
        {
            name: "Estudiantes sin grupo",
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
                <button onClick={() => addStudentToGroup(row.id)} title="Quitar estudiante" className="add-button"><TiUserAdd /></button>
            </div>,
            right: true,
            grow: 1
        }
    ]

    const removeStudentFromGroup = (studentId) => {
        dispatch(actionRemoveStudentFromGroup(studentId, managementStudentsGroupData.groupId));
    }

    const addStudentToGroup= (studentId) => {
        dispatch(actionAddStudentToGroup(studentId, managementStudentsGroupData.groupId));
    }

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
                <h1 className="modal-title">Gestionar estudiantes del grupo</h1>
                <div className="modal-tables-container">
                    <div className="table-container">
                        {
                            groupStudents.length !== 0 ? 
                            <DataTable className="table-responsive"
                                columns={columns_group_students}
                                data={groupStudents}
                                pagination
                                fixedHeader
                                fixedHeaderScrollHeight="calc(100% - 50px)"
                                paginationComponentOptions={paginationLangConfig}
                            /> : 
                            <div className="empty-table">
                                <h1>Estudiante del grupo {managementStudentsGroupData ? managementStudentsGroupData.groupName : null}</h1>
                                <p>No hay estudiantes asignados a este grupo.</p>
                            </div>
                        }
                    </div>
                    <BsArrowLeftRight className="double-arrow-icon" />
                    <div className="table-container">
                        {
                            studentsWithOutGroup.length !== 0 ? 
                            <DataTable className="table-responsive"
                                columns={columns_students_without_group}
                                data={studentsWithOutGroup}
                                pagination
                                fixedHeader
                                fixedHeaderScrollHeight="calc(100% - 50px)"
                                paginationComponentOptions={paginationLangConfig}
                            /> : 
                            <div className="empty-table">
                                <h1>Estudiantes sin grupo asignado</h1>
                                <p>No hay estudiantes sin grupo en {managementStudentsGroupData ? managementStudentsGroupData.groupGrade : null}° grado.</p>
                            </div>
                        }
                    </div>
                </div>
                <div className="modal-button-container">
                    <button onClick={() => setIsManagementStudents(false)} >Guardar cambios</button>
                </div>
            </div>
        </div>
    );
}