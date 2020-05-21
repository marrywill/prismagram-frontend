import PropTypes from 'prop-types'
import React from 'react'
import { HashRouter as Switch, Route, Router } from 'react-router-dom'
import Feeds from '../Routes/Feed'
import Auth from '../Routes/Auth'

const LoggedInRoutes = () => (
	<>
		<Route exact path='/' component={Feeds} />
	</>
)
const LoggedOutRoutes = () => (
	<>
		<Route exact path='/' component={Auth} />
	</>
)

const AppRouter = ({ isLoggedIn }) => (
	<Router>
		<Switch>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Switch>
	</Router>
)

AppRouter.propTypes = {
	isLoggedIn: PropTypes.bool.isRequired,
}

export default AppRouter
