//import { actionTeacherPost } from "../actions/teacherAction"

const initialState = {

    allMaestro: [],
    allMateriasFromMaestro: [],
    notMateriasFromMaestro: []

}

export const teacherReducer = (state = initialState, action) => {

    switch (action.type) {
        case "allMaestro":
            return { ...state, allMaestro: action.payload }

        case "allMateriasFromMaestro":
            return { ...state, allMateriasFromMaestro: action.payload }

        case "notMateriasFromMaestro":
            return { ...state, notMateriasFromMaestro: action.payload }

        case "removeMateriaMaestro":
            return { ...state, notMateriasFromMaestro: [...state.notMateriasFromMaestro, action.payload], allMateriasFromMaestro: state.allMateriasFromMaestro.filter(materia => materia.nombreMateria !== action.payload.nombreMateria) }

        case "updateMateriaMaestro":
            return { ...state, allMateriasFromMaestro: [...state.allMateriasFromMaestro, action.payload], notMateriasFromMaestro: state.notMateriasFromMaestro.filter(materia => materia.nombreMateria !== action.payload.nombreMateria) }


        default:
            return state;

    }
}



