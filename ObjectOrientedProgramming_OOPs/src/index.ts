class BasicClass {
  name: string;
  code: number;
  constructor(name: string, code: number) {
    this.code = code;
    this.name = name;
  }
}

let ObjBasicClass = new BasicClass("PRITAM SAHA", 152);
console.log(ObjBasicClass);

class PublicPrivate {
  private Badhabit: string;
  public name: string;
  public code: number;
  private isSmoker: boolean;
  constructor(BH: string, name: string, code: number, IS: boolean) {
    this.Badhabit = BH;
    this.name = name;
    this.code = code;
    this.isSmoker = IS;
  }
}

let ObjPublicPrivate = new PublicPrivate(
  "Always In Front Of A Computer Screen",
  "PRITAM SAHA",
  152,
  false
);
console.log(ObjPublicPrivate);
// console.log(ObjPublicPrivate.Badhabit); --->Private Members Of A Class Can't Be Accessed From Outside

class Shortcurt {
  constructor(
    private Badhabit: string,
    public name: string,
    public code: number,
    private isSmoker: boolean
  ) {}
}

let ObjShortcurt = new Shortcurt(
  "Always In Front Of A Computer Screen",
  "PRITAM SAHA",
  152,
  false
);
console.log(ObjShortcurt);

class GetterSetter {
  constructor(
    private Badhabit: string,
    public name: string,
    public code: number,
    private isSmoker: boolean
  ) {}
  get BH(): string {
    return this.Badhabit;
  }
  set BH(ParamBH: string) {
    this.Badhabit = ParamBH;
  }
}

let GetterSetterObj = new GetterSetter(
  "Always In Front Of A Computer Screen",
  "PRITAM SAHA",
  152,
  false
);

console.log(GetterSetterObj);
console.log(GetterSetterObj.BH);
GetterSetterObj.BH = "Bad Guy";
console.log(GetterSetterObj.BH);

class PrivateMethod {
  constructor(
    private Badhabit: string,
    public name: string,
    public code: number,
    private isSmoker: boolean
  ) {}
  private Method(Badhabit: string): void {
    this.isSmoker = true;
    this.Badhabit = Badhabit;
  }
  ChangeBadHabit(badhabitBH: string): boolean {
    this.Method(badhabitBH);
    return this.isSmoker;
  }
}

let PrivateMethodObj = new PrivateMethod(
  "Always In Front Of A Computer Screen",
  "PRITAM SAHA",
  152,
  false
);

console.log(PrivateMethodObj);
console.log(
  `He Is A Smoker - ${PrivateMethodObj.ChangeBadHabit("Stalking Girl's")}`
);
class ProtectedWithInheritance {
  constructor(
    protected Badhabit: string,
    public name: string,
    public code: number,
    private isSmoker: boolean
  ) {}
}
class InheritedClassWithProtectedMember extends ProtectedWithInheritance {
  changeProtected(BH: string): string {
    this.Badhabit = BH;
    return this.Badhabit;
  }
}

let ProtectedWithInheritenceObj = new InheritedClassWithProtectedMember(
  "Always In Front Of A Computer Screen",
  "PRITAM SAHA",
  152,
  false
);
console.log(ProtectedWithInheritenceObj);
console.log(
  `The Value Of Changed Protected Member - ${ProtectedWithInheritenceObj.changeProtected(
    "This is just a bad habit nothing else"
  )}`
);
