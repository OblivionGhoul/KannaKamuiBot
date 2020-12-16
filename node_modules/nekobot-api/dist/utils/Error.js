"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
class NekoBotError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.name = "NekoBotError";
        this.status = http_1.STATUS_CODES[statusCode];
    }
}
exports.default = NekoBotError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvdXRpbHMvRXJyb3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBb0M7QUFFcEMsTUFBcUIsWUFBYSxTQUFRLEtBQUs7SUFFM0MsWUFBbUIsT0FBZSxFQUFTLFVBQWtCO1FBQ3pELEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUR3QixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBRXpELElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsbUJBQVksQ0FBQyxVQUFVLENBQUUsQ0FBQztJQUM1QyxDQUFDO0NBQ0o7QUFQRCwrQkFPQyJ9