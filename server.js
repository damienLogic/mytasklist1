if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require ('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routs/index')
const authorRouter = require('./routs/authors')

app.set('view engine','ejs')
app.set ('views', __dirname + '/views')
app.set ('layout','layouts/layout')
app.use (expressLayouts)
app.use (express.static('public'))


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error) )
db.once('open', () => console.log('connection mongoose established now !!!') )

app.use('/',indexRouter)
app.use('/authors',authorRouter)
app.listen(process.env.PORT || 3000)