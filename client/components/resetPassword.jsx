import React from 'react'
import {Form, FormGroup, Col, FormControl, Button} from 'react-bootstrap'
import { ControlLabel } from 'react-bootstrap'
import { Link } from 'react-router'
import axios from 'axios'

export default class Reset extends React.Component {
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
        const user_data = this.props.resetPass.resetPass;
        if (user_data.login !== '' &&
            user_data.email !== '') {
            $(".alert-danger").css("display", "none")
            $(".alert-success").css("display", "none")
            axios.post('http://0.0.0.0:3000/user/reset', user_data).then((res) => {
                if (res.data == '1') {
                    this.setState({
                        success: 'Check your email',
                        error: '',
                        redirect: true
                    })
                }
                else {
                    this.setState({
                        success: '',
                        error: res.data
                    })
                }
            })
            if (this.state.error !== '')
                $(".alert-danger").css("display", "block")
            else
                $(".alert-success").css("display", "block")
        }
        else {
            $(".alert-danger").css("display", "block")
        }
    }

    render() {
        const reset = this.props.resetPass;
        return (
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Login
                    </Col>
                    <Col sm={12}>
                        <FormControl type="text" placeholder="Login" onChange={reset.resetForLogin}/>
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={12}>
                        <FormControl type="email" placeholder="Email" onChange={reset.resetForEmail}/>
                    </Col>
                </FormGroup>
                    <p><Link to="/entry">Back to main page</Link></p>
                <div className="alert alert-danger">
                    No matches for this login and email
                </div>
                <div className="alert alert-success">
                    Check your email
                </div>
                <FormGroup>
                    <Col className="center">
                        <Button onClick={this.submit}>
                            Reset
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
        )
    }
}