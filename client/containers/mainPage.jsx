import React from 'react'
import EntryPage from '../components/mainEntryPage.jsx'
import isEmpty from 'lodash/isEmpty'
import { setCurrentUser } from '../actions/loginActions'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import $ from 'jquery'

class MainPage extends React.Component {
    componentWillMount() {
//        if (!isEmpty(localStorage.userToken)) {
            browserHistory.push('/')
            $("#hi").css({"width":"80%", "left": "100%", "transform": "translateX(-100%)", "position": "absolute"})
//        }
//        else
//            browserHistory.push('/entry')
    }

    render () {
        return <EntryPage auth={this.props}/>
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setCurrentUser: (user) => {
            dispatch(setCurrentUser(user))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)
