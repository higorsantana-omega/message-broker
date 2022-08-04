export default interface Pipe {
    processEvent (event: unknown): Promise<unknown>
}