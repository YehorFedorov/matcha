import md5 from 'md5'

export default function registrationReducer (state = {
    login: {
        state: 'error',
        value: ''
    },
    email: '',
    firstName: '',
    lastName: '',
    password: {
        state: 'error',
        value: ''
    },
    rePassword: {
        state: 'error',
        value: ''
    }
}, action) {
    switch (action.type) {
        case "SET_LOGIN":
            state = {
                ...state,
                login: {
                    state: 'error',
                    value: action.payload
                }
            }
            break
        case "SET_EMAIL":
            state = {
                ...state,
                email: action.payload
            }
            break
        case "SET_FIRST_NAME":
            state = {
                ...state,
                firstName: action.payload
            }
            break
        case "SET_LAST_NAME":
            state = {
                ...state,
                lastName: action.payload
            }
            break
        case "SET_PASSWORD":
            state = {
                ...state,
                password: {
                    state: 'error',
                    value: md5(action.payload)
                }
            }
            break
        case "SET_RE_PASSWORD":
            state = {
                ...state,
                rePassword: {
                    state: 'error',
                    value: md5(action.payload)
                }
            }
            break
    }
    if (state.login.value !== '' &&
        (state.password.value !== '' && (state.password.value === state.rePassword.value))) {
        state = {
            ...state,
            login: {
                state: 'success',
                value: state.login.value
            },
            password: {
                state: 'success',
                value: state.password.value
            },
            rePassword: {
                state: 'success',
                value: state.rePassword.value
            }
        }
    }
    return (state)
}
