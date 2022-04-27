import React, { useState, useMemo, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import { teacherAction } from '../actions/teacherAction';
import { BsBook } from "react-icons/bs"


//columnas de la tabla:

const TeacherList = ( {isManagementMaterias, setIsManagementMaterias}  ) => {
    const { actionTeacherGetAll } = teacherAction();
    const dispatch = useDispatch();
    //arreglo que contiene maestros
    const arrTeachers = useSelector((state) => state.teacherReducer.teacherGetAll)
    arrTeachers.length === 0 ? dispatch(actionTeacherGetAll()) : <></>

    const columns = [{
        name: "Maestros",
        selector: row => row.nombre,
        sortable: true,
    },
    {
        name: "Especialidad",
        selector: row => row.especialidad,
        sortable: true,
    
    },
    {
        id: "columnAction",
                cell: row => <div className="option-button-container">
                    <button onClick={()=>setIsManagementMaterias(true)} title="Gestionar materias" className="view-students-button"><BsBook /></button>
                 </div>,
                right: true,
    
    }]

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
                placeholder="Filter By Name"
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



    return (<>
        <p>Listado de Maestros:</p>
        <div>

            <DataTable
                title="Listado de Maestros"
                columns={columns}
                data={filteredItems}
                pagination
                dense
                paginationComponentOptions={paginationComponentOptions}
                paginationResetDefaultPage={resetPaginationToggle} 
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                persistTableHead
            />
        </div>
    </>
    )
}

export default TeacherList;