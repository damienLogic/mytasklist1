const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//display all authors in database          
router.get('/', async (req, res) => {
    try {
 const authors = await Author.find({})
 res.render('authors/index', {authors: authors})
    }
    catch (error){
        res.redirect('/')   
    } })                     
// this rout will bring up the view to create new author 
router.get('/new', (req, res) => {
    res.render('authors/new',
        { author: new Author() })
})
// this rout will create new author in the database
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name    })
    try {
        const newAuthor = await author.save()
        //res.redirect(`authors/${newAuthor.id}`)
        console.log(newAuthor.name)
        res.redirect(`/authors`)
    }
    catch (error) {
        res.render('authors/new', {
            author: author,
            errorMessage: 'error creating author`'
        })       }   })
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






