import assert from 'assert';
import { greet, GreetInXhosa, GreetInEnglish, GreetInZulu, MapUserGreetCounter } from "../greet";

describe('My first typescript basic test', function () {

    // it('should test strings', function () {
    //     const greetInEnglish = new GreetInEnglish();
    //     assert.equal("Hello, Bob Crow we can't contact you.", greetInEnglish.greet({
    //         firstName: "Bob",
    //         lastName: "Crow"
    //     }));
    // });

    it('should greet in Xhosa', function () {
        const greetInXhosa = new GreetInXhosa();
        assert.equal("Molo, Mike", greetInXhosa.greet("Mike"));
    });

    it('should greet in English', function () {
        const greetInEnglish = new GreetInEnglish();
        assert.equal("Hello, Mike", greetInEnglish.greet("Mike"));
    });

    it('should greet in Zulu', function () {
        const greetInZulu = new GreetInZulu();
        assert.equal("Sawubona, Mike", greetInZulu.greet("Mike"));
    });

    it('should count once', function () {
        const mapUserGreetCounter = new MapUserGreetCounter();
        let name = "Siphiwe"
        assert.equal(1, mapUserGreetCounter.userGreetCount(name));
    });

    it('should count two times', function () {
        const mapUserGreetCounter = new MapUserGreetCounter();

        let name = "Siphiwe";
        const greetInZulu = new GreetInZulu();
        let zuluCount = greetInZulu.greet(name)
        assert.deepEqual({}, mapUserGreetCounter.userGreetCount(zuluCount))
    });

    // it("should return the object of all users greeted on local storage", function() {
    //     var item = greetFactory();
    //     item.greetUser("Siphiwe", "zulu");
    //     item.greetUser("Kagiso", "english");
    //     assert.deepEqual({ "Siphiwe": 0, "Kagiso": 0 }, item.getAllUsers());
    // });

    it('should be able to in Zulu using the new Greeter class', function () {


    });

    // assert.equal("Goeie dag, Andre", greeter.greet("Andre", Language.afr));
    // assert.equal("Good day, Andrew", greeter.greet("Andrew", Language.eng));
    // assert.equal("", greeter.greet("Andrew", Language.fr));

});