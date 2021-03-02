import assert from 'assert';
import { greet, GreetInXhosa, GreetInEnglish, GreetInZulu } from "../greet";

describe('My first typescript basic test', function () {

    it('should test strings', function () {
        assert.equal("Hello, Bob Crow we can't contact you.", greet({
            firstName: "Bob",
            lastName: "Crow"
        }));
    });

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

});