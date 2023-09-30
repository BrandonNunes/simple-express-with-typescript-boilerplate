import { createServer } from './index'
import http from 'http';

const PORT = process.env.PORT || 6969;

const startServer = () => {
  const app = createServer();
  const server = http.createServer(app).listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
  })
    process.on('SIGINT', () => {
    server.close()
    console.log('SERVER OFF')
    })
}
startServer();
