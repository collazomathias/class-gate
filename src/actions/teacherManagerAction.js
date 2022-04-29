const teacherGroupGetAction = () => async (dispatch) => {
    fetch("https://class-gate.herokuapp.com/findGrupoFromMaestroDirector/maestro2@gmail.com", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(response => {
                dispatch({
                    type: "getGroup",
                    payload: response
                });
            }
            )
            .catch(err => {
                dispatch({
                    type: "alertMessage",
                    payload: err.message,
                });
            });
}

const teacherMateriaGetAction = () => async (dispatch) => {
    fetch("https://class-gate.herokuapp.com/allClasesFromMaestro/maestro2@gmail.com", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(response => {
                dispatch({
                    type: "getMateria",
                    payload: response
                });
            }
            )
            .catch(err => {
                dispatch({
                    type: "alertMessage",
                    payload: err.message,
                });
            });
}

export const teacherManagerAction = () => {
    return { teacherGroupGetAction, teacherMateriaGetAction };
}
