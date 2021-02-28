import GreetIn from './greetin';

export {GreetInXhosa, GreetInZulu, GreetInEnglish};

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

// export * from "./greet";
