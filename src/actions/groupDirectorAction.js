const notGroupDirectorGetAction = (group) => async (dispatch) => {
    fetch("https://class-gate.herokuapp.com/allMaestrosActivos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => {
            group ?
            dispatch({ type: "notDirectorGet", payload: response, group: group })
            :
            dispatch({ type: "notDirectorGet", payload: response })
        })
        .catch(error => console.log(error.message));
}

const directorToGroupAction = (teacher, groupId) => async (dispatch) => {
    fetch(`https://class-gate.herokuapp.com/addDirectorToGrupo/${groupId}/${teacher.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: {}
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => {
            dispatch({ type: "directorSaved", payload: teacher })
        })
        .catch(error => console.log(error.message));
}


const removeDirectorToGroupAction = (teacher, groupId) => async (dispatch) => {
    fetch(`https://class-gate.herokuapp.com/removeDirectorFromGrupo/${groupId}/${teacher.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: {}
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(response => {
            dispatch({ type: "directorRemoved" })
        })
        .catch(error => console.log(error.message));
}

export const groupDirectorAction = () => {
    return { notGroupDirectorGetAction, directorToGroupAction, removeDirectorToGroupAction };
}