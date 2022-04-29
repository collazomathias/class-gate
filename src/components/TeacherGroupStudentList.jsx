import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import DataTable from "react-data-table-component";
import { FaPencilAlt } from "react-icons/fa";

export const TeacherGroupStudentList = ({setIsOpenTeacherGroupStudentList, isOpenTeacherGroupStudentList}) => {
  // const { acudientes } = useSelector(state => state.acudienteReducer);

  // const { actionAcudienteGetAll, actionAcudienteStudent } = actionAcudiente();
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const grupo = 
      {
          nombre: "Grupo 1",
        horario: {
            horaInicio: "10:00",
              horaFin: "11:00",
              dia: "Lunes"
        },
        estudiantes: [{
          id: 1,
          nombre: "Juan Perez",
        },
          {
          id: 2,
          nombre: "Juan Perez",
          },
          {
          id: 3,
          nombre: "Juan Perez",
          },]
      }
  

  const columns = [
    {
      id: "columnName",
      name: "Estudiantes",
      selector: (row) => row.nombre,
      sortable: true,
      style: {
        fontSize: 20,
        fontWeight: "bold",
        color: "gray",
        minWidth: "210px",
        maxWidth: "350px",
      },
    },
    {
      id: "columnAction",
      cell: (row) => (
        <div className="option-button-container">
          <button onClick={() => {
              // se abre el otro modal
              //se pasa el email
              //se trae notas estudiante
            }}
            title="Calificar estudiante"
            className="view-students-button" >
            <FaPencilAlt />
          </button>
        </div>
      ),
      right: true,
      style: {
        paddingTop: "8px",
        paddingBottom: "8px",
      },
    },
  ];

  //traduce el pie de tabla:
  const paginationComponentOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
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

  const [filterText, setFilterText] = useState("");
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = grupo.estudiantes.filter(
    (item) =>
      item.nombre &&
      item.nombre.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div
      className={isOpenTeacherGroupStudentList
          ? "student-list-modal-container"
          : "student-list-modal-container-hidden"
      }>
      <div className="modal-content">
        <span
          onClick={() => setIsOpenTeacherGroupStudentList(false)}
          className="modal-close-button"
        >
          <IoMdClose />
        </span>
        <h1 className="modal-title">Estudiantes</h1>
        <div className="modal-tables-container">
          <div className="teacher-container">
            <div className="table-container">
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
        </div>
      </div>
    </div>
  );
};

export default TeacherGroupStudentList;
