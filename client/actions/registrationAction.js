export function setLogin(login) {
    return {
        type: "SET_LOGIN",
        payload: login
    }
}

export function setEmail(email) {
    return {
        type: "SET_EMAIL",
        payload: email
    }
}

export function setFirstName(firstName) {
    return {
        type: "SET_FIRST_NAME",
        payload: firstName
    }
}

export function setLastName(lastName) {
    return {
        type: "SET_LAST_NAME",
        payload: lastName
    }
}

export function setPassword(password) {
    return {
        type: "SET_PASSWORD",
        payload: password
    }
}

export function setRePassword(rePassword) {
    return {
        type: "SET_RE_PASSWORD",
        payload: rePassword
    }
}