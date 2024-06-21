function MoreOnTypes(AnyValue: "" | null | object | string): void {
  if (AnyValue !== null) {
    if (typeof AnyValue !== "object") {
      if (AnyValue !== "") {
        console.log(`The LoweCased String Is - ${AnyValue.toLowerCase()}`);
        return;
      }
      console.log(`The Parameter Is An Empty String`);
      return;
    } else if (typeof AnyValue === "object") {
      if (Array.isArray(AnyValue)) {
        console.log(`The Values Of The Array Is - `);
        for (const iterator of AnyValue) {
          console.log(iterator);
        }
        return;
      }
      console.log(
        `The Object Passed In The Parameter Is Not An Array But An Object`
      );

      return;
    }
  }
  console.log(`The Parameter Is Null`);
  return;
}

MoreOnTypes("HELLO WORLD");
MoreOnTypes(null);
MoreOnTypes("");
MoreOnTypes([20, 30]);
MoreOnTypes({ NAME: "PRITAM", Code: 152 });

interface Admin {
  IsAdmin: boolean;
  name: string;
  employee_id: number;
}
interface Employee {
  name: string;
  employee_id: number;
}

function CheeckEmployeeDetails(FuncParam: Admin | Employee): void {
  if ("IsAdmin" in FuncParam) {
    FuncParam.IsAdmin
      ? console.log(`Yes This Employee Is An Admin`)
      : console.log("No This Employee Is Not An Admin At All.");
  }
  console.log(`The name Of The Employee Is - ${FuncParam.name}`);
  console.log(`The ID Of The Employee Is - ${FuncParam.employee_id}`);
}

CheeckEmployeeDetails({
  IsAdmin: false,
  name: "Ex-Admin Gautam Gambhir",
  employee_id: 2004,
});
CheeckEmployeeDetails({
  IsAdmin: true,
  name: "Present Admin Pritamstech",
  employee_id: 2024,
});
CheeckEmployeeDetails({
  name: "Normal Employee Mutki",
  employee_id: 2005,
});
