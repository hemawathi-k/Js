class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return "Hello, my name is " + this.name + " and I am " + this.age + " years old.";
  }
}

let person1 = new Person('Alice', 25);
let greeting = person1.greet();
console.log(greeting);
