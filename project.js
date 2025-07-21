// Task 1
myCities = ["Kansas City", "Chicago", "New York", "Los Angeles", "Las Vegas"];

myCities.forEach((city, index) => {
  console.log(`City at index ${index}: ${city.toUpperCase()}`);
});

// Task 2
let numbers = [1, 2, 3, 4, 5];
let newSquared = numbers.map(num => num ** 2);
console.log(newSquared);

// Task 3 
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(num => num >= 80);
console.log(highScores);

// Task 4 
let favoriteFood = ["Croissant", "Pizza", "Cake", "Salad", "Burgers"];
let firstWordFour = favoriteFood.find(favoriteFood => favoriteFood.length >= 4);
console.log(firstWordFour);