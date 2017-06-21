import md5 from 'md5'

export default function loginReducer (state = {
    login: '',
    password: '',
    remember: false
}, action) {
    switch (action.type) {
        case "CHECK_LOGIN":
            state = {
                ...state,
                login: action.payload
            }
            break
        case "CHECK_PASSWORD":
            state = {
                ...state,
                password: md5(action.payload)
            }
            break
        case "REMEMBER_ME":
            let check = state.remember;
            if (check == false)
                check = true
            else
                check = false
            state = {
                ...state,
                remember: check
            }
    }
    return (state)
}