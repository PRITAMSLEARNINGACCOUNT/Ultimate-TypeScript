type CustomDataType_1 = {
  name: string;
  code: number;
};
type CustomDataType_2 = {
  name_2: string;
  code_2: number;
};

type Mixed = CustomDataType_1 & CustomDataType_2;
type Mixed_2 = CustomDataType_1 & CustomDataType_2;

let Obj: Mixed = {
  name: "Pritam",
  code: 152,
  name_2: "Deb Kumar Mondol",
  code_2: 173,
};
console.log(
  `The Object Looks Like ${Obj.name},${Obj.code},${Obj.name_2} & ${Obj.code_2}`
);
