export default class NekoBotError extends Error {
    statusCode: number;
    status: string;
    constructor(message: string, statusCode: number);
}
