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
