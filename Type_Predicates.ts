interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  if ((pet as Fish).swim !== undefined) {
    return true;
  }
  return false;
}
function getSmallPet(Parameter: "FISH" | "BIRD"): Fish | Bird {
  if (Parameter === "BIRD") {
    return {
      fly() {},
    };
  }
  return {
    swim() {},
  };
}

// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet("BIRD");

if (isFish(pet)) {
  console.log(
    "Hello I Am A Fish And I Can't Fly Like A Bird But Surely I Can Swim."
  );

  pet.swim();
} else {
  console.log(
    "Hello I Am A Bird And I Can't Swim Like A Fish But Surely I Can Fly."
  );
  pet.fly();
}
