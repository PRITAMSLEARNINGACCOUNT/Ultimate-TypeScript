interface FirstInterface {
  name: string;
  Func(): string;
}
let Var: FirstInterface;
Var = {
  name: "PRITAM",
  Func() {
    return "Returning From Function Property";
  },
};
console.log(
  `The Return Value Of The Function Declared As A Property In Interface Is - ${Var.Func()} & The Value Of An Another Property From That Same Interface Is ${
    Var.name
  }`
);

interface InheritedInterface extends FirstInterface {
  code: number;
}

let Var_2: InheritedInterface = {
  name: "PRITAM SAHA",
  Func() {
    return "I Am A Student Of Brainware University";
  },
  code: 152,
};
console.log(
  `The Return Value From The Function Of Inherited Interface Is ${Var_2.Func()} , An Another Property Name Is - ${
    Var_2.name
  } & The Last Property Of Inherited Interface Is ${Var_2.code}`
);

interface ToBeExtended {
  Eligibility: boolean;
  Age: number;
  Flight_Name: string;
}

interface ToBeExtended {
  Flight_Attendend: string;
}

let Var_3: ToBeExtended = {
  Eligibility: true,
  Age: 19,
  Flight_Name: "Air Asia",
  Flight_Attendend: "PRITAM SAHA",
};

console.log(
  `So The Values Of Extensive Interface Is ${Var_3.Age},${Var_3.Eligibility},${Var_3.Flight_Attendend} & ${Var_3.Flight_Name}`
);

export {};
