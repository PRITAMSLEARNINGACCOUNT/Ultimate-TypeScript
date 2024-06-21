"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ReturnArray(Param) {
    return Param;
}
console.log("So The Returned Array Is - ".concat(ReturnArray([8, 65, 7, 8]).map(function (ele) {
    return ele;
})));
function ReturnArrayElement(Parameter) {
    return Parameter[0];
}
console.log("So The Returned Array Element Is - ".concat(ReturnArrayElement([8, 65, 7, 8])));
