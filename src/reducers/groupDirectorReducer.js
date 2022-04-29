const initialState = {
    group: [],
    director : {},
    notDirectors: [],
}

export const groupDirectorReducer = (state = initialState, action) => {

    switch (action.type) {
        case "notDirectorGet":
            return { ...state, notDirectors: action.payload, group: action.group ? action.group : state.group, director: action.group ? action.group.director : state.director }
        case "directorSaved":
            return { ...state, notDirectors: [...state.notDirectors], director: action.payload }
        case "directorRemoved":
            return { ...state, notDirectors: [...state.notDirectors, state.director], director: null }
        default:
            return state;
    }
}