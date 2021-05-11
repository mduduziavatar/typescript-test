"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = exports.Language = exports.MapUserGreetCounter = exports.GreetInEnglish = exports.GreetInZulu = exports.GreetInXhosa = void 0;
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
var Language;
(function (Language) {
    Language["eng"] = "Hello";
    Language["zul"] = "Sawubona";
    Language["xhosa"] = "Molo";
})(Language = exports.Language || (exports.Language = {}));
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
class Greeter {
    constructor(greetLanguages, userGreetCounter) {
        this.greetLanguages = greetLanguages;
        this.userGreetCounter = userGreetCounter;
    }
    greet(name, chosenLanguage) {
        let greetIn = this.greetLanguages.get(chosenLanguage);
        // keep track of how many users has been greeted
        this.userGreetCounter.countGreet(name);
        if (greetIn) {
            return greetIn.greet(name);
        }
        return "";
    }
    // call the greetCounter on the userGreetCounter
    get greetCounter() {
        return this.userGreetCounter.greetCounter;
    }
    // call the userGreetCount on the userGreetCounter
    userGreetCount(firstName) {
        return this.userGreetCounter.userGreetCount(firstName);
    }
}
exports.Greeter = Greeter;
// console.log(new MapUserGreetCounter().greetCounter = 5);
let greetMap = new Map();
greetMap.set(Language.xhosa, new GreetInXhosa());
greetMap.set(Language.eng, new GreetInEnglish());
greetMap.set(Language.zul, new GreetInZulu());
// console.log(greetMap);
const mapUserGreetCounter = new MapUserGreetCounter();
const greeter = new Greeter(greetMap, mapUserGreetCounter);
console.log(greeter);
console.log(new MapUserGreetCounter().userGreetCount("mdu"));
console.log(new MapUserGreetCounter().userGreetCount("Siphiwe"));
