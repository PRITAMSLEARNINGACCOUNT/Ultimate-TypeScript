abstract class HiddenClass {
  constructor(
    protected _id: number,
    public name: string,
    public University: string
  ) {}

  NormalFunc(): void {
    console.log(
      "This is a very simplified normal function inside of the hidden class , It can be accessed from the object created out of an inherited class as this class is hidden"
    );
  }
}

class InheritedClass extends HiddenClass {
  constructor(
    _id: number,
    name: string,
    University: string,
    private MAKAUTGranted: boolean
  ) {
    super(_id, name, University);
  }

  NormalFunc_2(): void {
    console.log(
      "This is also a very simplified normal function inside of the inherited class , It can be accessed from the object created out of this already inherited class which is inherited from the hidden class"
    );
  }
}

let object = new InheritedClass(20, "PRITAM", "Brainware University", false);
object.NormalFunc();
object.NormalFunc_2();
console.log(
  `So An Object Of A Hidden Class Which Is Accessed Through The Concept Of Inheritance Looks Like - ${object.University} & ${object.name}`
);
interface Hidden {
  name: string;
  marks: number;
  InterfaceFunc(): void;
}
class FromInterface implements Hidden {
  constructor(public name: string, public marks: number) {}
  InterfaceFunc(): void {
    console.log(
      `This is a function already declared in the interface itself just initialized it with a class`
    );
  }
}

let Object_2 = new FromInterface("PRITAM", 100);
Object_2.InterfaceFunc();
console.log(
  `So An Object Created From An Interface Which Is Hidden Just Like An Abstract Class Looks Like - ${Object_2.marks} & ${Object_2.name}`
);

export {};
