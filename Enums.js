var Choices;
(function (Choices) {
    Choices["Understanding"] = "Manageble But Has To Be Properly Managed";
    Choices["Cooperation"] = "Also Manageble But Has To Be Properly Managed";
    Choices["Complete_Detachment"] = "Must Needed To Be Done";
    Choices["In_A_Relationship"] = "Must Needed To Be Done";
})(Choices || (Choices = {}));
var Choices_2;
(function (Choices_2) {
    Choices_2[Choices_2["Understanding"] = 0] = "Understanding";
    Choices_2[Choices_2["Cooperation"] = 1] = "Cooperation";
    Choices_2[Choices_2["Complete_Detachment"] = 2] = "Complete_Detachment";
    Choices_2[Choices_2["In_A_Relationship"] = 3] = "In_A_Relationship";
})(Choices_2 || (Choices_2 = {}));
var TemporarySelectedChoice = Choices.Complete_Detachment;
console.log("So You Chosed ".concat(TemporarySelectedChoice));
var TemporarySelectedChoice_2 = Choices_2.Understanding;
console.log("And Now You Chosed A Different Value From A Different Choices ".concat(TemporarySelectedChoice_2));
