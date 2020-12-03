const express = require('express')
const passport = require('passport')

const User = require('../models/User.js')
const router = express.Router()

router.post('/register_login', (req, res, next) => {
  passport.authenticate('local', function (err, user, info) {
    if (err) {
      return res.status(400).json({ errors: err })
    }
    if (!user) {
      return res.status(400).json({ errors: 'No user found' })
    }
    req.logIn(user, function (err) {
      if (err) {
        return res.status(400).json({ errors: err })
      }
      return res.status(200).json(user)
    })
  })(req, res, next)
})

router.post('/createuser', ({ body }, res) => {
  User.create(body)
    .then((done) => res.json(done))
    .catch((err) => res.status(400).json(err))
})

module.exports = router
