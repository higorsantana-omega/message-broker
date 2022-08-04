import { createServer } from 'http'

import createEventBroker from ".";
import SocketIONotificationHandler from "./handler/SocketIONotificationHandler";

async function main () {
    const eventBroker = createEventBroker()
    const socketIO = new SocketIONotificationHandler(eventBroker)

    const httpServer = createServer()

    httpServer.listen(3000)
        .on('listening', () => {
            console.log('Node app is running on port 3000')
            socketIO.listen()
            eventBroker.start()
        })
}

main()