interface FirstInterface {
  Property: "Coder"; // Discriminated Union
  name: string;
  No_Of_Languages: number;
  IsEstablished: boolean;
}
interface SecondInterface {
  Property: "Professor"; // Discriminated Union
  name: string;
  No_Of_Languages: number;
}
interface OptionalInterface {
  Property: "NormalPerson"; // Discriminated Union
  name: string;
  Background: string;
}

// type MixtureInterface = FirstInterface | SecondInterface | OptionalInterface; ---> This is for exhaustive checking with never
type MixtureInterface = FirstInterface | SecondInterface;

function TypeNarrowing(Parameter: MixtureInterface): void {
  if (Parameter.Property === "Coder") {
    console.log(
      `${Parameter.name} Is A Coder Who Knows ${Parameter.No_Of_Languages}${
        Parameter.IsEstablished
          ? " And Is Established"
          : " And Is Not Established Yet"
      }`
    );
    return;
  }
  console.log(
    `${Parameter.name} Is A ${Parameter.Property} Who Knows ${Parameter.No_Of_Languages}`
  );
  return;
}

function TypeNarrowing_2_Using_Switch_Case(Parameter: MixtureInterface): void {
  switch (Parameter.Property) {
    case "Coder":
      console.log(
        `${Parameter.name} Is A Coder Who Knows ${Parameter.No_Of_Languages}${
          Parameter.IsEstablished
            ? " And Is Established"
            : " And Is Not Established Yet"
        }`
      );
      return;
    case "Professor":
      console.log(
        `${Parameter.name} Is A ${Parameter.Property} Who Knows ${Parameter.No_Of_Languages}`
      );
      return;

    default:
      const _exhaustiveCheck: never = Parameter;
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
