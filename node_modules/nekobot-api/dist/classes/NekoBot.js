"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Request_1 = __importDefault(require("../utils/Request"));
;
class NekoBot {
    constructor(token) {
        this.baseURL = "https://nekobot.xyz/api";
        if (token)
            Object.defineProperty(this, "token", { value: token });
        Object.defineProperty(this, "request", { value: new Request_1.default(this) });
    }
    generate(type, queries) {
        return new Promise((resolve, reject) => {
            this.request
                .get("imagegen", { queries: Object.assign(Object.assign({}, queries), { type }) })
                .then(resolve)
                .catch(reject);
        });
    }
    get(type) {
        const headers = {};
        if (this.token)
            headers["Authorization"] = this.token;
        return new Promise((resolve, reject) => {
            this.request
                .get("image", { queries: { type }, headers })
                .then(resolve)
                .catch(reject);
        });
    }
}
exports.default = NekoBot;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmVrb0JvdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGFzc2VzL05la29Cb3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSwrREFBdUM7QUEwRXRDLENBQUM7QUFFRixNQUFxQixPQUFPO0lBS3hCLFlBQW1CLEtBQWM7UUFKakIsWUFBTyxHQUFHLHlCQUF5QixDQUFDO1FBS2hELElBQUksS0FBSztZQUFFLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFTSxRQUFRLENBQUMsSUFBWSxFQUFFLE9BQWdDO1FBQzFELE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE9BQU87aUJBQ1AsR0FBRyxDQUFDLFVBQVUsRUFBRSxFQUFFLE9BQU8sa0NBQU8sT0FBTyxLQUFFLElBQUksR0FBRSxFQUFFLENBQUM7aUJBQ2xELElBQUksQ0FBQyxPQUFPLENBQUM7aUJBQ2IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVNLEdBQUcsQ0FBQyxJQUFrQztRQUN6QyxNQUFNLE9BQU8sR0FBMkIsRUFBRSxDQUFDO1FBQzNDLElBQUksSUFBSSxDQUFDLEtBQUs7WUFBRSxPQUFPLENBQUMsZUFBZSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ25DLElBQUksQ0FBQyxPQUFPO2lCQUNQLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQztpQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDYixLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUE3QkQsMEJBNkJDIn0=