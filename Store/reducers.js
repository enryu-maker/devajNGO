const initialState = {
    access: null,
    role: null,
    student: [],
    volunteers: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload.access,
                role: action.payload.role,
            }
        case "GET_STUDENTS":
            return {
                ...state,
                student: action.payload,
            }
        case "GET_VOLUNTEERS":
            return {
                ...state,
                volunteers: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                access: null,
                role: null,
            }
        default:
            return state;
    }
}