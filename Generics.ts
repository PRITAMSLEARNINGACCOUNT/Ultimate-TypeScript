function BasicGenerics<type>(params: type): type {
  return params;
}
function ShortcutGenerics<T>(params: T): T {
  return params;
}

console.log(
  `The Return Value Of A Basic Function Made Using Generics Is - ${BasicGenerics(
    10
  )}`
);
console.log(
  `Again The Return Value Of A Basic Function Made Using Generics Is - ${BasicGenerics(
    "This is the return value from the function"
  )}`
);
interface Generics {
  name: string;
  semester: number;
}
console.log(
  `So The Return Value Of A Basic Generic Function But Called With A Custom Data Type Is - ${
    BasicGenerics<Generics>({ name: "PRITAM", semester: 2 }).name
  } & ${BasicGenerics<Generics>({ name: "PRITAM", semester: 2 }).semester}`
);

console.log(
  `The Return Value Of A Shortcut Basic Function Made Using Generics Is - ${BasicGenerics(
    "HELLO WORLD"
  )}`
);
console.log(
  `Again The Return Value Of A Shortcut Basic Function Made Using Generics Is - ${BasicGenerics(
    200
  )}`
);
interface Generics {
  name: string;
  semester: number;
}
console.log(
  `Again The Return Value Of A Shortcut Basic Generic Function But Called With A Custom Data Type Is - ${
    BasicGenerics<Generics>({ name: "PRITAM", semester: 2 }).name
  } & ${BasicGenerics<Generics>({ name: "PRITAM", semester: 2 }).semester}`
);
