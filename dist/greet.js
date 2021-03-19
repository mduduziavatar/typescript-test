"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapUserGreetCounter = exports.GreetInEnglish = exports.GreetInZulu = exports.GreetInXhosa = exports.greet = void 0;
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
}
exports.greet = greet;
;
class GreetInXhosa {
    greet(name) {
        return "Molo, " + name;
    }
}
exports.GreetInXhosa = GreetInXhosa;
class GreetInZulu {
    greet(name) {
        return "Sawubona, " + name;
    }
}
exports.GreetInZulu = GreetInZulu;
class GreetInEnglish {
    greet(name) {
        return "Hello, " + name;
    }
}
exports.GreetInEnglish = GreetInEnglish;
class MapUserGreetCounter {
    constructor() {
        this.theMap = new Map();
    }
    countGreet(firstName) {
    }
    // greetCounter: number = 0;
    // I have to implement this function under neath and check if users are inserted
    get greetCounter() {
        return this.theMap.keys.length;
    }
    userGreetCount(firstName) {
        if (this.theMap.has(firstName)) {
            // if the map has first name return increment
            let currentCount = this.theMap.get(firstName);
            if (currentCount) {
                currentCount++; //if its there increment value for name ++
                this.theMap.set(firstName, currentCount); //if current name has not been greeted you add the name into the Map.
            }
        }
        else {
            this.theMap.set(firstName, 1); // if the name is not there add the name to the map counter from 1
        }
        let currentCounter = this.theMap.get(firstName);
        if (currentCounter) {
            return currentCounter;
        }
        return 0;
    }
}
exports.MapUserGreetCounter = MapUserGreetCounter;
// console.log(new MapUserGreetCounter().greetCounter = 5);
console.log(new MapUserGreetCounter().userGreetCount("mdu"));
console.log(new MapUserGreetCounter().userGreetCount("Siphiwe"));
