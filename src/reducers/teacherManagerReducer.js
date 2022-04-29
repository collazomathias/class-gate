const initialState = {
    teacher: null,
    group: null,
    materias: [{materia : {nombreMateria: "a"}}],
    clases: [],
}

export const teacherManagerReducer = (state = initialState, action) => {

    switch (action.type) {
        case "getTeacher":
            return {...state, teacher: action.payload}
        case "getGroup":
            return {...state, group: action.payload}
        case "getMateria":
            return {...state, materias: action.payload}
        case "getClass":
            return {...state, clases: action.payload}
        default:
            return state;

    }
}