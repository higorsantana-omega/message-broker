import Pipe from "./Pipe"
import Subscriber from "./Subscriber"

export default class Channel {
    private subscribers: Subscriber[] = []
    private pipeline: Pipe[] = []
    private events: unknown[] = []

    addSubscriber (subscriber: Subscriber): void {
        this.subscribers.push(subscriber)
    }

    addPipe (pipe: Pipe): void {
        this.pipeline.push(pipe)
    }

    async addEvent (event: unknown): Promise<void> {
        const processedEvent = await this.applyPipeline(event)
        this.events.push(processedEvent)
    }

    deliverEvents (): void {
        for (const event of this.events) {
            for (const subscriber of this.subscribers) {
                subscriber.receiveEvent(event)
            }
        }
    }

    private async applyPipeline (event: unknown): Promise<unknown> {
        let processedEvent = event

        for (const pipe of this.pipeline) {
            processedEvent = await pipe.processEvent(processedEvent)
        }

        return processedEvent
    }
}