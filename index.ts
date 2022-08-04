import EventBroker from "./lib/EventBroker";
import NotificationTaggerPipe from "./pipes/NotificationTaggerPipe";
import NotificationSubscriber from "./subscribers/NotificationSubscriber";

export default function createEventBroker () {
    const eventBroker = new EventBroker()

    const notificationSubscriber = new NotificationSubscriber()
    const notificationTaggerPipe = new NotificationTaggerPipe(eventBroker)

    eventBroker.addPipe('notification', notificationTaggerPipe)
    eventBroker.addSubscriber('notification', notificationSubscriber)

    return eventBroker
}