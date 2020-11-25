import express from 'express'

const testRouter = express.Router()

testRouter.get('/', (req, res) => {
  console.log('working route')
  res.send('hello')
})

export default testRouter
