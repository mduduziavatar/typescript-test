import GreetIn from './greetin';
import Person from './person';
import UserGreetCounter from './greetClass'

export { greet, GreetInXhosa, GreetInZulu, GreetInEnglish, MapUserGreetCounter };

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
};


class GreetInXhosa implements GreetIn {
    greet(name: string) {
        return "Molo, " + name;
    }
}

class GreetInZulu implements GreetIn {
    greet(name: string) {
        return "Sawubona, " + name;
    }
}
class GreetInEnglish implements GreetIn {
    greet(name: string) {
        return "Hello, " + name;

    }

}
export class Greeter {
    // create a Map that has a languages enum as a key and a GreetIn interface instance as a value
    private greetLanguages:Map<Language, GreetIn>

    constructor(greetLanguages:Map<Language, GreetIn>){
        this.greetLanguages = greetLanguages;
    }
    
    greet(name: string, chosenLanguage:Language) {
        let greetIn = this.greetLanguages.get(chosenLanguage);
        if (greetIn) {
            return greetIn.greet(name);
        }
        return "";
    }
  }

class MapUserGreetCounter implements UserGreetCounter {
    private theMap = new Map<string, number>();

    countGreet(firstName: string): void {
    }
    // greetCounter: number = 0;

    // I have to implement this function under neath and check if users are inserted

    get greetCounter() : number {
        return this.theMap.keys.length;
    }
    userGreetCount(firstName: string): number {

        if (this.theMap.has(firstName)) {
            // if the map has first name return increment
            let currentCount = this.theMap.get(firstName);
            if (currentCount) {
                currentCount++        //if its there increment value for name ++
                this.theMap.set(firstName, currentCount)                   //if current name has not been greeted you add the name into the Map.
            }


        }
        else {
            this.theMap.set(firstName, 1)         // if the name is not there add the name to the map counter from 1


        }
        let currentCounter = this.theMap.get(firstName)
        if (currentCounter) {

            return currentCounter
        }
        return 0
    }
    

}
// console.log(new MapUserGreetCounter().greetCounter = 5);

console.log(new MapUserGreetCounter().userGreetCount("mdu"));
console.log(new MapUserGreetCounter().userGreetCount("Siphiwe"));

