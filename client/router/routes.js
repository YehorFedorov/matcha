import App from '../containers/App.jsx'
import EntryPage from '../components/entryPage.jsx'
import MainPage from '../containers/mainPage.jsx'
import resetPass from '../containers/ResetPass.jsx'

const routes = {
    component: App,
    childRoutes: [
        {
            path: 'entry',
            component: EntryPage
        },
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/reset',
            component: resetPass
        }
    ]
}

export default routes