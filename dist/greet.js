"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
}
exports.default = greet;
;
// Without person interface
// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
// }
//End of without person interface
