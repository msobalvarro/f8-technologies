import next from 'next'
import { store, setMessageFunction } from './store'
import { createServer } from 'node:http'
import { initializeSocket, initSocket } from './utils/socket'

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000
const app = next({ dev, hostname, port })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const httpServer = createServer(handler)
  const io = initializeSocket(httpServer)

  // const sendMessae = (data: object) => io.emit('newMessage', data)
  // store.dispatch(setMessageFunction(sendMessae))

  io.on('connection', (socket) => {
    // const token = socket.handshake.auth.token

    // if (!token._j) {
    //   console.log('socket: token is required')
    //   socket.disconnect()
    //   return
    // }

    try {
      // const decode = validateToken(`Bearer: ${token._j}`)

      // console.log('decode' + decode)
    } catch (error) {
      console.error(error)
      socket.disconnect()
      return
    }

    const sender = (data: object) => socket.emit('newMessage', data)
    store.dispatch(setMessageFunction(sender))
    console.log(socket.id)
  })

  httpServer
    .once('error', (err) => {
      console.error(err)
      process.exit(1)
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`)
    })
})
