import React from 'react'
import setAuthToken from '../utils/setAuthToken'
import { browserHistory } from 'react-router'
import $ from 'jquery'
import Media from '../components/carouselInstance.jsx'

export default class EntryPage extends React.Component {
    constructor() {
        super()
    }

    logout() {
        $("#entryForm").css({"position": "absolute", "left": "45%", "transform": "translateX(-45%)"})
        $("#hi").css({"left": "50%", "transform": "translateX(-50%)", "position": "absolute", "width": "initial"})
        const info = this.props.auth
        localStorage.removeItem('userToken')
        setAuthToken(false)
        info.setCurrentUser({})
        browserHistory.push('/entry')
    }

    getUserInfo() {
       const user = this.props.auth.auth.user.username
        return (user)
    }

    render() {
        return <div>
        </div>
    }
}
/*            <div className="container-fluid text-center">
 <div className="row content">
 <aside>
 <div className="col-sm-2 sidenav">
 <div className="user-bar">
 <div className="user">
 <img className="user-photo" src="img/user.png"/>
 </div>
 <a className="logout" href="#" onClick={this.logout.bind(this)}>
 <span className="glyphicon glyphicon-log-out"></span> Logout</a>
 </div>
 <hr/>
 <div className="user-menu">
 <p><a href="#">Знакомства</a></p>
 <p><a href="#">Люди рядом</a></p>
 <p><a href="#">Сообщения</a></p>
 <p><a href="#">Настройка аккаунта</a></p>
 </div>
 </div>
 </aside>
 <div className="main-content">
 <div className="container-fluid">
 <h1 className="navbar-brand">Matcha</h1>
 </div>
 <br/>
 <Media/>
 </div>
 </div>
 </div>*/