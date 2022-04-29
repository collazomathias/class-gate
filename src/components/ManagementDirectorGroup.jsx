import React, {useEffect} from "react";
import { IoMdClose } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import {  } from "../actions/actionAcudiente";
import "../assets/styles/components/ManagementStudent.css";
import { MdCompareArrows } from "react-icons/md";
import { groupDirectorAction } from "../actions/groupDirectorAction";
import { actionGroup } from "../actions/actionGroup";

export const ManagementDirectorGroup = ({ setIsEditingGroupDirector, isEditingGroupDirector }) => {

    const { notDirectors, director, group } = useSelector(state => state.groupDirectorReducer);
    
    const { directorToGroupAction, removeDirectorToGroupAction } = groupDirectorAction();

    const dispatch = useDispatch();

    const addDirectorToGroup = async (teacher) => {
        director && dispatch(removeDirectorToGroupAction(director, group.id))
        await dispatch(directorToGroupAction(teacher, group.id));
    };

    const removeDirectorFromGroup = (teacher) => {
        dispatch(removeDirectorToGroupAction(teacher, group.id));
    };

    const columns_group_notDirectors = [
        {
            name: "Maestros disponibles",
            id: "columnNotDirector",
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
                <button onClick={() => addDirectorToGroup(row)} title="Seleccionar director" className="add-button"><MdCompareArrows /></button> 
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
        <div className={ isEditingGroupDirector ? "group-director-list-modal-container" : "group-director-list-modal-container-hidden"}>
            <div className="modal-content">
                <span onClick={() => setIsEditingGroupDirector(false)} className="modal-close-button"><IoMdClose /></span>
                <h1 className="modal-title">Gestionar grupo {group ? group.nombre : null}</h1>
                <div className="modal-tables-container">
                    <div className="table-container border-less director">
                        <h2 className="title-table-container">Director de grupo</h2>
                        <h3 className="title-table-container">{director ? director.nombre : "El grupo no tiene director"}</h3>
                        <button onClick={() => removeDirectorFromGroup(director)} id="btn-director" ><FaTrash className="modal-button-icon director-icon" /> Eliminar director</button>
                    </div>
                    <div className="table-container">
                    {
                        notDirectors.length !== 0 ? 
                        <DataTable className="table-responsive"
                            columns={columns_group_notDirectors}
                            data={notDirectors}
                            pagination
                            fixedHeader
                            fixedHeaderScrollHeight="calc(100% - 50px)"
                            paginationComponentOptions={paginationLangConfig}
                        /> : 
                        <div className="empty-table">
                            <h1>Maestros disponibles</h1>
                            <p>No hay maestros disponibles para ser asignados</p>
                        </div>
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}