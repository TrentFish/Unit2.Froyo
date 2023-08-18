const flavorInput = prompt(
    "Please enter your flavors separated by commas",
    "vanilla,chocolate,etc..."
);

const flavorArr = flavorInput.split(",");
function getFlavors(){
    const flavorCount = { };
    for(let i = 0; i < flavorArr.length; i++){
        const flavor = flavorArr[i];
        if(flavorCount[flavor] === undefined){
            flavorCount[flavor] = 0;
        }
        flavorCount[flavor]++;
    }
    return flavorCount;
}

console.log(getFlavors(flavorInput));

