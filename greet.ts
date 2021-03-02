import GreetIn from './greetin';
import Person from './person';

export {greet, GreetInXhosa, GreetInZulu, GreetInEnglish};

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
};

// Without person interface

// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
// }

//End of without person interface

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
