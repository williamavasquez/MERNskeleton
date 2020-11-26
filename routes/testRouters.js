const express = require('express')

const testRouter = express.Router()

testRouter.get('/', (req, res) => {
  console.log('working route')
  res.send('hello')
})

module.exports =  testRouter
