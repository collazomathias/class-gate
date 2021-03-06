const initialState = {
    groups: [],
    groupStudents: [],
    studentsWithOutGroup: [],
    getAllHorariosGrupos: [],
    addHorarioClase: []
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addGroup":
            return { ...state, groups: [...state.groups, action.payload] }
        case "editGroup":
            return { ...state, groups: state.groups.map(group => group.id === action.payload.id ? action.payload : group) }
        case "getGroups":
            return { ...state, groups: action.payload }
        case "getGroupStudents":
            return { ...state, groupStudents: action.payload }
        case "getStudentsWithOutGroup":
            return { ...state, studentsWithOutGroup: action.payload }
        case "deleteGroup":
            return { ...state, groups: state.groups.filter(group => group.id !== action.payload.id) }
        case "removeStudentFromGroup":
            return { ...state, studentsWithOutGroup: [...state.studentsWithOutGroup, action.payload], groupStudents: state.groupStudents.filter(student => student.id !== action.payload.id) }
        case "addStudentToGroup":
            return { ...state, groupStudents: [...state.groupStudents, action.payload], studentsWithOutGroup: state.studentsWithOutGroup.filter(student => student.id !== action.payload.id) }
        case "allHorariosGrupos":
            return { ...state, getAllHorariosGrupos: action.payload }
        case "horarioClase":
            return { ...state, addHorarioClase: action.payload }
        default:
            return state;
    }
}