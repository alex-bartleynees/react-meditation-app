const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.post('/', (req,res) => {
  const user = req.body

  db.addUser(user)
  .then((user) => {
    res.json(user)
  })
  .catch(err => {return "the error is: ", err.message})

  
})

module.exports = router
