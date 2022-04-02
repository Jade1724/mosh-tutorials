// const fish = {
//     species: 'salmon',
//     isEdible: true,
//     cook() {
//         console.log('Slamon grilled in an oven');
//     }
// }

// fish.cook();


// const createFish = function () {
//     return {
//         species: 'salmon',
//         isEdible: true,
//         cook() {
//             console.log('Slamon grilled in an oven');
//         }
//     };
// };

const circle = {
    radius: 1
}

const another = {color: 'red', ...circle};

const yetAnother = {isPizza: true, ...another, ...circle};
console.log(yetAnother);