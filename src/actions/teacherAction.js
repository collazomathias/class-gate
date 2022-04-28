

//getall maestros
const actionAllMaestro = () => async (dispatch) => {
    try {
        await fetch("https://classgate.herokuapp.com/allMaestro", {
            method: "GET",
            headers: { "Content-Type": "aplication/json" }
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "allMaestro",
            payload: data
        }));
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

//put actualizar materias
const actionUpdateMateriaMaestro = (idMaestro, materia) => async (dispatch) => {
    try {
        fetch("https://classgate.herokuapp.com/updateMateriaMaestro/" + idMaestro + "/" + materia, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "updateMateriaMaestro",
            payload: data
        }));
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

//borrar materia maestro
const actionRemoveMateriaMaestro = (idMaestro, materia) => async (dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/removeMateriaMaestro/" + idMaestro + "/" + materia, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => dispatch({
            type: "removeMateriaMaestro",
            payload: data
        }));
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}


//obtiene todas materias que tiene el maestro
const actionAllMateriasFromMaestro = (idMaestro) => async (dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/allMateriasFromMaestro/" + idMaestro)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: "allMateriasFromMaestro",
                payload: data
            })
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

//obtiene todas materias que no tiene el maestro
const actionNotMateriasFromMaestro = (idMaestro) => async (dispatch) => {
    try {
        fetch("https://class-gate.herokuapp.com/notMateriasFromMaestro/" + idMaestro)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: "notMateriasFromMaestro",
                payload: data
            })
        });
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}



export const teacherAction = () => {
    return { actionAllMaestro, actionUpdateMateriaMaestro, actionNotMateriasFromMaestro, actionAllMateriasFromMaestro, actionRemoveMateriaMaestro };
}