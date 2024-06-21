function AdvanceGenerics<T, T2>(NormalParam: T, SecondParam: T2): T2 {
  return SecondParam;
}

console.log(
  `So The Result Of The Function Related To Advance Generics Is - ${AdvanceGenerics(
    "String",
    50.6
  )}`
);
interface BasicInterface {
  name: string;
  code: number;
}

function AdvanceGenerics_2<T, T2 extends BasicInterface>(
  NormalParam: T,
  SecondParam: T2
): boolean {
  return true;
}

console.log(
  `So The Result Of An Another Function Related To Advance Generics Is - ${AdvanceGenerics_2(
    "String",
    { name: "PRITAM", code: 152 }
  )}`
);

export {};
