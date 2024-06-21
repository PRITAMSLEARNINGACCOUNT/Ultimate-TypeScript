class NormalClass {
  constructor(private Val_1: number, private Val_2: string) {}
}

function InstanceOfOperator(FirstParam?: number, SecondParam?: string): void {
  let ANormalVarriable: NormalClass | string;
  if (FirstParam !== undefined && SecondParam !== undefined) {
    ANormalVarriable = new NormalClass(20, "HELLO WORLD");
  } else {
    ANormalVarriable = "NOTHING IS HERE";
  }

  if (ANormalVarriable instanceof NormalClass) {
    console.log(`The Varriable Is An Instance Of A Class`);
  } else {
    console.log(`The Varriable Is Not An Instance Of A Class`);
  }
}
InstanceOfOperator(20, "Do it");

function InstanceOfOperator_2(SingularParameter: string): void {
  let ANormalVarriable: Date | string;
  if (SingularParameter === "") {
    ANormalVarriable = "This Is A Normal String";
  } else {
    ANormalVarriable = new Date(SingularParameter);
  }

  if (ANormalVarriable instanceof Date) {
    console.log(
      `The Varriable Is An Instance Of A Date Interface Which Looks Like - ${ANormalVarriable}`
    );
  } else {
    console.log(`The Varriable Is Not An Instance Of A Date Interface`);
  }
}

InstanceOfOperator_2("");
InstanceOfOperator_2("20/12/2024");


