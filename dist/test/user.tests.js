"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_1 = __importDefault(require("../greet"));
// import GreetInXhosa from '../greetClass';
// import GreetInEnglish from '../greetClass';
// export * from "../greetClass"; // exports 'StringValidator' interface
const greetClass_1 = require("../greetClass");
// import GreetInEnglish from '../greetClass';
// import GreetInZulu from '../greetClass';
describe('My first typescript basic test', function () {
    it('should test strings', function () {
        assert_1.default.equal("Hello, Bob Crow we can't contact you.", greet_1.default({
            firstName: "Bob",
            lastName: "Crow"
        }));
    });
    it('should greet in Xhosa', function () {
        const greetInXhosa = new greetClass_1.GreetInXhosa();
        assert_1.default.equal("Molo, Mike", greetInXhosa.greet("Mike"));
    });
    it('should greet in English', function () {
        const greetInEnglish = new greetClass_1.GreetInEnglish();
        assert_1.default.equal("Hello, Mike", greetInEnglish.greet("Mike"));
    });
});
