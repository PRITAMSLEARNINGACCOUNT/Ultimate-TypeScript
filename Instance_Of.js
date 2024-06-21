var NormalClass = /** @class */ (function () {
    function NormalClass(Val_1, Val_2) {
        this.Val_1 = Val_1;
        this.Val_2 = Val_2;
    }
    return NormalClass;
}());
function InstanceOfOperator(FirstParam, SecondParam) {
    var ANormalVarriable;
    if (FirstParam !== undefined && SecondParam !== undefined) {
        ANormalVarriable = new NormalClass(20, "HELLO WORLD");
    }
    else {
        ANormalVarriable = "NOTHING IS HERE";
    }
    if (ANormalVarriable instanceof NormalClass) {
        console.log("The Varriable Is An Instance Of A Class");
    }
    else {
        console.log("The Varriable Is Not An Instance Of A Class");
    }
}
InstanceOfOperator(20, "Do it");
function InstanceOfOperator_2(SingularParameter) {
    var ANormalVarriable;
    if (SingularParameter === "") {
        ANormalVarriable = "This Is A Normal String";
    }
    else {
        ANormalVarriable = new Date(SingularParameter);
    }
    if (ANormalVarriable instanceof Date) {
        console.log("The Varriable Is An Instance Of A Date Interface Which Looks Like - ".concat(ANormalVarriable));
    }
    else {
        console.log("The Varriable Is Not An Instance Of A Date Interface");
    }
}
InstanceOfOperator_2("");
InstanceOfOperator_2("20/12/2024");
