const initialState = {
    access: null,
    role: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                access: action.payload.access,
                role: action.payload.role,
            }
        default:
            return state;
    }
}