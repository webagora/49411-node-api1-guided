// import the server and start it!
const express = require('express') // commonjs
// import express from 'express'

const server = express()

server.use(express.json()) // parse json from requests


