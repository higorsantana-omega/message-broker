import NotificatioHandler from "./NotificationHandler";

export default class SocketIONotificationHandler extends NotificatioHandler {
    private socketIOFake = { on: (channel: string, action: unknown) => {} }

    listen (): void {
        this.socketIOFake.on('notification', this.onNotification.bind(this))
    }
}