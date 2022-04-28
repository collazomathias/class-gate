const initialState = {
    acudientes: [],
    students: [        
        // {
        //     id: 1,
        //     nombre: "Juan Perez",
        //     documentoIdentificacion: "12345678",
        //     grupo: "A",
        //     grado: "1",
        //     estado: true,
        // },
        // {
        //     id: 2,
        //     nombre: "Camila",
        //     documentoIdentificacion: "12345679",
        //     grupo: "A",
        //     grado: "6",
        //     estado: true,
        // },
],
}

export const acudienteReducer = (state = initialState, action) => {

    switch (action.type) {
        case "acudienteGetAll":
            return { ...state, acudientes: action.payload }
        case "studentSaved":
            return { ...state, students: [...state.students, action.payload] }
        default:
            return state;
    }
}