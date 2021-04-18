import GreetIn from './greetin';
import Person from './person';
import UserGreetCounter from './greetClass'
export { GreetInXhosa, GreetInZulu, GreetInEnglish, MapUserGreetCounter, Greeter };


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

enum Language {
    eng = "Hello",
    zul = "Sawubona",
    xhosa = "Molo"
}
class Greeter {
    // create a Map that has a languages enum as a key and a GreetIn interface instance as a value

    theGreetInMap: Map<Language, GreetIn> = new Map();

    constructor(greetLanguages: Map<Language, GreetIn>) {
        this.theGreetInMap = greetLanguages;
    }


    theGreetInMap.set(Language.eng, new GreetInEnglish());
theGreetInMap.set(Language.zul, new GreetInZulu());
theGreetInMap.set(Language.xhosa, new GreetInXhosa());

let greeter = new Greeter(theGreetInMap);

function greet(name: string, chosenLanguage: Language) {
    let greetIn: GreetIn = new GreetInEnglish();
    if (chosenLanguage === Language.zul) {
        greetIn = new GreetInZulu();
    }
    if (chosenLanguage === Language.xhosa) {
        greetIn = new GreetInXhosa();
    }

    return greetIn.greet(name);
}
}


class MapUserGreetCounter implements UserGreetCounter {
    private theMap = new Map<string, number>();

    countGreet(firstName: string): void {
    }
    // greetCounter: number = 0;

    // I have to implement this function under neath and check if users are inserted

    get greetCounter(): number {
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

