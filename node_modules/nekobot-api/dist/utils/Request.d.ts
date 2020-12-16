import NekoBot from "../classes/NekoBot";
export default class Request {
    readonly client: NekoBot;
    constructor(client: NekoBot);
    get(endpoint: string, { queries, headers }: {
        queries: Record<string, string>;
        headers?: Record<string, string>;
    }): Promise<string>;
    private _send;
    private encodeSearchParams;
}
