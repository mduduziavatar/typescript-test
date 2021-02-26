import GreetIn from './greetClass';
export default


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