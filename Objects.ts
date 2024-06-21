let Simple_Object = {
  Key_1: "This is key 1",
  Key_2: 80,
  Key_3: true,
};

function GetSimpleObj({}): { Key_1: string; Key_2: number; Key_3: boolean } {
  return Simple_Object;
}



export {};
