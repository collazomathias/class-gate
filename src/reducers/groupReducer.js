const initialState = {
    groups: []
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
        case "addGroup":
            return { ...state, groups: [...state.groups, action.payload] }
        case "getGroups":
            return { ...state, groups: action.payload }
        default:
            return state;
    }
}