import React, { useEffect } from 'react'
import logo from './logo.svg'
import axios from 'axios'
import './Home.css'


function Home() {
   const apiHitCheck =()=>{
    fetch("/api/usercheck")
      .then(data=>data.json())
      .then(response=> console.log(response))
    }
  return (
    <div>
      <img src={logo} />
      <h1>Hello</h1>
      <h2>
        {' '}
        You are now inside a protected route, you can only access this if you
        are logged in.
      </h2>

      <button  onClick={apiHitCheck}>Test API</button>
    </div>
  )
}

export default Home
