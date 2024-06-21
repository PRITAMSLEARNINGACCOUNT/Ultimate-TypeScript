"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HiddenClass {
    constructor(_id, name, University) {
        this._id = _id;
        this.name = name;
        this.University = University;
    }
    NormalFunc() {
        console.log("This is a very simplified normal function inside of the hidden class , It can be accessed from the object created out of an inherited class as this class is hidden");
    }
}
class InheritedClass extends HiddenClass {
    constructor(_id, name, University, MAKAUTGranted) {
        super(_id, name, University);
        this.MAKAUTGranted = MAKAUTGranted;
    }
    NormalFunc_2() {
        console.log("This is also a very simplified normal function inside of the inherited class , It can be accessed from the object created out of this already inherited class which is inherited from the hidden class");
    }
}
let object = new InheritedClass(20, "PRITAM", "Brainware University", false);
object.NormalFunc();
object.NormalFunc_2();
console.log(`So An Object Of A Hidden Class Which Is Accessed Through The Concept Of Inheritance Looks Like - ${object.University} & ${object.name}`);
class FromInterface {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    InterfaceFunc() {
        console.log(`This is a function already declared in the interface itself just initialized it with a class`);
    }
}
let Object_2 = new FromInterface("PRITAM", 100);
Object_2.InterfaceFunc();
console.log(`So An Object Created From An Interface Which Is Hidden Just Like An Abstract Class Looks Like - ${Object_2.marks} & ${Object_2.name}`);
