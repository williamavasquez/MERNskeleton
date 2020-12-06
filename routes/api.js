const User = require( '../models/User.js')
const express = require( 'express')

const router = express.Router()

router.get('/users', (req, res) => {
  User.find({}).then((users) => res.json(users))
})

router.get("/usercheck",(req,res)=>{
  //check if user is logged in on the sevrer
  res.send(req.session?.user)
})

module.exports = router
