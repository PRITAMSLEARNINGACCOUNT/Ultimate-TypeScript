function BasicGenerics(params) {
    return params;
}
function ShortcutGenerics(params) {
    return params;
}
console.log("The Return Value Of A Basic Function Made Using Generics Is - ".concat(BasicGenerics(10)));
console.log("Again The Return Value Of A Basic Function Made Using Generics Is - ".concat(BasicGenerics("This is the return value from the function")));
console.log("So The Return Value Of A Basic Generic Function But Called With A Custom Data Type Is - ".concat(BasicGenerics({ name: "PRITAM", semester: 2 }).name, " & ").concat(BasicGenerics({ name: "PRITAM", semester: 2 }).semester));
console.log("The Return Value Of A Shortcut Basic Function Made Using Generics Is - ".concat(BasicGenerics("HELLO WORLD")));
console.log("Again The Return Value Of A Shortcut Basic Function Made Using Generics Is - ".concat(BasicGenerics(200)));
console.log("Again The Return Value Of A Shortcut Basic Generic Function But Called With A Custom Data Type Is - ".concat(BasicGenerics({ name: "PRITAM", semester: 2 }).name, " & ").concat(BasicGenerics({ name: "PRITAM", semester: 2 }).semester));
