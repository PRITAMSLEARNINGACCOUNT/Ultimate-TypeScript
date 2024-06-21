let Num_Array: number[] = [12, 2, 23, 43];
console.log(`The Number Array Is ${Num_Array}`);
let str_Array: Array<string> = [
  "First String",
  "Second String",
  "Third String",
];
console.log(`The String Array Is ${str_Array}`);

type Custom_Type = {
  name: string;
  code: number;
};

let ObjectArray: Custom_Type[] = [
  {
    name: "Pritam",
    code: 152,
  },
  {
    name: "Deb kumar Mondal",
    code: 173,
  },
];

console.log(`The Object Array Is - `);
ObjectArray.map((e: Custom_Type, index: number) => {
  console.log(
    "This is an only index not from the object but from the array" + index
  );
  console.log(e.name);
  console.log(e.code);
});

let MdArray: number[][] = [
  [20, 30, 40],
  [30, 40, 50],
];

console.log(`So The Multi Dimensional Array Is - `);
MdArray.map((e: number[]) => {
  e.map((ele: number) => {
    console.log(ele);
  });
});

export {};
