"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const greet_1 = require("../greet");
describe('My first typescript basic test', function () {
    it('should test strings', function () {
        assert_1.default.equal("Hello, Bob Crow we can't contact you.", greet_1.greet({
            firstName: "Bob",
            lastName: "Crow"
        }));
    });
    it('should greet in Xhosa', function () {
        const greetInXhosa = new greet_1.GreetInXhosa();
        assert_1.default.equal("Molo, Mike", greetInXhosa.greet("Mike"));
    });
    it('should greet in English', function () {
        const greetInEnglish = new greet_1.GreetInEnglish();
        assert_1.default.equal("Hello, Mike", greetInEnglish.greet("Mike"));
    });
    it('should greet in Zulu', function () {
        const greetInZulu = new greet_1.GreetInZulu();
        assert_1.default.equal("Sawubona, Mike", greetInZulu.greet("Mike"));
    });
    it('should count once', function () {
        const mapUserGreetCounter = new greet_1.MapUserGreetCounter();
        let name = "Siphiwe";
        assert_1.default.equal(1, mapUserGreetCounter.userGreetCount(name));
    });
    it('should count two times', function () {
        const mapUserGreetCounter = new greet_1.MapUserGreetCounter();
        assert_1.default.deepEqual({ "Siphiwe": 1, "Siphiwez": 2 }, mapUserGreetCounter.userGreetCount);
    });
    // it("should return the object of all users greeted on local storage", function() {
    //     var item = greetFactory();
    //     item.greetUser("Siphiwe", "zulu");
    //     item.greetUser("Kagiso", "english");
    //     assert.deepEqual({ "Siphiwe": 0, "Kagiso": 0 }, item.getAllUsers());
    // });
});
