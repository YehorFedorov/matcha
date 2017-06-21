import React from 'react'
import Title from '../components/entryTitle.jsx'
import Reset from '../components/resetPassword.jsx'
import { resetForEmail, resetForLogin } from '../actions/resetAction'
import { connect } from 'react-redux'

class resetPass extends React.Component {
    render () {
        return (
            <div>
                <Title/>
                <div className="centerReset">
                    <Reset resetPass={this.props}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        resetPass: state.resetPass
    }
}

const mapDispatchToProps = dispatch => {
    return {
        resetForLogin: (e) => {
            dispatch(resetForLogin(e.target.value))
        },
        resetForEmail: (e) => {
            dispatch(resetForEmail(e.target.value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(resetPass)
