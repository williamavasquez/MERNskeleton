import React, { useEffect } from 'react'
import logo from './logo.svg'
import './Home.css'

function Home() {
  return (
    <div>
      <img src={logo} />
      <h1>Hello</h1>
      <h2>
        {' '}
        You are now inside a protected route, you can only access this if you
        are logged in.
      </h2>
    </div>
  )
}

export default Home
