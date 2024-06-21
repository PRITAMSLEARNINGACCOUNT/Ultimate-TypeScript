// let TestArray: number[] | string[];
// TestArray = [20, 304];
// console.log(typeof TestArray);

function ShortcutGenerics<T>(params: T): number | T {
  if (typeof params === "number") {
    return params + params;
  }
  return params;
}
