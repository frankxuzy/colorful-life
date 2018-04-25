import request from 'superagent'

const rootUrl = '/api/v1'

export function getOneDay (date) {
  return request.get(rootUrl + `/calendar/${date}`)
    .then(res => {
      return res.body
    })
}

// export function updateDayTable (date) {
//   return request.put(rootUrl + `/calendar/${date}`)
//     .set('Content-Type', 'application/json')
//     .send('{"name":"tj","pet":"tobi"}')
// }