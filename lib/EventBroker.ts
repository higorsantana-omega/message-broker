import Channel from "./Channel";
import Pipe from "./Pipe";
import Subscriber from "./Subscriber";

export default class EventBroker {
    private channels: { [channelID: string]: Channel } = {}
    private intervalID!: ReturnType<typeof setInterval>

    addSubscriber (channelID: string, subscriber: Subscriber): void {
        if (!this.channels[channelID]) this.channels[channelID] = new Channel()

        this.channels[channelID].addSubscriber(subscriber)
    }

    addPipe (channelID: string, pipe: Pipe): void {
        if (!this.channels[channelID]) this.channels[channelID] = new Channel()

        this.channels[channelID].addPipe(pipe)
    }

    async publicEvent (channelID: string, event: unknown): Promise<void> {
        const channel = this.channels[channelID]
        if (channel) await this.channels[channelID].addEvent(event)
    }

    deliverEvents (): void {
        const channels = Object.values(this.channels)
        for (const channel of channels) {
            channel.deliverEvents()
        }
    }

    start (): void {
        this.intervalID = setInterval(this.deliverEvents.bind(this), 1000)
    }

    stop (): void {
        clearInterval(this.intervalID)
    }
}