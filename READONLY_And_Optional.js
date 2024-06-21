var USER = {
    Student_ID: "BWU/BCA/23/152",
    Student_Name: "PRITAM SAHA",
    Student_Phone_Number: 9433914779,
};
console.log("The Name Of The Student Is ".concat(USER.Student_Name, " , The Student Code Is ").concat(USER.Student_ID, " & The Phone Number Of The Student Is ").concat(USER.Student_Phone_Number));
// USER.Student_ID = "BWU/BCA/23/155"; --> This will throw an error As The Student_ID Is Just A Read-Only Property.
console.log("The Optional Value (Which Is Not Set Yet) Is ".concat(USER.Student_ABC_ID, " "));
USER.Student_ABC_ID = 909090;
console.log("After Setting The Optional Value,The Optional Value Becomes ".concat(USER.Student_ABC_ID, " "));
