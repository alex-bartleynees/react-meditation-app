const config = require('./knexfile').development
const connection = require('knex')(config)

function addUser(obj, db = connection) {
  return db('users').insert(obj)
    .catch((err) => {
      console.log(err.message)
    })
}  

module.exports = {
  addUser,
}
