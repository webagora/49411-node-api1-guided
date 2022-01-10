// import the server and start it!




server.use(express.json()) // parse json from requests

// api is made of endpoints such as
// http://cats.com:9000/hello_world
server.get('/hello_world', (req, res) => {
  res.status(200).json('hello world!!!!!')
})

server.listen(9000, () => {
  console.log('listening on port 9000')
})
