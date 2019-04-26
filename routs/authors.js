const express = require ('express')
const router = express.Router()

// all authors rout
router.get('/',(req, res)=> {
    res.render('index.ejs')
})


// new authors rout

router.get('/new',(req, res)=> {
    res.render('authors.ejs')
})

module.exports = router