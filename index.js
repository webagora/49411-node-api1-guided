// import the server and start it!
const express = require('express') // commonjs
// import express from 'express'

const server = express()

server.use(express.json()) // parse json from requests

// api is made of endpoints such as
// http://cats.com/hello_world
server.get('/hello_world', (req, res) => {
  res.json('hello world!')
})
