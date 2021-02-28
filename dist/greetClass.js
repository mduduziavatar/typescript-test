"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetInEnglish = exports.GreetInZulu = exports.GreetInXhosa = void 0;
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
// export * from "./greet";
