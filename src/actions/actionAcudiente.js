const actionAcudienteGetAll = () => async (dispatch) => {
    try {
        await fetch("https://classgate.herokuapp.com/allAcudiente", {
            method: "GET",
            headers: { "Content-Type": "aplication/json" }
        })
        .then(response => response.json())
        .then((data) => {
            dispatch({
                type: "acudienteGetAll",
                payload: data
            });
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionSaveStudent = (student) => async (dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/addEstudiante", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(student)
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: "studentSaved",
                payload: data
            });
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionAcudienteStudent = (acudienteDocId) => async (dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/allEstudiantesFromAcudiente/" + acudienteDocId, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: "studentFromAcudiente",
                payload: data
            });
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

export const actionAcudiente = () => {
    return { actionAcudienteGetAll, actionSaveStudent, actionAcudienteStudent };
}