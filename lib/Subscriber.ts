export default interface Subscriber {
    receiveEvent (event: unknown): Promise<void>
}