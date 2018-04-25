const express = require('express')

const db = require('../db')

const router = express.Router()


router.get('/calendar/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getOneDay(id)
    .then(day => res.json(day))
    .catch(err => res.status(500).send('DATABASE ERROR: ' + err.message)
  )
})

router.put('/calendar/:id', (req, res) => {
  const id = Number(req.params.id)
  const hourData = req.body
  db.updateActivity(id, hourData.hour, hourData.activity)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

module.exports = router

