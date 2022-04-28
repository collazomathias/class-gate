const actionAcudienteGetAll = () => async (dispatch) => {
    try {
        await fetch("https://classgate.herokuapp.com/allAcudiente", {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
            .then(response => response.json())
            .then(data => dispatch({
                type: "acudienteGetAll",
                payload: data
            }))

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student)
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
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

export const actionAcudiente = () => {
    return { actionAcudienteGetAll, actionSaveStudent };
}