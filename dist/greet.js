"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeter = exports.MapUserGreetCounter = exports.GreetInEnglish = exports.GreetInZulu = exports.GreetInXhosa = void 0;
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
})(Language || (Language = {}));
class Greeter {
    constructor(greetLanguages) {
        // create a Map that has a languages enum as a key and a GreetIn interface instance as a value
        this.theGreetInMap = new Map();
        this.theGreetInMap = greetLanguages;
    }
    set(Language, eng, , GreetInEnglish) { }
}
exports.Greeter = Greeter;
();
;
theGreetInMap.set(Language.zul, new GreetInZulu());
theGreetInMap.set(Language.xhosa, new GreetInXhosa());
let greeter = new Greeter(theGreetInMap);
function greet(name, chosenLanguage) {
    let greetIn = new GreetInEnglish();
    if (chosenLanguage === Language.zul) {
        greetIn = new GreetInZulu();
    }
    if (chosenLanguage === Language.xhosa) {
        greetIn = new GreetInXhosa();
    }
    return greetIn.greet(name);
}
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
