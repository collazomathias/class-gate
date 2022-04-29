import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/components/GroupList.css";
import "../assets/styles/components/GroupDirectorList.css";
import DataTable from "react-data-table-component";
import { actionGroup } from "../actions/actionGroup";
import { FaEdit, FaTrash, FaUserTie } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { groupDirectorAction } from "../actions/groupDirectorAction";
import { AiFillHourglass } from "react-icons/ai";
import { RiBookletFill } from "react-icons/ri";

export const GroupList = ({ setEditGroupData, 
                            setIsEditingGroup,
                            setIsManagementStudents,
                            setManagementStudentsGroupData,
                            setIsEditingGroupDirector,
                            setIdGroup,
                            setManageGroupClass,
                            setSeeGroupClass }) => {
    
    const dispatch = useDispatch();

    const { groups } = useSelector(state => state.groupReducer);

    const { director } = useSelector(state => state.groupDirectorReducer);
    
    const { actionGetGroups, actionDeleteGroup } = actionGroup();

    const { notGroupDirectorGetAction } = groupDirectorAction();

    useEffect(() => {
        dispatch(actionGetGroups());
        dispatch(notGroupDirectorGetAction());
    }, [actionGetGroups, director, dispatch]);

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

    const manageDirectors = (group) => {
        
        dispatch(notGroupDirectorGetAction(group));
        setIsEditingGroupDirector(true);
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
            selector: row => row.director ? row.director.nombre : "Sin director",
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
                <button onClick={() => manageDirectors(row)} title="Gestionar director" className="view-students-button"><FaUserTie /></button>
                <button onClick={() => manageStudents(row.id, row.nombre, row.grado, row.curso, row.estudiantes)} title="Gestionar estudiantes" className="view-students-button"><RiGroupFill /></button>
                <button onClick={() => editGroup(row.id, row.nombre, row.grado, row.curso)} title="Editar grupo" className="edit-button"><FaEdit /></button>
                <button onClick={() => { setIdGroup(row.id); setManageGroupClass(true)} } title="Agregar clase" className="add-button"><AiFillHourglass /></button>
                <button onClick={() => { setIdGroup(row.id); setSeeGroupClass(true)} } title="Ver clases" className="add-button"><RiBookletFill /></button>
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