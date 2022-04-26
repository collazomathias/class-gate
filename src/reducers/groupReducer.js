const initialState = {
    groups: []
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addGroup":
            return { ...state, groups: [...state.groups, action.payload] }
        case "editGroup":
            return { ...state, groups: state.groups.map(group => group.id === action.payload.id ? action.payload : group) }
        case "getGroups":
            return { ...state, groups: action.payload }
        default:
            return state;
    }
}