import React from 'react'
import {Form, FormGroup, Col, FormControl, Button, OverlayTrigger, Popover} from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import axios from 'axios'
import $ from 'jquery'

const popover_password = (
    <Popover id="popover_password">
        <strong>Your password must contain at least:</strong>
        <br />
        8 characters;
        <br />
    </Popover>
);

const popover_email = (
    <Popover id="popover_email">
        Please enter a valid e-mail address so that you can activate your account.
    </Popover>
)

export default class Registration extends React.Component {
    constructor () {
        super()
        this.state = {
            success: '',
            error: '',
            redirect: false
        }
        this.submit = this.submit.bind(this)
    }

    submit () {
        const user_data = this.props.registration.registration
        $(".alert-danger").css("display", "none")
        $(".alert-success").css("display", "none")
            if (user_data.login.state !== 'error' &&
                user_data.password.state !== 'error' &&
                user_data.rePassword.state !== 'error') {
                axios.post('http://0.0.0.0:3000/user/registration', user_data).then((res) => {
                    console.log(res)
                    if (res.data == '1')
                        this.setState({
                            success: 'Check your email',
                            error: '',
                            redirect: true
                        })
                    else {
                        this.setState({
                            success: '',
                            error: res.data
                        })
                    }
                    if (this.state.success === '')
                        $(".alert-danger").css("display", "block")
                    else
                        $(".alert-success").css("display", "block")
                })
            }
            else {
                $(".alert-danger").css("display", "block")
            }
        }

    render() {
        const reg = this.props.registration;
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel}>
                        *Login
                    </Col>
                    <Col sm={12}>
                            <FormControl type="text" placeholder="Login" onChange={reg.setLogin}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel}>
                        *Email
                    </Col>
                    <Col sm={12}>
                        <OverlayTrigger trigger="click" rootClose placement="right" overlay={popover_email}>
                            <FormControl type="email" placeholder="E-mail" onChange={reg.setEmail}/>
                        </OverlayTrigger>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel}>
                        First name
                    </Col>
                    <Col sm={12}>
                        <FormControl type="text" placeholder="First name" onChange={reg.setFirstName}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel}>
                        Last name
                    </Col>
                    <Col sm={12}>
                        <FormControl type="text" placeholder="Last name" onChange={reg.setLastName}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel}>
                        *Password
                    </Col>
                    <Col sm={12}>
                        <OverlayTrigger trigger="click" placement="right" overlay={popover_password} rootClose>
                            <FormControl type="password" placeholder="Password" onChange={reg.setPassword}/>
                        </OverlayTrigger>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel}>
                        *Re-enter password
                    </Col>
                    <Col sm={12}>
                        <FormControl type="password" placeholder="Re-enter password" onChange={reg.setRePassword}/>
                    </Col>
                </FormGroup>
                <div className="alert alert-danger">
                    Warning
                </div>
                <div className="alert alert-success">
                    Check your email
                </div>
                <FormGroup>
                    <Col sm={12}>
                        <Button onClick={this.submit}>
                            Create me!
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}