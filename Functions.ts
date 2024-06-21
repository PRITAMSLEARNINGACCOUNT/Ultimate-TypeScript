function Basic_Func(FirstParam: number) {
  return FirstParam + 80;
}
console.log(`Output Of A Basic Function Is ${Basic_Func(20)}`);
function Basic_Func_2(
  FirstParam: number,
  SecondParam: string,
  ThirdParam: boolean
) {
  console.log(
    `This is under a basic function which takes different types of input and displays them into different lines`
  );
  console.log(FirstParam);
  console.log(SecondParam);
  console.log(ThirdParam);
}
Basic_Func_2(20, "This is a string", true);
let BasicArrowFunc = (FirstParam: string) => {
  console.log(
    `So The String Value From The Parameter Of This Function Is ${FirstParam}`
  );
};
BasicArrowFunc("My Name Is Pritam Saha");
let BasicArrowFunc_2 = (
  FirstParam: string,
  SecondParam: number,
  ThirdParam: boolean
) => {
  console.log(
    `The Different Values From The Parameter Of This Function Is - ${FirstParam} , ${SecondParam} , ${ThirdParam}`
  );
};
BasicArrowFunc_2("HELLO WORLD", 40, false);

function AdvanceFunc(AdvanceParam: number): number {
  return AdvanceParam + 200;
}
console.log(
  `This is the return value of the advance function ${AdvanceFunc(2)}`
);

function AdvanceFunc_2(
  FirstParam: number,
  SecondParam: string,
  ThirdParam: boolean
): string {
  console.log(
    `The First And Third Parameter Of This Function Is ${FirstParam} & ${ThirdParam}`
  );
  return SecondParam;
}

console.log(
  `The Return Value Of The Advance Function 2 Is ${AdvanceFunc_2(
    20,
    "Pritam",
    false
  )}`
);

let AdvanceArrowFunction = (FirstParam: string): string => {
  return "The Value Of The Parameter Of This Function Is " + FirstParam;
};

console.log(
  `So The Output Of The Advance Arrow Function Is ${AdvanceArrowFunction(
    "Hello Guy's I Am Finally Writing Some Code In TypeScript By Learning It."
  )}`
);

let AdvanceArrowFunction_2 = (
  FirstParam: string,
  SecondParam: number,
  ThirdParam: boolean
): boolean => {
  console.log(
    `The First And Second Parameter Of This Function Is ${FirstParam} & ${SecondParam}`
  );
  return ThirdParam;
};
console.log(
  `The Return Value Of Advanced Arrow Function 2 Is ${AdvanceArrowFunction_2(
    "Hey This Is TypeScript",
    200,
    false
  )}`
);
let LastArrowFunction = (
  CompulsoryParam: number,
  OptionalParam: string = ""
) => {
  if (OptionalParam === "") {
    console.log(
      `The Compulsory Parameteer Is ${CompulsoryParam} & The Optional Parameter(Default) Is ${OptionalParam}`
    );
  } else {
    console.log(
      `The Compulsory Parameteer Is ${CompulsoryParam} & The Optional Parameter(Passed To The Function) Is ${OptionalParam}`
    );
  }
};
LastArrowFunction(20);
LastArrowFunction(20, "Hehe hihi haha");
function LastFunction(
  Compulsory_Parameter: string,
  Optional_Parameter: boolean = false
): string {
  if (Optional_Parameter) {
    return (
      "Optional Parameter Is Passed Which Is A Boolean & On Top Of That Which Is True" +
      " But The Compulsory Parameter Is " +
      Compulsory_Parameter
    );
  } else {
    return (
      "Optional Parameter Is Not Passed" +
      " But The Compulsory Parameter Is " +
      Compulsory_Parameter
    );
  }
}
console.log(
  `The Return Value Of The Last Function Is(Without Passing Optional Parameter) - ${LastFunction(
    "You Are A Programmer"
  )}`
);
console.log(
  `The Return Value Of The Last Function Is(With Passing Optional Parameter) - ${LastFunction(
    "You Are A Learner",
    true
  )}`
);

function ThrowError(ErrorMSG: string): never {
  throw Error(ErrorMSG);
}
ThrowError("Intensionaly Thrown Error");
export {};
