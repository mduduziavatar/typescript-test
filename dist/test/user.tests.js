"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_1 = __importDefault(require("../greet"));
const greetClass_1 = __importDefault(require("../greetClass"));
describe('My first typescript basic test', function () {
    it('should test strings', function () {
        assert_1.default.equal("Hello, Bob Crow we can't contact you.", greet_1.default({
            firstName: "Bob",
            lastName: "Crow"
        }));
    });
    it('should greet in Xhosa', function () {
        const greetInXhosa = new greetClass_1.default();
        assert_1.default.equal("Molo, Mike", greetInXhosa.greet("Mike"));
    });
});
