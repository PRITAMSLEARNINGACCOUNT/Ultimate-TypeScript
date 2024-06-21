interface FirstInterface {
  name: string;
  Func(): string;
}

interface InheritedInterface extends FirstInterface {
  code: number;
}
let InheritedVarriable: InheritedInterface = {
  name: "PRITAM SAHA",
  Func() {
    return "I Am A Student Of Brainware University";
  },
  code: 152,
};
console.log(
  `The Return Value From The Function Of Inherited Interface Is ${InheritedVarriable.Func()} , An Another Property Name Is - ${
    InheritedVarriable.name
  } & The Last Property Of Inherited Interface Is ${InheritedVarriable.code}`
);

type FirstType = {
  name: string;
  Func(): string;
};
type InheritedType = FirstType & {
  code: number;
};
let InheritedVarriable_2: InheritedType = {
  name: "PRITAM SAHA",
  Func() {
    return "I Am A Student Of Brainware University";
  },
  code: 152,
};

console.log(
  `The Return Value From The Function Of Inherited Type Is ${InheritedVarriable_2.Func()} , An Another Property Name Is - ${
    InheritedVarriable_2.name
  } & The Last Property Of Inherited Type Is ${InheritedVarriable_2.code}`
);

console.log(
  "So The Above Example Just Demonstrates The Basic Difference Between Type And Interface Through Inheritance."
);

console.log(
  "For More Information Visit The Following Link - https://www.typescriptlang.org/docs/handbook/2/everyday-types.html"
);
