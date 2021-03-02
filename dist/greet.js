"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetInEnglish = exports.GreetInZulu = exports.GreetInXhosa = exports.greet = void 0;
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
}
exports.greet = greet;
;
// Without person interface
// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
// }
//End of without person interface
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
