"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentDetails = {
    Student_Name: "Pritam Saha",
    Student_Code: "BWU/BCA/23/152",
    Student_PAID: false,
};
var Customer_1 = {
    Customer_Name: "PRITAM SAHA",
    Customer_ID: 50,
    Customer_Active: true,
};
console.log("A Simple Customer Object Looks Like ".concat(Customer_1.Customer_Name, " , ").concat(Customer_1.Customer_ID, " & ").concat(Customer_1.Customer_Active));
function GetStudentInfo(Std_Obj) {
    console.log("The Name Of The Student Is ".concat(Std_Obj.Student_Name, "\nThe Student Code Of The Student Is ").concat(Std_Obj.Student_Code, "\nThe Information About Payment Of The Student Is ").concat(Std_Obj.Student_PAID));
}
function ReturnStdInfo(Std_Obj) {
    return Std_Obj;
}
GetStudentInfo(StudentDetails);
console.log("The Student Information Returned From The Function Is ".concat(ReturnStdInfo(StudentDetails).Student_Name, ", ").concat(ReturnStdInfo(StudentDetails).Student_Code, " & ").concat(ReturnStdInfo(StudentDetails).Student_PAID));
