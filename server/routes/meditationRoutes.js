const express = require('express')

const db = require('../db/db')
const { response } = require('../server')

const router = express.Router()

router.get('/', (req,res) => {
  db.getAllUsers()
  .then(users => {
    res.json(users)
  })
  .catch(err => {
    return "the error is: ", err.message
  })
})

router.get('/meditations', (req,res) => {
  db.getAllMeditations()
  .then(meditations => {
    res.json(meditations)
  })
  .catch(err => {
    return "the error is: ", err.message
  })
})


router.post('/', (req,res) => {
  const user = req.body

  db.addUser(user)
  .then((user) => {
    return db.getUserbyId(user)
    .then((userName) => {
      res.json(userName)
    })
  })
  .catch(err => {return "the error is: ", err.message})

  
})

router.post('/addMeditation', (req,res) => {
  const name = req.body.name
   

  db.getNameId(name)
    .then(id => {
      const nameId = id[0]

      const meditationData = {
        meditation_name: req.body.meditation,
        time: req.body.time,
        date: req.body.date,
        user_id: nameId.id
      }

      return db.addMeditation(meditationData)
      .then((meditationData) => {
        res.json(meditationData)
      })
    })
      .catch(err => {return "the error is: ", err.message})
    })
 
module.exports = router
