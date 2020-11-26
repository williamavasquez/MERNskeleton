import React, { useEffect } from 'react'
import logo from './logo.svg'
import './Home.css'

function Home() {
  useEffect(() => {
    fetch('/api/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((err) => console.error(err))
  }, [])

  const getUsers = () => {
    let dataSample = {
      name:"William",
      email: "william@william.com",
      password:"1234"
    }

    fetch('/auth/register_login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataSample),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <div>
      <img src={logo} />
      <h1>Hello</h1>
      <button onClick={getUsers}>Click me</button>
    </div>
  )
}

export default Home
