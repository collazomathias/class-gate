const teacherGroupGetAction = (user) => async (dispatch) => {
    console.log(user);
    fetch("https://class-gate.herokuapp.com/findGrupoFromMaestroDirector/"+user, {
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

const teacherMateriaGetAction = (user) => async (dispatch) => {
    fetch("https://class-gate.herokuapp.com/allClasesFromMaestro/"+user, {
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

const teacherClassGetAction = () => async (dispatch) => {
    fetch("https://class-gate.herokuapp.com/allGruposActivos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(response => {
                dispatch({
                    type: "getClass",
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
    return { teacherGroupGetAction, teacherMateriaGetAction, teacherClassGetAction };
}
