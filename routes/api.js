const User = require( '../models/User.js')
const express = require( 'express')

const router = express.Router()

router.get('/users', (req, res) => {
  User.find({}).then((users) => res.json(users))
})

router.post('/createuser', ({ body }, res) => {
  console.log(body)
  User.create(body)
    .then((done) => res.json(done))
    .catch((err) => res.status(400).json(err))
})

module.exports = router
