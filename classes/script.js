/*
// classes are not much OOP
const person = {
        name: 'David',
        surname: 'Abram',
        age : 30,
        greet: ()=>{ // you cannot acess person.name
            return `${person.name}`;
        }
};
const person1 = {
    name: 'John',
    surname: 'Abram',
    age : 30,
};

function greet(person){
    return `${person.name} says hello`;
}
console.log(greet(person),greet(person1));
*/
class Person {
    constructor(name, surname, age){
        this.name = name;
        this.surname = surname;
        this.age = age;
        console.log('Hello, from constructor');
    }

    greet(){// this is a method
        return `${this.name} says hello.`;
    }
}

class Coder extends Person{

    constructor(name, surname, age, favoriteLang){
        super(name, surname, age); // super if used must always be first
        this.favoriteLang = favoriteLang;
        console.log('Hello, from constructor');
    }
    sayLang(){
        return `My favorite ${this.favoriteLang}`;
    }

}

const david = new Coder('David','Abram',30, 'JavaScript');
const john = new Person('John', 'Smith',35);

console.log(david.greet(), john.greet());


//object            //function! -> classes were added later
//console.log(david, typeof(david), typeof Person); //typof david
