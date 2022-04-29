import React, { useEffect } from "react";
import { teacherManagerAction } from "../actions/teacherManagerAction";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import { BsCalendar4Week } from "react-icons/bs";

export const TeacherManager = ({user, setIsOpenTeacherGroups, isOpenTeacherGroups }) => {
    const email = user.email

    const dispatch = useDispatch();

    const { group, materias, clases } = useSelector(state => state.teacherManagerReducer);

    const {teacherGroupGetAction, teacherMateriaGetAction, teacherClassGetAction} = teacherManagerAction();

    useEffect( () => {
        // dispatch(teacherGroupGetAction(email))
        // dispatch(teacherMateriaGetAction(email))
        // dispatch(teacherClassGetAction())
    }, []);

    const paginationLangConfig = {
        rowsPerPageText: "Filas por página",
        rangeSeparatorText: "de",
        selectAllRowsItem: true,
        selectAllRowsItemText: "Todos",
    }

   
    const columns_materias_teacher = [
        {
            name: `Programa de clases`,
            id: "columnMateria",
            selector: row => row.materia.nombreMateria,
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
                <button onClick={() => setIsOpenTeacherGroups(true)} title="Horarios de clases" className="add-button"><BsCalendar4Week /></button>
            </div>,
            right: true,
            grow: 1,
        }
    ]

    return (
        <>
            {group ?
                <div>
                    <h1>{`Usted es director del grupo: ${group.nombre}`}</h1>
                    <button>Información del grupo</button>
                </div>
                :
                <h1>Gestión de maestro</h1>
            }
            <div>
            {
                materias.length !== 0 ?
                    <DataTable className="table-responsive"
                        columns={columns_materias_teacher}
                        data={materias}
                        pagination
                        fixedHeader
                        fixedHeaderScrollHeight="calc(100% - 50px)"
                        paginationComponentOptions={paginationLangConfig}
                    /> :
                    <div className="empty-table">
                        <h1>Programa de clases</h1>
                        <p>No tiene clases programadas.</p>
                    </div>
            }
            </div>
        </>
    );
}