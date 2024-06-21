type StudentDetail = {
  readonly Student_ID: string;
  Student_Name: string;
  Student_Phone_Number: number;
  Student_ABC_ID?: number;
};

let USER: StudentDetail = {
  Student_ID: "BWU/BCA/23/152",
  Student_Name: "PRITAM SAHA",
  Student_Phone_Number: 9433914779,
};

console.log(
  `The Name Of The Student Is ${USER.Student_Name} , The Student Code Is ${USER.Student_ID} & The Phone Number Of The Student Is ${USER.Student_Phone_Number}`
);

// USER.Student_ID = "BWU/BCA/23/155"; --> This will throw an error As The Student_ID Is Just A Read-Only Property.

console.log(
  `The Optional Value (Which Is Not Set Yet) Is ${USER.Student_ABC_ID} `
);

USER.Student_ABC_ID = 909090;
console.log(
  `After Setting The Optional Value,The Optional Value Becomes ${USER.Student_ABC_ID} `
);
