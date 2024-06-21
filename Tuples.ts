let Basic_Tuple: [string, number] = ["HELLO", 80];
console.log(`A Basic Tuple Looks Like ${Basic_Tuple}`);
let Basic_Tuple_2: [string | boolean, number] = [true, 80];
console.log(
  `Second Basic Tuple Looks Like (Created Using Union) ${Basic_Tuple}`
);
type Custom = {
  name: string;
  code: number;
};
let Basic_Tuple_3: [Custom, number] = [{ name: "PRITAM", code: 152 }, 80];
console.log(
  `Third Basic Tuple Looks Like (Created Using Union & Custom Data Type) ${Basic_Tuple}`
);
