"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Var;
Var = {
    name: "PRITAM",
    Func: function () {
        return "Returning From Function Property";
    },
};
console.log("The Return Value Of The Function Declared As A Property In Interface Is - ".concat(Var.Func(), " & The Value Of An Another Property From That Same Interface Is ").concat(Var.name));
var Var_2 = {
    name: "PRITAM SAHA",
    Func: function () {
        return "I Am A Student Of Brainware University";
    },
    code: 152,
};
console.log("The Return Value From The Function Of Inherited Interface Is ".concat(Var_2.Func(), " , An Another Property Name Is - ").concat(Var_2.name, " & The Last Property Of Inherited Interface Is ").concat(Var_2.code));
var Var_3 = {
    Eligibility: true,
    Age: 19,
    Flight_Name: "Air Asia",
    Flight_Attendend: "PRITAM SAHA",
};
console.log("So The Values Of Extensive Interface Is ".concat(Var_3.Age, ",").concat(Var_3.Eligibility, ",").concat(Var_3.Flight_Attendend, " & ").concat(Var_3.Flight_Name));
