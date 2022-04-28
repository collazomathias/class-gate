const actionNewGroup = (newGroup) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/addGrupo", {
            method: "POST",
            body: JSON.stringify(newGroup),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "addGroup",
            payload: data
        }));
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionEditGroup = (editedGroup) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/updateGrupo/" + editedGroup.id, {
            method: "PUT",
            body: JSON.stringify(editedGroup),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "editGroup",
            payload: data
        }));
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionGetGroups = () => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/allGruposActivos")
        .then(response => response.json())
        .then(data => dispatch({
            type: "getGroups",
            payload: data
        }));
    } catch(error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionGetGroupStudents = (groupId) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/allEstudiantesFromGrupo/" + groupId)
        .then(response => response.json())
        .then(data => {
            dispatch({
            type: "getGroupStudents",
            payload: data
        })});
    } catch(error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionGetStudentsWithOutGroup = (groupGrade) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/allEstudiantesSinGrupoByGrado/" + groupGrade)
        .then(response => response.json())
        .then(data => dispatch({
            type: "getStudentsWithOutGroup",
            payload: data
        }));
    } catch(error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionDeleteGroup = (id) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/deleteGrupo/" + id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            dispatch({
            type: "deleteGroup",
            payload: data
        })});
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionRemoveStudentFromGroup = (studentId, groupId) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/deleteEstudianteFromGrupo/" + studentId + "/" + groupId, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "removeStudentFromGroup",
            payload: data
        }));
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionAddStudentToGroup = (studentId, groupId) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/addEstudianteToGrupo/" + studentId + "/" + groupId, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            dispatch({
            type: "addStudentToGroup",
            payload: data
        })});
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionGetAllHorariosGrupos = (idGrupo) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/allHorariosGrupos/" + idGrupo)
        .then(response => response.json())
        .then(data => dispatch({
            type: "allHorariosGrupos",
            payload: data
        }));
    } catch(error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionAddHorarioClase = (horarios, idGrupo, idProfesor, materia) => async(dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/addHorarioClase/" + idGrupo + "/"+ idProfesor + "/"+ materia, {
            method: "PUT",
            body: JSON.stringify(horarios),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => {
            dispatch({
            type: "horarioClase",
            payload: data
        })});
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

export const actionGroup = () => {
    return { actionNewGroup,
            actionGetGroups, 
            actionDeleteGroup, 
            actionEditGroup, 
            actionGetGroupStudents, 
            actionGetStudentsWithOutGroup, 
            actionRemoveStudentFromGroup,
            actionAddStudentToGroup, 
            actionGetAllHorariosGrupos,
            actionAddHorarioClase
         };
}