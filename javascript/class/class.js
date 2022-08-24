class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    getFullName() {
      return this.firstName + " " + this.lastName;
    }
  
    sayHi() {
      console.log("Hi from " + this.getFullName());
    }
  }
  let person1 = new Person("John", "Doe");
  person1.sayHi();
  
  let Animal = class {
    sayHi() {
      console.log("Hi");
    }
  };
  new Animal().sayHi();
  
  class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    //getter
    get name() {
      return this._name;
    }
  
    //setter
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short");
        return;
      }
      this._name = value;
    }
  
    // computed method name
    ["say" + "Hi"]() {
      console.log("Hello from " + this.name);
    }
  }
  let user = new User("John");
  console.log(user.name);
  user.sayHi();