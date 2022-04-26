

const actionTeacherPost = (teacherPost) => async (dispatch) => {
    try {
        await fetch("https://classgate.herokuapp.com/addMaestro", {
            method: "POST",
            body: JSON.stringify(teacherPost),
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
            .then(response => response.json())
            .then(data => dispatch({
                type: "teacherPost",
                payload: data
            }))
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionTeacherGetDoc = (documento) => async (dispatch) => {
    try {
        fetch("https://classgate.herokuapp.com/searchMaestro/"+documento, {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
            .then(response => response.json())
            .then(data => dispatch({
                type: "teacherGetDoc",
                payload: data
            }))
            
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

const actionTeacherGetAll = () => async (dispatch) => {
    try {
        fetch("https://classgate.herokuapp.com/allMaestro", {
            method: "GET",
            headers: {
                'Content-Type': 'aplication/json'
            }
        })
            .then(response => response.json())
            .then(data => dispatch({
                type: "teacherGetAll",
                payload: data
            }))
            
    } catch (error) {
        dispatch({
            type: "alertMessage",
            payload: error.message
        });
    }
}

export const teacherAction = () => {
    return { actionTeacherPost, actionTeacherGetDoc , actionTeacherGetAll };
}