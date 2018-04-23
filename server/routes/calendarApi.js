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

module.exports = router

