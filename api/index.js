import jwt from 'jsonwebtoken'

const express = require('express')
const app = express()

app.use(express.json())
app.post('/auth/login', (req, res) => {
  console.log(req.body)
  const { id, password } = req.body

  const payload = {
    id,
    password,
  }

  const token = jwt.sign(payload, 'secret')
  return res.json({ token })
})

module.exports = {
  path: '/api',
  handler: app,
}
