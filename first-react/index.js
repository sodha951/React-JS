

function addTwoNumbersTogether  () {
  return 3 + 2
}

console.log(addTwoNumbersTogether());

function addTwoNumberTogether (a,b) {
  return a + b
}

console.log(addTwoNumberTogether(5,9));

/* Challenge 1:
Given an array of numbers, return an array of each number, squared */
const nums = [1,2,3,4,5]
const squared = nums.map((num) => {
  return num * num;
})
console.log(`Number of square is:`,squared);


/* Challenge 1:
Given an array of strings, return an array where the first letter of each string iss capitalized */
const names = ["alice", "bob", "charlie", "danielle"]
const capitalized = names.map((name) => {
  return name[0].toUpperCase() + name.slice(1)
})
console.log(capitalized);

/* Challenge 1:
Given an array of strings, return an array of strings that wraps each of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
*/
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const paragraphs = pokemon.map((mon) => {
    return `<p>${mon}</p>`
})
console.log(paragraphs);



