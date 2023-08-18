const flavorInput = prompt(
    "Please enter your flavors separated by commas",
    "vanilla, chocolate, etc"
);

const flavorArr = flavorInput.split(",");
console.log(flavorArr);