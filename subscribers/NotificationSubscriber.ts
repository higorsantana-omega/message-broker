import NotificationEvent from "../eventTypes/NotificationEvent";
import Subscriber from "../lib/Subscriber";

export default class NotificationSubscriber implements Subscriber {
    async receiveEvent(event: NotificationEvent): Promise<void> {
        // Save event in repository
        console.log(`$${event.ID} is saving...`)

        return Promise.resolve()
    }
}