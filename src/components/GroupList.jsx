import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/components/GroupList.css";
import DataTable from "react-data-table-component";
import { actionGroup } from "../actions/actionGroup";
import { FaEdit, FaTrash } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { GrUserManager } from 'react-icons/gr'

export const GroupList = ({ setEditGroupData, 
                            setIsEditingGroup,
                            setIsManagementStudents,
                            setManagementStudentsGroupData }) => {
    
    const dispatch = useDispatch();

    const { groups } = useSelector(state => state.groupReducer);
    
    const { actionGetGroups, actionDeleteGroup } = actionGroup();

    useEffect(() => {
        dispatch(actionGetGroups());
    }, [actionGetGroups, dispatch]);

    const deleteGroup = (groupId) => {
        dispatch(actionDeleteGroup(groupId));
    }

    const editGroup = (groupId, groupName, groupGrade, groupCourse) => {
        setEditGroupData({
            groupId: groupId,
            groupName: groupName,
            groupGrade: groupGrade,
            groupCourse: groupCourse
        });
        setIsEditingGroup(true);
    }

    const manageStudents = (groupId, groupName, groupGrade, groupCourse, groupStudents) => {
        setManagementStudentsGroupData({
            groupId: groupId,
            groupName: groupName,
            groupGrade: groupGrade,
            groupCourse: groupCourse,
            groupStudents: groupStudents
        });
        setIsManagementStudents(true);
    }

    const columns = [
        {
            name: "Grupo",
            id: "columnGroup",
            selector: row => row.nombre,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "130px"
            }
        },
        {
            name: "Director",
            id: "columnDirector",
            selector: row => row.director,
            sortable: true,
            grow: 4,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray"
            }
        },
        {
            id: "columnAction",
            cell: row => <div className="option-button-container">
                {row.maestro === null ? <button onClick={() => console.log("Ver maestros")} title="Ver los maestros" className="view-students-button"><GrUserManager /></button> : null}
                <button onClick={() => manageStudents(row.id, row.nombre, row.grado, row.curso, row.estudiantes)} title="Gestionar estudiantes" className="view-students-button"><RiGroupFill /></button>
                <button onClick={() => editGroup(row.id, row.nombre, row.grado, row.curso)} title="Editar grupo" className="edit-button"><FaEdit /></button>
                <button onClick={() => deleteGroup(row.id)} title="Eliminar grupo" className="delete-button"><FaTrash /></button>
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
        <div className="group-list-container">
            {
                groups.length !== 0 ?
                    <div className="datatable-container">
                        <DataTable className="table-responsive"
                            columns={columns}
                            data={groups}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="calc(100vh - 195px)"
                            paginationComponentOptions={paginationLangConfig}
                        />
                    </div> : 
                    <div className="empty-table">
                        <h1>Grupos</h1>
                        <p>No hay grupos agregados.</p>
                    </div>
            }
            
        </div>
    );
}