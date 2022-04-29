const teacherGetAction = (email) => async (dispatch) => {
    fetch("https://class-gate.herokuapp.com/findMaestroByCorreo/maestroHU8@gmail.com", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(response => {
                dispatch({
                    type: "getTeacher",
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

const teacherGroupGetAction = (user) => async (dispatch) => {
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

const teacherMateriaGetAction = (id) => async (dispatch) => {
    fetch("https://class-gate.herokuapp.com/allMateriasFromMaestro/"+id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(response => {
                // dispatch({
                //     type: "getMateria",
                //     payload: response
                // });
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
    return { teacherGroupGetAction, teacherMateriaGetAction, teacherClassGetAction, teacherGetAction };
}
