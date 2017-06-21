import React from 'react'
import {Form, FormGroup, Col, FormControl, Checkbox, Button} from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { Link, browserHistory } from 'react-router'
import axios from 'axios'
import $ from 'jquery'
import jwt from 'jsonwebtoken'
import setAuthToken from '../utils/setAuthToken'

export default class LogIn extends React.Component {
    constructor () {
        super()
        this.state = {
            error: '',
            redirect: false
        }
        this.submit = this.submit.bind(this)
    }

    submit () {
        const user_data = this.props.login.login
        const info = this.props.login
        if (true) {
            axios.post('http://0.0.0.0:3000/user/login', user_data).then((res) => {
                console.log(res)
                if (res.data == 'error') {
                    this.setState({
                        error: res.data,
                        redirect: false
                    })
                    $(".alert-danger").css("display", "block")
                }
                else {
                    this.setState({
                        error: '',
                        redirect: true
                    })
                    const token = res.data.token
                    localStorage.setItem('userToken', token)
                    setAuthToken(token)
                    info.setCurrentUser(jwt.decode(token))
                    browserHistory.push('/')
                }
            })
        }
    }

    render() {
        const info = this.props.login;
        return (
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Login
                        </Col>
                        <Col sm={12}>
                            <FormControl type="text" placeholder="Login" onChange={info.checkLogin} />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={12}>
                            <FormControl type="password" placeholder="Password" onChange={info.checkPassword} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col sm={12}>
                            <p><Link to="/reset">Forgot your password?</Link></p>
                            <Checkbox onChange={info.checkRemember}>Remember me</Checkbox>
                        </Col>
                    </FormGroup>
                    <div className="alert alert-danger">
                        Warning
                    </div>
                    <FormGroup>
                        <Col className="center">
                            <Button onClick={this.submit}>
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
        )
    }
}