const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const users = require('./routes/users')
// const passport = require('passport')
require('./models/dbConfig')
require('./config/passport')

const port = process.env.PORT || 5000
const app = express()


//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/users', users)

app.listen(port, () => {
  console.log(`server is running on ${port}`)
})
