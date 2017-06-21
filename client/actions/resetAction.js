export function resetForLogin(login) {
    return {
        type: "RESET_FOR_LOGIN",
        payload: login
    }
}

export function resetForEmail(email) {
    return {
        type: "RESET_FOR_EMAIL",
        payload: email
    }
}