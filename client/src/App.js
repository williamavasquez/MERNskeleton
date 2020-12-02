import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import PrivateRoute from './components/ProtectedHOC/ProtectedRoute'
import Login from './pages/Login/Login'
import { UserProvider } from './context/userContext'
function App() {
  return (
    <Router>
      <UserProvider>
        <div>
          <Switch>
            <PrivateRoute path='/home'>
              <Home />
            </PrivateRoute>

            <Route exact path='/' component={(props) => <Login {...props} />} />
            <Route>
              <h1>404 NOT FOUND</h1>
            </Route>
          </Switch>
        </div>
      </UserProvider>
    </Router>
  )
}

export default App
