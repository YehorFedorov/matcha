export function checkLogin(login) {
    return {
        type: "CHECK_LOGIN",
        payload: login
    }
}

export function checkPassword(password) {
    return {
        type: "CHECK_PASSWORD",
        payload: password
    }
}

export function checkRemember() {
    return {
        type: "REMEMBER_ME"
    }
}

export function checkSubmit () {
    return {
        type: 'CHECK_SUBMIT'
    }
}

export function setCurrentUser(user) {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}