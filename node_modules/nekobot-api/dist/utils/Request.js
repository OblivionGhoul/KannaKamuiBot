"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Error_1 = __importDefault(require("./Error"));
const https_1 = require("https");
class Request {
    constructor(client) {
        this.client = client;
    }
    get(endpoint, { queries, headers = {} }) {
        return new Promise((resolve, reject) => {
            this.
                _send("GET", endpoint, { queries, headers })
                .then(x => resolve(x.body.message))
                .catch(reject);
        });
    }
    _send(method, endpoint, { queries, headers = {} }) {
        const pkg = require("../../package.json");
        return new Promise((resolve, reject) => {
            const req = https_1.request(`${this.client.baseURL}/${endpoint}?${this.encodeSearchParams(queries)}`, {
                method,
                headers: Object.assign({ "User-Agent": `${pkg.name}/${pkg.version} (${pkg.repository.url})` }, headers)
            }, response => {
                let raw = "";
                response
                    .on("data", chunk => {
                    raw += chunk;
                })
                    .on("end", () => {
                    const res = {
                        statusCode: response.statusCode,
                        body: JSON.parse(raw)
                    };
                    if (!(res.statusCode >= 200 && res.statusCode < 300)) {
                        reject(new Error_1.default(res.body.message, res.statusCode));
                    }
                    else {
                        resolve(res);
                    }
                })
                    .on("error", reject);
            });
            req.end();
        });
    }
    encodeSearchParams(queries) {
        return Object.entries(queries)
            .filter(x => Boolean(x[1]))
            .map(x => `${x[0]}=${encodeURIComponent(x[1])}`)
            .join("&");
    }
}
exports.default = Request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVxdWVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9SZXF1ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esb0RBQW1DO0FBQ25DLGlDQUFnQztBQUVoQyxNQUFxQixPQUFPO0lBQ3hCLFlBQW1DLE1BQWU7UUFBZixXQUFNLEdBQU4sTUFBTSxDQUFTO0lBQUcsQ0FBQztJQUUvQyxHQUFHLENBQUMsUUFBZ0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUcsRUFBRSxFQUF5RTtRQUN6SCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLElBQUk7Z0JBQ0EsS0FBSyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUM7aUJBQzNDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUNsQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU8sS0FBSyxDQUFDLE1BQWMsRUFBRSxRQUFnQixFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBRyxFQUFFLEVBQXlFO1FBRTVJLE1BQU0sR0FBRyxHQUFtRSxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUMxRyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLE1BQU0sR0FBRyxHQUFHLGVBQU8sQ0FDZixHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtnQkFDdEUsTUFBTTtnQkFDTixPQUFPLGtCQUNILFlBQVksRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLE9BQU8sS0FBSyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsR0FBRyxJQUMvRCxPQUFPLENBQ2I7YUFDSixFQUFFLFFBQVEsQ0FBQyxFQUFFO2dCQUNWLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztnQkFDYixRQUFRO3FCQUNILEVBQUUsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ2hCLEdBQUcsSUFBSSxLQUFLLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQztxQkFDRCxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtvQkFDWixNQUFNLEdBQUcsR0FBRzt3QkFDUixVQUFVLEVBQUUsUUFBUSxDQUFDLFVBQVc7d0JBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztxQkFDeEIsQ0FBQztvQkFDRixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxFQUFFO3dCQUNsRCxNQUFNLENBQUMsSUFBSSxlQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7cUJBQzlEO3lCQUFNO3dCQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDaEI7Z0JBQ0wsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDN0IsQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxPQUErQjtRQUN0RCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO2FBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2FBQy9DLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFwREQsMEJBb0RDIn0=