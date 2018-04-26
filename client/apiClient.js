import request from 'superagent'

const rootUrl = '/api/v1'

export function getOneDay (date) {
  return request.get(rootUrl + `/calendar/${date}`)
    .then(res => {
      return res.body
    })
}

export function updateDayTable (data) {
  return request.put(rootUrl + `/calendar/${data.date}`)
  // need set if send in json string
    // .set('Content-Type', 'application/json')
    .send({
      date: data.date,
      hour:data.hour,
      activity: data.activity
    })
}

