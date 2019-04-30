const express = require('express')
const router = express.Router()
const Author = require('../models/author')

// all authors rout <%#   
router.get('/', (req, res) => {
    res.render('authors/index')
})

// displaying new authors rout
router.get('/new', (req, res) => {
    res.render('authors/new',
        { author: new Author() })
})
// create new
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })

    try {
        const newAuthor = await author.save()
        //res.redirect(`authors/${newAuthor.id}`)
        console.log(newAuthor.name)
        res.redirect(`authors`)
        
    }
    catch (error) {
        res.render('authors/new', {
            author: author,
            errorMessage: 'error creating author + /author`'
        })
    }
})

module.exports = router



//     author.save((err, newAuthor ) => {
//         if (err) { 
//             res.render('authors/new',{ 
//                 author: author,    
//                 errorMessage: 'error creating author'  
//         })
//     } else {
//        // res.redirect(`authors/${newAuthor.id}`)
//         res.redirect(`authors`)
//     }
// })
//     // res.send(req.body.name)  <%#  %>






