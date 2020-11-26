import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import PrivateRoute from './components/ProtectedHOC/ProtectedRoute'
import Login from './pages/Login/Login'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoute path="/login">
            <Login />
          </PrivateRoute>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route>
            <h1>404 NOT FOUND</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
