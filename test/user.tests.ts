import assert from 'assert';
import greet from '../greet';
import GreetInXhosa from '../greetClass';
// import GreetInEnglish from '../greetClass';
// import GreetInZulu from '../greetClass';

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
    
});