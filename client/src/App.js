import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
function App() {
  return (
    <Router>
      <div>
        <Switch>
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
