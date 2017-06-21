import { createStore, combineReducers, applyMiddleware } from 'redux'
import login from './reducers/loginReducer'
import registration from './reducers/registrationReducer'
import resetPass from './reducers/resetReducer'
import setAuthToken from './utils/setAuthToken'
import auth from './reducers/auth'
import { setCurrentUser } from './actions/loginActions'
import jwt from 'jsonwebtoken'

const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

const store = createStore(combineReducers({
        login,
        registration,
        resetPass,
        auth
    }),
    applyMiddleware(logger)
)

if (localStorage.userToken) {
    setAuthToken(localStorage.userToken)
    store.dispatch(setCurrentUser(jwt.decode(localStorage.userToken)))
}

export default store
