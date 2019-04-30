const express = require('express')
const router = express.Router()
router.get('/', (req, res) => {  // the '/' reffers to localhotst 3000 thats the app root.
    res.render('index.ejs')
})
module.exports = router