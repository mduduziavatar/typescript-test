import Person from './person';

export default

    function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName} we can't contact you.`;
};



// Without person interface

// export default function greet(firstName: string, lastName: string) {
//     return `Hello, ${firstName} ${lastName}`;
// }

//End of without person interface