abstract class HiddenClass {
  constructor(
    protected _id: number,
    public name: string,
    public University: string
  ) {}
}

class InheritedClass extends HiddenClass {
  constructor(_id: number, name: string, University: string) {
    super(_id, name, University);
  }
}

let Object = new InheritedClass(20, "PRITAM", "Brainware University");
console.log(
  `So An Object Of A Hidden Class Which Is Accessed Through The Concept Of Inheritance Looks Like - ${Object}`
);

export {};
