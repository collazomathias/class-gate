import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { teacherAction } from "../actions/teacherAction";
import { BsBook } from "react-icons/bs";
import "../assets/styles/components/TeacherList.css";

const TeacherList = ({ setIsManagementMaterias }) => {

    const { actionTeacherGetAll } = teacherAction();
    const dispatch = useDispatch();

    //arreglo que contiene maestros
    const arrTeachers = useSelector((state) => state.teacherReducer.teacherGetAll)
    arrTeachers.length === 0 ? dispatch(actionTeacherGetAll()) : <></>

    const columns = [
        {
            id: "columnName",
            name: "Maestros",
            selector: row => row.nombre,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "210px",
                maxWidth: "350px"
            },
        },
        {
            id: "columnSpeciality",
            name: "Especialidad",
            selector: row => row.especialidad,
            sortable: true,
            style: {
                fontSize: 20,
                fontWeight: "bold",
                color: "gray",
                minWidth: "210px",
                maxWidth: "350px"
            },

        },
        {
            id: "columnAction",
            cell: row => <div className="option-button-container">
                <button onClick={() => setIsManagementMaterias(true)} title="Gestionar materias" className="view-students-button"><BsBook /></button>
            </div>,
            right: true,
            style: {
                paddingTop: "8px",
                paddingBottom: "8px"
            },
        }
    ];

    //traduce el pie de tabla:
    const paginationComponentOptions = {
        rowsPerPageText: 'Filas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'Todos',
    };

    const FilterComponent = ({ filterText, onFilter, onClear }) => (
        <>
            <input
                id="search"
                type="text"
                placeholder="Filtrar por nombre..."
                value={filterText}
                onChange={onFilter}
            />
            <button onClick={onClear}>Limpiar</button>
        </>
    );

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = arrTeachers.filter(
        item => item.nombre && item.nombre.toLowerCase().includes(filterText.toLowerCase()),
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };
        return (
            <FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div className="teacher-container">
            <p>Lista de maestros</p>
            <div className="teacher-list-container">
                <DataTable
                    columns={columns}
                    data={filteredItems}
                    pagination
                    dense
                    paginationComponentOptions={paginationComponentOptions}
                    paginationResetDefaultPage={resetPaginationToggle} 
                    subHeader
                    subHeaderComponent={subHeaderComponentMemo}
                    persistTableHead
                    fixedHeader
                    fixedHeaderScrollHeight="calc(100vh - 350px)"
                />
            </div>
        </div>
    )
}

export default TeacherList;