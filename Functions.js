"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Basic_Func(FirstParam) {
    return FirstParam + 80;
}
console.log("Output Of A Basic Function Is ".concat(Basic_Func(20)));
function Basic_Func_2(FirstParam, SecondParam, ThirdParam) {
    console.log("This is under a basic function which takes different types of input and displays them into different lines");
    console.log(FirstParam);
    console.log(SecondParam);
    console.log(ThirdParam);
}
Basic_Func_2(20, "This is a string", true);
var BasicArrowFunc = function (FirstParam) {
    console.log("So The String Value From The Parameter Of This Function Is ".concat(FirstParam));
};
BasicArrowFunc("My Name Is Pritam Saha");
var BasicArrowFunc_2 = function (FirstParam, SecondParam, ThirdParam) {
    console.log("The Different Values From The Parameter Of This Function Is - ".concat(FirstParam, " , ").concat(SecondParam, " , ").concat(ThirdParam));
};
BasicArrowFunc_2("HELLO WORLD", 40, false);
function AdvanceFunc(AdvanceParam) {
    return AdvanceParam + 200;
}
console.log("This is the return value of the advance function ".concat(AdvanceFunc(2)));
function AdvanceFunc_2(FirstParam, SecondParam, ThirdParam) {
    console.log("The First And Third Parameter Of This Function Is ".concat(FirstParam, " & ").concat(ThirdParam));
    return SecondParam;
}
console.log("The Return Value Of The Advance Function 2 Is ".concat(AdvanceFunc_2(20, "Pritam", false)));
var AdvanceArrowFunction = function (FirstParam) {
    return "The Value Of The Parameter Of This Function Is " + FirstParam;
};
console.log("So The Output Of The Advance Arrow Function Is ".concat(AdvanceArrowFunction("Hello Guy's I Am Finally Writing Some Code In TypeScript By Learning It.")));
var AdvanceArrowFunction_2 = function (FirstParam, SecondParam, ThirdParam) {
    console.log("The First And Second Parameter Of This Function Is ".concat(FirstParam, " & ").concat(SecondParam));
    return ThirdParam;
};
console.log("The Return Value Of Advanced Arrow Function 2 Is ".concat(AdvanceArrowFunction_2("Hey This Is TypeScript", 200, false)));
var LastArrowFunction = function (CompulsoryParam, OptionalParam) {
    if (OptionalParam === void 0) { OptionalParam = ""; }
    if (OptionalParam === "") {
        console.log("The Compulsory Parameteer Is ".concat(CompulsoryParam, " & The Optional Parameter(Default) Is ").concat(OptionalParam));
    }
    else {
        console.log("The Compulsory Parameteer Is ".concat(CompulsoryParam, " & The Optional Parameter(Passed To The Function) Is ").concat(OptionalParam));
    }
};
LastArrowFunction(20);
LastArrowFunction(20, "Hehe hihi haha");
function LastFunction(Compulsory_Parameter, Optional_Parameter) {
    if (Optional_Parameter === void 0) { Optional_Parameter = false; }
    if (Optional_Parameter) {
        return ("Optional Parameter Is Passed Which Is A Boolean & On Top Of That Which Is True" +
            " But The Compulsory Parameter Is " +
            Compulsory_Parameter);
    }
    else {
        return ("Optional Parameter Is Not Passed" +
            " But The Compulsory Parameter Is " +
            Compulsory_Parameter);
    }
}
console.log("The Return Value Of The Last Function Is(Without Passing Optional Parameter) - ".concat(LastFunction("You Are A Programmer")));
console.log("The Return Value Of The Last Function Is(With Passing Optional Parameter) - ".concat(LastFunction("You Are A Learner", true)));
function ThrowError(ErrorMSG) {
    throw Error(ErrorMSG);
}
ThrowError("Intensionaly Thrown Error");
