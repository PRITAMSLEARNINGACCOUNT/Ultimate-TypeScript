let StudentDetails = {
  Student_Name: "Pritam Saha",
  Student_Code: "BWU/BCA/23/152",
  Student_PAID: false,
};

type Student = {
  Student_Name: string;
  Student_Code: string;
  Student_PAID: boolean;
};
type Customer = {
  Customer_Name: string;
  Customer_ID: number;
  Customer_Active: boolean;
};

let Customer_1: Customer = {
  Customer_Name: "PRITAM SAHA",
  Customer_ID: 50,
  Customer_Active: true,
};
console.log(
  `A Simple Customer Object Looks Like ${Customer_1.Customer_Name} , ${Customer_1.Customer_ID} & ${Customer_1.Customer_Active}`
);
function GetStudentInfo(Std_Obj: Student): void {
  console.log(
    `The Name Of The Student Is ${Std_Obj.Student_Name}\nThe Student Code Of The Student Is ${Std_Obj.Student_Code}\nThe Information About Payment Of The Student Is ${Std_Obj.Student_PAID}`
  );
}
function ReturnStdInfo(Std_Obj: Student): Student {
  return Std_Obj;
}

GetStudentInfo(StudentDetails);
console.log(
  `The Student Information Returned From The Function Is ${
    ReturnStdInfo(StudentDetails).Student_Name
  }, ${ReturnStdInfo(StudentDetails).Student_Code} & ${
    ReturnStdInfo(StudentDetails).Student_PAID
  }`
);

export {};
