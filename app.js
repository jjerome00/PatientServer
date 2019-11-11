

const express = require('express')
const app = express()
const db = require("./database.js")

const PORT = 8000
const HOSTNAME = '127.0.0.1'
const PATIENTS_PATH = "/api/v1/patients"

app.listen(PORT, () => {
  console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
})


app.get("/", (req, response, next) => {
  response.json({"message":"ok"})
})

app.get(PATIENTS_PATH, (request, response, next) => {
  let sql = "select * from patients"
  var params = []
  db.all(sql, params, (errors, rows) => {
    if (errors) {
      response.status(400).json({"error": errors.message})
      return
    }

    response.json({
      "message": "success",
      "data": rows
    })
  })
})


app.use( (error, request, response, next) => response.status(404) )
