import React, { useState, useMemo, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import { RiGroupFill } from "react-icons/ri";
import "../assets/styles/components/TeacherList.css";
import { actionAcudiente } from "../actions/actionAcudiente";

const AcudienteList = ({
    setIsManagementStudents,
    setDocIdAcudiente,
}) => {

    const { acudientes } = useSelector(state => state.acudienteReducer);

    const { actionAcudienteGetAll, actionAcudienteStudent } = actionAcudiente();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actionAcudienteGetAll());
    }, [actionAcudienteGetAll, dispatch]);

    const columns = [
        {
            id: "columnName",
            name: "Acudientes",
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
            id: "columnCellphone",
            name: "Celular",
            selector: row => row.celular,
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
                <button onClick={() => {
                    setIsManagementStudents(true);
                    setDocIdAcudiente(row.documentoIdentidad);
                    dispatch(actionAcudienteStudent(row.documentoIdentidad));
                    }} title="Gestionar estudiantes" className="view-students-button"><RiGroupFill /></button>
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
    const filteredItems = acudientes.filter(
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
            <p>Lista de acudientes</p>
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

export default AcudienteList;