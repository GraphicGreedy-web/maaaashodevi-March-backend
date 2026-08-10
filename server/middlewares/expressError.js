export class expressError extends Error {
    super(message, status) {
        this.message = message
        this.status = status
    }
}