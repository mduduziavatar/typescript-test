import assert from 'assert';
import { GreetInXhosa, GreetInEnglish, GreetInZulu, MapUserGreetCounter, Greeter, Language } from "../greet";

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

    it('should count', function () {
        const mapUserGreetCounter = new MapUserGreetCounter();
        let name = "Siphiwe"
        assert.equal(1, mapUserGreetCounter.userGreetCount(name));
    });


    it("should return the object of all users greeted on local storage", function () {
        let greetMap = new Greeter(Language, new GreetInXhosa());
        // greetMap.set(Language.xhosa, new GreetInXhosa());
      assert.equal("Molo, Andre", greetMap.greet("Andre", Language.xhosa));
    });

    it('should be able to in Zulu using the new Greeter class', function () {


    });

    // assert.equal("Goeie dag, Andre", greeter.greet("Andre", Language.afr));
    // assert.equal("Good day, Andrew", greeter.greet("Andrew", Language.eng));
    // assert.equal("", greeter.greet("Andrew", Language.fr));

});