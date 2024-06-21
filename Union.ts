let FirstVar: number | string;
FirstVar = 30;
console.log(
  `The First Varriable With Union Is ${FirstVar} Which Is A ${typeof FirstVar}`
);
FirstVar = "Re-Assigned Value";
console.log(
  `Again Re-Assignment Of The First Varriable With Union Is ${FirstVar} Which Is A ${typeof FirstVar}`
);

type CustomDataType = {
  name: string;
  religion: string;
  tax_clear: boolean;
};

let SecondVar: number | CustomDataType;
SecondVar = 20;
console.log(
  `The Second Varriable With Union Is ${SecondVar} Which Is A ${typeof SecondVar}`
);

SecondVar = {
  name: "PRITAM",
  religion: "Hinduism",
  tax_clear: true,
};

console.log(
  `Again Re-Assignment Of The Second Varriable With Union Is ${
    SecondVar.name
  } , ${SecondVar.religion} & ${
    SecondVar.tax_clear
  } Which Is A ${typeof SecondVar}`
);

let FirstArray: number[] | string[] = [20, 30, 5];
console.log(
  `The First Array Varriable With Union Is ${FirstArray.map(
    (e: number): number => {
      return e;
    }
  )} Which Is A Number Array`
);

FirstArray = ["First String", "Second String", "Third String"];
console.log(
  `Again Re-Assignment Of The First Array Varriable With Union Is ${FirstArray.map(
    (e: string): string => {
      return e;
    }
  )} Which Is A String Array`
);
let SecondArray: Array<number> | Array<string> = [20, 30, 5];
console.log(
  `The Second Array Varriable With Union Is ${SecondArray.map(
    (e: number): number => {
      return e;
    }
  )} Which Is A Number Array`
);

SecondArray = ["First Value", "Second Value", "Third Value"];
console.log(
  `Again Re-Assignment Of The Second Array Varriable With Union Is ${SecondArray.map(
    (e: string): string => {
      return e;
    }
  )} Which Is A String Array`
);
let FinalArray: Array<string | number> = [
  "This is a plain text which is string in programming languages",
  80,
];
// Alternate Way Of Doing The Same Above Thing
// let FinalArray: (string | number)[] = [
//   "This is a plain text which is string in programming languages",
//   80,
// ];
console.log(
  `So The Final Array Which Is A Mixture Of String & Numbers Is - ${FinalArray.map(
    (element: string | number): string | number => {
      return element;
    }
  )}`
);

let FinalVar: "HELLO" | "WORLD";
FinalVar = "HELLO";
console.log(`So The Value Of The Final Varriable Is ${FinalVar}`);

export {};
