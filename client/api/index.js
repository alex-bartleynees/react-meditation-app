import request from 'superagent'

export function getPosts () {
  return request.get('/v1/posts')
    .then(res => {
      res.body.forEach((post) => validateNoSnakeCase(post))
      return res.body
    })
    .catch(errorHandler('GET', '/v1/posts'))
}
