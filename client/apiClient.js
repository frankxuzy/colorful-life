import request from 'superagent'

const rootUrl = '/api/v1'

export function getOneDay (date) {
  return request.get(rootUrl + `/calendar/${date}`)
    .then(res => {
      return res.body
    })
}
