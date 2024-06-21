"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ToughToUnderstand = /** @class */ (function () {
    function ToughToUnderstand(value, add) {
        this.value = value;
        this.add = add;
    }
    return ToughToUnderstand;
}());
var ToughVarriable = new ToughToUnderstand(0, function (x, y) {
    return x + y;
});
ToughVarriable.value = 20;
console.log("The Value Returned From The Function Defined Under The Class Is - ".concat(ToughVarriable.add(20, 30)));
console.log("And Also The Value Of A Varriable Under That Same Class Is - ".concat(ToughVarriable.value));
