const config = require('./knexfile').development
const connection = require('knex')(config)

function addUser(obj, db = connection) {
  return db('users').insert(obj)
    .catch((err) => {
      console.log(err.message)
    })
}

function getNameId(obj, db = connection) {
  return db('users')
    .where('name', obj)
    .select()
    .catch((err) => {
      console.log(err.message)
    })
}


function getUserByName(obj, db = connection) {
  return db('users')
    .where('name', obj)
    .select()
    .catch((err) => {
      console.log(err.message)
    })
}



function addMeditation(obj, db = connection) {
  return db('meditation')
    .insert(obj)
    .select()
    .catch((err) => {
      console.log(err.message)
    })
}

function getAllUsers(db = connection) {
  return db('users')
    .select()
    .catch((err) => {
      console.log(err.message)
    })
}

function getUserbyId(id, db = connection) {
  return db('users')
    .where('id', id)
    .catch((err) => {
      console.log(err.message)
    })
}

function getAllMeditations(db = connection) {
  return db('meditation')
    .select()
    .catch((err) => {
      console.log(err.message)
    })
}

function deleteUser(obj, db = connection) {
  return db('users')
    .where('name', obj.name)
    .del()
    .catch((err) => {
      console.log(err.message)
    })
}




module.exports = {
  addUser,
  getNameId,
  addMeditation,
  getAllUsers,
  getUserbyId,
  getAllMeditations,
  deleteUser,
  getUserByName,
}
