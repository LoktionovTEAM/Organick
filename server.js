const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./public/server/bd.json')
const middlewares = jsonServer.defaults({
	static: './build',
})

const PORT = process.env.PORT || 3001

server.use(middlewares)
server.use(router)
server.listen(PORT, () => {
	console.log('JSON Server is running')
})