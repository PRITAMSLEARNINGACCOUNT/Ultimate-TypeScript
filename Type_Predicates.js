function isFish(pet) {
    if (pet.swim !== undefined) {
        return true;
    }
    return false;
}
function getSmallPet(Parameter) {
    if (Parameter === "BIRD") {
        return {
            fly: function () { },
        };
    }
    return {
        swim: function () { },
    };
}
// Both calls to 'swim' and 'fly' are now okay.
var pet = getSmallPet("BIRD");
if (isFish(pet)) {
    console.log("Hello I Am A Fish And I Can't Fly Like A Bird But Surely I Can Swim.");
    pet.swim();
}
else {
    console.log("Hello I Am A Bird And I Can't Swim Like A Fish But Surely I Can Fly.");
    pet.fly();
}
