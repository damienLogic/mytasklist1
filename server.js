if (process.env.NODE_ENV !== 'production') {  
require('dotenv').config()  }
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./routs/index')
const authorRouter = require('./routs/authors')
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')  
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true  })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('connection mongoose established now !!!'))

app.use('/', indexRouter)  //the '/' reffers to localhotst 3000 thats the app root
app.use('/authors', authorRouter) //the '/authors' reffers to all authors page.
app.listen(process.env.PORT || 3000)  