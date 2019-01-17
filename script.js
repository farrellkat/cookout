const hamburger = {
    name: 'Hamburger',
    type: 'beef',
    cooked: false,
}
const zucchini = {
    name: 'Zucchini',
    type: 'vegetable',
    cooked: false,
}
const chickenBreast = {
    name: 'Chicken Breast',
    type: 'chicken',
    cooked: false,
}
const corn = {
    name: 'Corn',
    type: 'vegetable',
    cooked: false,
}
const steak = {
    name: 'Steak',
    type: 'beef',
    cooked: false,
}

// A first array containing the objects to be cooked.
const uncookedFood = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

/* to cook one at a time */

// let currentObject = uncookedFood[0]
// console.log(currentObject)
// function grill (currentObject) {
//     currentObject.cooked = true;
//     cookedFood.push(currentObject);
// };

// grill (hamburger);
// grill (steak);
// console.log(cookedFood)


// To autocook everything
// for (let i = 0; i < uncookedFood.length; i++) {
//    currentObject = uncookedFood[i]
//    currentObject.cooked = true
//    cookedFood.push(currentObject)
// }
// console.log(cookedFood)

// To autocook everything

function grill(currentObject) {
    currentObject.cooked = true
    cookedFood.push(currentObject)
}

for (let i = 0; i < uncookedFood.length; i++) {
    currentObject = uncookedFood[i]
    grill (currentObject)
}
console.log(cookedFood)
