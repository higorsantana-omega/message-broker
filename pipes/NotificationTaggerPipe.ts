import NotificationEvent from "../eventTypes/NotificationEvent"
import EventBroker from "../lib/EventBroker"
import Pipe from "../lib/Pipe"

export default class NotificationTaggerPipe implements Pipe {
    constructor (
      private eventBroker: EventBroker
    ) {}

    async processEvent (event: NotificationEvent): Promise<NotificationEvent> {
        const tags = ['EVENTO', 'PARTICIPANTES']

        for (const tag of tags) {
            await this.eventBroker.publicEvent(tag, event)
        }

        return event
    }
}