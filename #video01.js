const person = {
    firstname: "John",
    lastName: "Doe",
    fullName: function() {

    return this.firstName +""+this.lastName;

    }
    }
    
    console.log(person.fullname());John Doe
    
    // example 2

const person = {
fullName: function(){
    return this.firstName + "" + this.lastname;

    }

}

const person1 = {
    firstname: "John",
    lastame:"Doe"
}

const person2 = {
    firstname: "Mary",
    lastname: "Doe"
}

console.log(person.fullName.call(person1)); //console: John Doe
console.log(person.fullNuma.call(person2)); //Mary Doe

// example 3 

const obj = {name: "John"};

let freeting = function(a,b) {
     return `${a} ${thid.nsme}.${b}`;
}

console.log(greeting.apply(obj,["Hello", "How are you?"]));
// console: Hellon john. How are you?

//https://www.youtube.com/watch?v=rZc7_2YXbP8
