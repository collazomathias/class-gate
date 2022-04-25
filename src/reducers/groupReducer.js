const initialState = {
    groups: []
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addGroup":
            return { ...state, groups: [...state.groups, action.payload] }
        case "deleteGroup":
            return { ...state, groups: state.groups.filter(group => group.id !== action.payload) }
        case "updateGroup":
            return { ...state, groups: state.groups.map(group => group.id === action.payload.id ? action.payload : group) }
        default:
            return state;
    }
}