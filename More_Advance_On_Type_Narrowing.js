function TypeNarrowing(Parameter) {
    if (Parameter.Property === "Coder") {
        console.log("".concat(Parameter.name, " Is A Coder Who Knows ").concat(Parameter.No_Of_Languages).concat(Parameter.IsEstablished
            ? " And Is Established"
            : " And Is Not Established Yet"));
        return;
    }
    console.log("".concat(Parameter.name, " Is A ").concat(Parameter.Property, " Who Knows ").concat(Parameter.No_Of_Languages));
    return;
}
function TypeNarrowing_2_Using_Switch_Case(Parameter) {
    switch (Parameter.Property) {
        case "Coder":
            console.log("".concat(Parameter.name, " Is A Coder Who Knows ").concat(Parameter.No_Of_Languages).concat(Parameter.IsEstablished
                ? " And Is Established"
                : " And Is Not Established Yet"));
            return;
        case "Professor":
            console.log("".concat(Parameter.name, " Is A ").concat(Parameter.Property, " Who Knows ").concat(Parameter.No_Of_Languages));
            return;
        default:
            var _exhaustiveCheck = Parameter;
            return _exhaustiveCheck;
    }
}
TypeNarrowing({
    Property: "Professor",
    name: "Suparna Sarkar",
    No_Of_Languages: 2,
});
TypeNarrowing_2_Using_Switch_Case({
    Property: "Coder",
    name: "PRITAMSTECH",
    No_Of_Languages: 5,
    IsEstablished: false,
});
