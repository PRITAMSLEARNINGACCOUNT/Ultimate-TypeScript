let Any_Value: any = "Anything Can Be Stored";
Any_Value = 90;
let StoreAnything;
StoreAnything = "This is already is type of any";
console.log(`Before Changing The Value ${StoreAnything}`);
StoreAnything = false;
console.log(`After Changing The Value ${StoreAnything}`);

console.log(`This is an value with explicitly declared any type ${Any_Value}`);

export {};
