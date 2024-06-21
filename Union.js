"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FirstVar;
FirstVar = 30;
console.log("The First Varriable With Union Is ".concat(FirstVar, " Which Is A ").concat(typeof FirstVar));
FirstVar = "Re-Assigned Value";
console.log("Again Re-Assignment Of The First Varriable With Union Is ".concat(FirstVar, " Which Is A ").concat(typeof FirstVar));
var SecondVar;
SecondVar = 20;
console.log("The Second Varriable With Union Is ".concat(SecondVar, " Which Is A ").concat(typeof SecondVar));
SecondVar = {
    name: "PRITAM",
    religion: "Hinduism",
    tax_clear: true,
};
console.log("Again Re-Assignment Of The Second Varriable With Union Is ".concat(SecondVar.name, " , ").concat(SecondVar.religion, " & ").concat(SecondVar.tax_clear, " Which Is A ").concat(typeof SecondVar));
var FirstArray = [20, 30, 5];
console.log("The First Array Varriable With Union Is ".concat(FirstArray.map(function (e) {
    return e;
}), " Which Is A Number Array"));
FirstArray = ["First String", "Second String", "Third String"];
console.log("Again Re-Assignment Of The First Array Varriable With Union Is ".concat(FirstArray.map(function (e) {
    return e;
}), " Which Is A String Array"));
var SecondArray = [20, 30, 5];
console.log("The Second Array Varriable With Union Is ".concat(SecondArray.map(function (e) {
    return e;
}), " Which Is A Number Array"));
SecondArray = ["First Value", "Second Value", "Third Value"];
console.log("Again Re-Assignment Of The Second Array Varriable With Union Is ".concat(SecondArray.map(function (e) {
    return e;
}), " Which Is A String Array"));
var FinalArray = [
    "This is a plain text which is string in programming languages",
    80,
];
// Alternate Way Of Doing The Same Above Thing
// let FinalArray: (string | number)[] = [
//   "This is a plain text which is string in programming languages",
//   80,
// ];
console.log("So The Final Array Which Is A Mixture Of String & Numbers Is - ".concat(FinalArray.map(function (element) {
    return element;
})));
var FinalVar;
FinalVar = "HELLO";
console.log("So The Value Of The Final Varriable Is ".concat(FinalVar));
