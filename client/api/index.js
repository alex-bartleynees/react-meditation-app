import request from 'superagent'

export function addUser (user) {
  console.log("this is data: ", user)
  return request.post('/v1/meditationRoutes')
    .send(user)
    .then(res => {
      return res.body
    })
    .catch(err => {return "the error is: ", err.message})
}

export function addMeditation (meditation) {
  console.log("this is data: ", meditation)
  return request.post('/v1/meditationRoutes/addMeditation')
    .send(meditation)
    .then(res => {
      return res.body
    })
    .catch(err => {return "the error is: ", err.message})
}

export function getAllUsers () {
  return request.get('/v1/meditationRoutes')
  .then(response => response.body)
  .catch(err => {return "the error is: ", err.message})

}

export function getAllMeditations () {
  return request.get('/v1/meditationRoutes/meditations')
  .then(response => response.body)
  .catch(err => {return "the error is: ", err.message})

}