//import json-server library

const jsonServer = require('json-server')

//2) create json server - create()

const tradingServer = jsonServer.create()

//3) create path for the json file(data) - router()

const router = jsonServer.router("db.json")

//4)create middleware to parse json
const middleware = jsonServer.defaults()

//5) allow server to use router and middleware
tradingServer.use(middleware)
tradingServer.use(router)

//6) set up port for the server to run
PORT = 4000 || process.env.PORT

//7) listen to the request
tradingServer.listen(PORT, () => {
    console.log(`server running successfully at port number ${PORT}`);
})