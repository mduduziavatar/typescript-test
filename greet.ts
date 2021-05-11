import GreetIn from './greetin';
import Person from './person';
import UserGreetCounter from './greetClass'
export { GreetInXhosa, GreetInZulu, GreetInEnglish, MapUserGreetCounter, };


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

export enum Language {
    eng = "Hello",
    zul = "Sawubona",
    xhosa = "Molo"
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

export class Greeter {
    // create a Map that has a languages enum as a key and a GreetIn interface instance as a value
    private greetLanguages: Map<Language, GreetIn>
    private userGreetCounter: UserGreetCounter;

    constructor(greetLanguages: Map<Language, GreetIn>, userGreetCounter: UserGreetCounter) {
        this.greetLanguages = greetLanguages;
        this.userGreetCounter = userGreetCounter;
    }

    greet(name: string, chosenLanguage: Language) {
        let greetIn = this.greetLanguages.get(chosenLanguage);
        // keep track of how many users has been greeted
        this.userGreetCounter.countGreet(name);
        if (greetIn) {
            return greetIn.greet(name);
        }
        return "";
    }

    // call the greetCounter on the userGreetCounter
    public get greetCounter(): number {
        return this.userGreetCounter.greetCounter;
    }

    // call the userGreetCount on the userGreetCounter
    userGreetCount(firstName: string): number {
        return this.userGreetCounter.userGreetCount(firstName);
    }
}
// console.log(new MapUserGreetCounter().greetCounter = 5);
let greetMap = new Map<Language, GreetIn>();
greetMap.set(Language.xhosa, new GreetInXhosa());
greetMap.set(Language.eng, new GreetInEnglish());
greetMap.set(Language.zul, new GreetInZulu());
// console.log(greetMap);

const mapUserGreetCounter = new MapUserGreetCounter();
const greeter = new Greeter(greetMap, mapUserGreetCounter);
console.log(greeter);

console.log(new MapUserGreetCounter().userGreetCount("mdu"));
console.log(new MapUserGreetCounter().userGreetCount("Siphiwe"));

