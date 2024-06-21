class ToughToUnderstand<NumType> {
  constructor(
    public value: NumType,
    public add: (x: NumType, y: NumType) => NumType
  ) {}
}

let ToughVarriable = new ToughToUnderstand<number>(0, (x, y) => {
  return x + y;
});
ToughVarriable.value = 20;
console.log(
  `The Value Returned From The Function Defined Under The Class Is - ${ToughVarriable.add(
    20,
    30
  )}`
);
console.log(
  `And Also The Value Of A Varriable Under That Same Class Is - ${ToughVarriable.value}`
);

export {};
