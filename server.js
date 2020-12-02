//Imported PAckages
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv')

// Node native packages
const path = require('path')

//Routes and or Files
const passport = require('./passport/setup.js')
const auth = require('./routes/auth.js')
const testRouter = require('./routes/testRouters.js')
const router = require('./routes/api.js')

dotenv.config({ silent: process.env.NODE_ENV === 'production' })

const PORT = process.env.PORT
const app = express()

app.use(morgan('tiny'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/users', {
  useNewUrlParser: true,
  useFindAndModify: false,
})

// Express Session
app.use(
  session({
    secret: 'very secret this is',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection }),
  })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use('/auth', auth)
app.use('/api', router)
app.use('/r', testRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
