import React from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import LogIn from '../components/login.jsx';
import Registration from '../components/registration.jsx';
import { checkLogin, checkPassword, checkRemember, checkSubmit, setCurrentUser } from '../actions/loginActions'
import { setLogin, setEmail, setFirstName, setLastName, setPassword, setRePassword } from '../actions/registrationAction'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import { browserHistory } from 'react-router'

if (!isEmpty(localStorage.userToken)) {
    browserHistory.push('/')
}

class EntryTabs extends React.Component {
    render() {
        return (
            <Tabs className="homePage-tabs" bsStyle="pills" id="mainTabs">
                <Tab eventKey={1} title="Log in" className="tabs-content" id="loginTab">
                    <LogIn login={this.props} />
                </Tab>
                <Tab eventKey={2} title="Registration" className="tabs-content" id="regTab">
                    <Registration registration={this.props} />
                </Tab>
            </Tabs>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.login,
        registration: state.registration,
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        checkLogin: (e) => {
            dispatch(checkLogin(e.target.value))
        },
        checkPassword: (e) => {
            dispatch(checkPassword(e.target.value))
        },
        checkRemember: (e) => {
            dispatch(checkRemember(e.target.value))
        },
        checkSubmit: (e) => {
            dispatch(checkSubmit(e.target.value))
        },
        setCurrentUser: (user) => {
            dispatch(setCurrentUser(user))
        },
        setLogin: (e) => {
            dispatch(setLogin(e.target.value))
        },
        setEmail: (e) => {
            dispatch(setEmail(e.target.value))
        },
        setFirstName: (e) => {
            dispatch(setFirstName(e.target.value))
        },
        setLastName: (e) => {
            dispatch(setLastName(e.target.value))
        },
        setPassword: (e) => {
            dispatch(setPassword(e.target.value))
        },
        setRePassword: (e) => {
            dispatch(setRePassword(e.target.value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EntryTabs)
