const express = require('express')

const testRouter = express.Router()

testRouter.get('/', (req, res) => {
  console.log('test working route')
  res.send('hello')
})

module.exports = testRouter
