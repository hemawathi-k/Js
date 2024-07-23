let number = 200;

let category = number < 0 ? "negative" :
               number === 0 ? "zero" :
               number >= 1 && number <= 10 ? "small" :
               number >= 11 && number <= 100 ? "medium" :
               "large";

console.log("The number is categorized as ",category);
