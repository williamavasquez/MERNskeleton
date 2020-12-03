import React, { createContext, useContext, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'loggedInUser': {
      return {
        ...state,
        ...action.payload,
        loggedIn: true,
      }
    }
    case 'intialState':
      return {
        ...action.payload,
      }
    default:
      return state
  }
}

const UserContext = createContext(null)
const { Provider } = UserContext

const UserProvider = ({ value, ...props }) => {
  const [state, dispatch] = useReducer(reducer, { loggedIn: false })
  return <Provider value={[state, dispatch]} {...props} />
}

const useUserContext = () => useContext(UserContext)

export { UserProvider, useUserContext }
