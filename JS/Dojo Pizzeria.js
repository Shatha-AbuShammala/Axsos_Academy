function pizzaOven(crust, sauce, cheese, toppings) {
  return { crust, sauce, cheese, toppings };
}
let pizza1 = pizzaOven(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);

let pizza2 = pizzaOven(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);

// Two additional pizzas
let pizza3 = pizzaOven(
  "hand tossed",
  "Ransh",
  ["cheddar"],
  ["chicken", "spinach"]
);

let pizza4 = pizzaOven(
  "stuffed crust",
  "chedar",
  ["mozzarella"],
  ["beef", "jalapeno", "corn"]
);

// Bonus random pizza generator
function randomPizza() {
  let crusts = ["deep dish", "thin crust", "hand tossed", "stuffed crust"];
  let sauces = ["traditional", "marinara", "alfredo", "Ranch"];
  let cheeses = ["mozzarella", "cheddar", "feta", "parmesan"];
  let toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "chicken"];

  function randomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return pizzaOven(
    randomItem(crusts),
    randomItem(sauces),
    [randomItem(cheeses), randomItem(cheeses)],
    [randomItem(toppings), randomItem(toppings), randomItem(toppings)]
  );
}

console.log(pizza1);
console.log(pizza2);
console.log(pizza3);
console.log(pizza4);
console.log(randomPizza());