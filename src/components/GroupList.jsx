import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../assets/styles/components/GroupList.css";
import DataTable from "react-data-table-component";
import { actionGroup } from "../actions/actionGroup";
import { FaEdit, FaTrash } from "react-icons/fa";
import { RiGroupFill } from "react-icons/ri";
import { GrUserManager } from 'react-icons/gr'

export const GroupList = ({ setGroupEditingId, setGroupEditingName, setIsEditingGroup, setGroupEditingGrade, setGroupEditingCourse }) => {
    
    const dispatch = useDispatch();

    const { groups } = useSelector(state => state.groupReducer);
    
    const { actionGetGroups, actionDeleteGroup } = actionGroup();

    useEffect(() => {
        //dispatch(actionGetGroups());
    }, [actionGetGroups, dispatch]);

    const deleteGroup = (groupId) => {
        console.log("ID Grupo: ", groupId);
        //dispatch(actionDeleteGroup(groupId));
    }

    const editGroup = (groupId, groupName, groupGrade, groupCourse) => {
        setGroupEditingId(groupId);
        setGroupEditingName(groupName);
        setGroupEditingGrade(groupGrade);
        setGroupEditingCourse(groupCourse);
        setIsEditingGroup(true);
    }


    const groups2 = [
        {
            id: 1,
            nombre: "1A",
            grado: "1",
            curso: "A",
            director: null
        },
        {
            id: 2,
            nombre: "1B",
            grado: "1",
            curso: "B",
            director: "Fernanda Gonzáles"
        },
        {
            id: 3,
            nombre: "2A",
            grado: "2",
            curso: "A",
            director: null
        },
        {
            id: 4,
            nombre: "3A",
            grado: "3",
            curso: "A",
            director: "Juan Pérez"
        },
        {
            id: 5,
            nombre: "4A",
            grado: "4",
            curso: "A",
            director: "Leonardo López"
        },
        {
            id: 6,
            nombre: "4B",
            grado: "4",
            curso: "B",
            director: "Cristian Jiménez"
        },
        {
            id: 7,
            nombre: "4C",
            grado: "4",
            curso: "C",
            director: "Luis Hernández"
        },
        {
            id: 8,
            nombre: "5A",
            grado: "5",
            curso: "A",
            director: "Daniela Rodríguez"
        },
        {
            id: 9,
            nombre: "6A",
            grado: "6",
            curso: "A",
            director: "Héctor López"
        },
        {
            id: 10,
            nombre: "6B",
            grado: "6",
            curso: "B",
            director: "Tomás Quiroga"
        },
        {
            id: 11,
            nombre: "6C",
            grado: "6",
            curso: "C",
            director: "Luis Díaz"
        },
        {
            id: 12,
            nombre: "7A",
            grado: "7",
            curso: "A",
            director: "Ricardo Torres"
        },
    ];


    const columns = [
        {
            name: "Grupo",
            id: "columnGroup",
            selector: row => row.nombre,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray"
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
                {row.director === null ? <button title="Ver los maestros" className="view-students-button"><GrUserManager /></button> : null}
                <button title="Ver los estudiantes" className="view-students-button"><RiGroupFill /></button>
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
            <div className="datatable-container">
                <DataTable className="group-list-table table-responsive"
                    id={"tablita"}
                    columns={columns}
                    data={groups2 ? groups2 : null}
                    pagination
                    fixedHeader
                    fixedHeaderScrollHeight="calc(100vh - 195px)"
                    paginationComponentOptions={paginationLangConfig}
                />
            </div>
        </div>
    );
}