import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../../context/userContext'

function PrivateRoute({ children, ...rest }) {
  const [user, dispatch] = useUserContext()
  console.log(user)
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.loggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}
export default PrivateRoute
