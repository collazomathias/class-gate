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
        })
    }
}

export const actionGroup = () => {
    return { actionNewGroup };
}