export default function resetReducer (state = {
    login: '',
    email: ''
}, action) {
    switch (action.type) {
        case "RESET_FOR_LOGIN":
            state = {
                ...state,
                login: action.payload
            }
            break
        case "RESET_FOR_EMAIL":
            state = {
                ...state,
                email: action.payload
            }
            break
    }
    return (state)
}
