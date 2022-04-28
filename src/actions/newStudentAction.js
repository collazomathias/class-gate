const actionAcudienteVerifier = (docId) => async (dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/searchAcudiente/" + docId, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
            if (data.documentoIdentidad) {
                return dispatch({
                    type: "stateAcudiente",
                    payload: data,
                });
            }
            dispatch({
                type: "alertMessage",
                payload: "No se encontró el acudiente.",
            });
            dispatch({
                type: "AcudienteNotFound",
                payload: null,
            });
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message,
        });
    }
}

const actionNewStudent = (estudiante) => async (dispatch) => {
    dispatch({
        type: "stateNewStudent",
        payload: estudiante,
    });
}

const actionCloseAlertMessage = () => async (dispatch) => {
    dispatch({
        type: "closeAlertMessage",
    });
}

const actionSaveAcudiente = (saveAcudiente) => async (dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/updateAcudiente/"+saveAcudiente.id, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(saveAcudiente),
        })
        .then((res) => res.json())
        .then((data) => {
            dispatch({
                type: "acudienteSaved",
            });
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message,
        });
    }
}

const actionSaveEstudiante = (saveEstudiante) => async (dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/addEstudiante", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(saveEstudiante),
        })
        .then((res) => res.json())
        .then((data) => {
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message,
        });
    }
}

export const action = () => {
    return {
        actionAcudienteVerifier,
        actionNewStudent,
        actionSaveAcudiente,
        actionSaveEstudiante,
        actionCloseAlertMessage,
    };
}
