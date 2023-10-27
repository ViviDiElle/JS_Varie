// Challenge 1
// Log li with id special

let challenge1 = document.querySelector("ul li.country#special");
console.log(challenge1);

// Challenge 2
// Log all li with class of country

let challenge2 = document.querySelectorAll("ul li.country");

console.log(challenge2)

// Challenge 3
// Add class special to the li with id special

let challenge3 = document.querySelector("ul li.country#special");
challenge3.classList.add("special");

console.log(challenge3);

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)

let newCountry = document.querySelector("ul li.special#special");
newCountry.innerHTML = "United Kingdom💂";

console.log(newCountry);

