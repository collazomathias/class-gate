const actionNewGroup = (newGroup) => async(dispatch) => {
    try {
        fetch("", {
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
        fetch("", {
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
        fetch("")
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

const actionDeleteGroup = (id) => async(dispatch) => {
    return;
}

export const actionGroup = () => {
    return { actionNewGroup, actionGetGroups, actionDeleteGroup, actionEditGroup };
}