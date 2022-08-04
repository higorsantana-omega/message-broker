import EventBroker from "../lib/EventBroker";

export default abstract class NotificatioHandler {
    constructor (
        private eventBroker: EventBroker
    ) {}

    protected onNotification (notification: unknown): void {
        this.eventBroker.publicEvent('notification', notification)
    }
}