"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Num_Array = [12, 2, 23, 43];
console.log("The Number Array Is ".concat(Num_Array));
var str_Array = [
    "First String",
    "Second String",
    "Third String",
];
console.log("The String Array Is ".concat(str_Array));
var ObjectArray = [
    {
        name: "Pritam",
        code: 152,
    },
    {
        name: "Deb kumar Mondal",
        code: 173,
    },
];
console.log("The Object Array Is - ");
ObjectArray.map(function (e, index) {
    console.log("This is an only index not from the object but from the array" + index);
    console.log(e.name);
    console.log(e.code);
});
var MdArray = [
    [20, 30, 40],
    [30, 40, 50],
];
console.log("So The Multi Dimensional Array Is - ");
MdArray.map(function (e) {
    e.map(function (ele) {
        console.log(ele);
    });
});
