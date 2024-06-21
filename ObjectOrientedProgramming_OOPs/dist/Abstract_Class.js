"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HiddenClass {
    constructor(_id, name, University) {
        this._id = _id;
        this.name = name;
        this.University = University;
    }
}
class InheritedClass extends HiddenClass {
    constructor(_id, name, University) {
        super(_id, name, University);
    }
}
let Object = new InheritedClass(20, "PRITAM", "Brainware University");
console.log(`So An Object Of A Hidden Class Which Is Accessed Through The Concept Of Inheritance Looks Like - ${Object}`);
