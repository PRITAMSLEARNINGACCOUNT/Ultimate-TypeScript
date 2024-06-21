enum Choices {
  Understanding = "Manageble But Has To Be Properly Managed",
  Cooperation = "Also Manageble But Has To Be Properly Managed",
  Complete_Detachment = "Must Needed To Be Done",
  In_A_Relationship = "Must Needed To Be Done",
}
enum Choices_2 {
  Understanding,
  Cooperation,
  Complete_Detachment,
  In_A_Relationship,
}

const TemporarySelectedChoice = Choices.Complete_Detachment;
console.log(`So You Chosed ${TemporarySelectedChoice}`);
const TemporarySelectedChoice_2 = Choices_2.Understanding;
console.log(
  `And Now You Chosed A Different Value From A Different Choices ${TemporarySelectedChoice_2}`
);
