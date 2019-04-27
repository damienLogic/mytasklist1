const express = require ('express')
const router = express.Router()

// all authors rout
router.get('/',(req, res)=> {
    res.render('authors/index')
})

// displaying new authors rout
router.get('/new',(req, res)=> {
    res.render('authors/new')
})

//Creating new authors rout
router.post('/',(req, res)=> {
    res.send('create')
})




module.exports = router