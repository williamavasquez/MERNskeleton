import express from 'express'
import mongoose from 'mongoose'
import path from 'path'
import morgan from 'morgan'
import dotenv from 'dotenv'

import testRouter from './routes/testRouters.mjs'
import router from './routes/api.mjs'

dotenv.config({ silent: process.env.NODE_ENV === 'production' })

const __dirname = path.resolve()
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

// routes
app.use('/api', router)
app.use('/r', testRouter)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`)
})
