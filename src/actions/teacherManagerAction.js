const teacherGroupGetAction = (req, res) => (dispatch) => {
    fetch("https://class-gate.herokuapp.com/findGrupoFromMaestroDirector/maestro2@gmail.com", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            }
            )
            .catch(err => console.log(err));
}

export const teacherManagerAction = () => {
    return { teacherGroupGetAction };
}
