import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { action } from "../actions/newStudentAction";

export const NewStudentForm = () => {
  const acudiente = useSelector((state) => state.newStudentReducer.acudiente);

  const estudiantes = useSelector(
    (state) => state.newStudentReducer.estudiantes
  );

  const {
    actionAcudienteVerifier,
    actionNewStudent,
    actionSaveAcudiente,
    actionSaveEstudiante,
  } = action();

  const dispatch = useDispatch();

  const documentHandler = async (event) => {
    event.preventDefault();
    const docId = document.getElementById("acudienteDocId").value;
    dispatch(actionAcudienteVerifier(docId));
  };

  const submitStudentHandler = async (event) => {
    event.preventDefault();
    const docId = event.target.elements.estudianteDocId.value;
    const name = event.target.elements.estudianteName.value;
    const grado = event.target.elements.estudianteGrado.value;
    const edad = event.target.elements.estudianteEdad.value;
    const newStudent = {
      documentoIdentidad: docId,
      nombre: name,
      grado: grado,
      edad: edad,
      documentoIdentidadAcudiente: acudiente.documentoIdentidad,
      estado: true,
    };
    dispatch(actionNewStudent(newStudent));
    event.target.reset();
  };

  const submitAllDataHandler = async () => {
    console.log("click");
    const newAcudiente = acudiente;
    newAcudiente.estudiantes = estudiantes;
    
    await estudiantes.map((estudiante) => {
        if (!estudiante.id) {
          dispatch(actionSaveEstudiante(estudiante));
        }        
    });
    
    await dispatch(actionSaveAcudiente(newAcudiente));
  };

  return (
    <>
      <h1>Registro de nuevo estudiante</h1>
      <h2>Datos acudiente</h2>
      <form onSubmit={documentHandler}>
        <label htmlFor="acudienteDocId">Número de identificación</label>
        <input
          required
          type="text"
          minLength="6"
          maxLength="12"
          pattern="[0-9]+"
          className="form-acudienteDocId"
          id="acudienteDocId"
          aria-describedby="Número de identificación"
          placeholder="Número de identificación"
        />
        <button type="submit" className="btn btn-primary">Buscar</button>
      </form>
      {acudiente ? (
        <>
          <p>Nombre: {acudiente.nombre}</p>
          <p>Correo: {acudiente.correo}</p>
          <p>Dirección: {acudiente.direccion}</p>
          <p>Teléfono: {acudiente.celular}</p>
          <h2>Agregar estudiante</h2>
          <form onSubmit={submitStudentHandler}>
            <label htmlFor="estudianteDocId">Número de identificación</label>
            <input
              required
              type="text"
              minLength="2"
              maxLength="12"
              pattern="[0-9]+"
              className="form-estudianteDocId"
              id="estudianteDocId"
              aria-describedby="Número de identificación"
              placeholder="Número de identificación"
            />
            <label htmlFor="estudianteName">Nombre completo</label>
            <input
              required
              type="text"
              minLength="2"
              maxLength="255"
              pattern="[a-zA-Z ]+"
              className="form-estudianteName"
              id="estudianteName"
              aria-describedby="Nombre completo"
              placeholder="Nombre completo"
            />
            <label htmlFor="estudianteGrado">Grado</label>
            <input
              required
              type="text"
              maxLength="2"
              className="form-estudianteGrado"
              id="estudianteGrado"
              aria-describedby="Grado"
              placeholder="Grado"
            />
            <label htmlFor="estudianteEdad">Edad</label>
            <input
              required
              type="text"
              maxLength="2"
              pattern="[0-9]+"
              className="form-estudianteEdad"
              id="estudianteEdad"
              aria-describedby="Edad"
              placeholder="Edad"
            />
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
          </form>
          {estudiantes.length >= 0
            ? estudiantes.map((student) => {
                return (
                  <div key={student.documentoIdentidad}>
                    <h3>{student.nombre}</h3>
                    <p>Documento: {student.documentoIdentidad}</p>
                    <p>Edad: {student.edad}</p>
                    <p>Grado: {student.grado}</p>
                    <p>Grupo: {student.grupo}</p>
                  </div>
                );
              })
            : null}
        </>
      ) : null}
      <button
        className="btn btn-primary"
        onClick={() => submitAllDataHandler()}
      >
        Guardar
      </button>
    </>
  );
};
