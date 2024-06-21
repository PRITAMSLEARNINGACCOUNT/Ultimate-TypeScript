function ReturnArray<T>(Param: T[]): T[] {
  return Param;
}

console.log(
  `So The Returned Array Is - ${ReturnArray([8, 65, 7, 8]).map(
    <Type>(ele: Type): Type => {
      return ele;
    }
  )}`
);

function ReturnArrayElement<T>(Parameter: T[]): T {
  return Parameter[0];
}
console.log(
  `So The Returned Array Element Is - ${ReturnArrayElement([8, 65, 7, 8])}`
);
export {};
