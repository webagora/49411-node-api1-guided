// IMPORTS AT THE TOP
// import express from 'express' in ES6
const express = require('express') // commonjs
const Dog = require('./dog-model.js')

// INSTANCE OF EXPRESS APP
const server = express()

// GLOBAL MIDDLEWARE
server.use(express.json()) // parse json from requests

// ENDPOINTS

// [GET]    /             (Hello World endpoint)
// api is made of endpoints such as
// http://cats.com:9000/hello_world
server.get('/hello_world', (req, res) => {
  res.status(200).json('hello web 49!!!!!')
})
// [GET]    /api/dogs     (R of CRUD, fetch all dogs)
server.get('/api/dogs', async (req, res) => {
  try {
    const dogs = await Dog.findAll()
    res.json(dogs)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})
server.get('/api/dogs', (req, res) => {
  Dog.findAll()
    .then(dogs => {
      res.json(dogs)
    })
    .catch(err => {
      res.status(500).json({ message: err.message })
    })
})
// [GET]    /api/dogs/:id (R of CRUD, fetch dog by :id)
server.get('/api/dogs/:id', async (req, res) => {
  console.log(req.method)
  console.log(req.headers)
  console.log(req.body)
  console.log(req.params)
  try {
    const dog = await Dog.findById()
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// [POST]   /api/dogs     (C of CRUD, create new dog from JSON payload)
// [PUT]    /api/dogs/:id (U of CRUD, update dog with :id using JSON payload)
// [DELETE] /api/dogs/:id (D of CRUD, remove dog with :id)

// EXPOSING THE SERVER TO OTHER MODULES
module.exports = server // export default server
