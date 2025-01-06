const string: string = "Peter Piper picked a peck of pickled peppers. How many pickled peppers did Peter Piper pick?";

const searchString = string.includes("Piper");
console.log(searchString);

const searchString1 = string.includes("piper");
console.log(searchString1);

const lowerString = string.toLowerCase();

const searchString2 = lowerString.includes("piper");
console.log(searchString2);

const searchString3 = string.includes("peck", 0);
console.log(searchString3);

const searchString4 = string.includes("peck", string.length);
console.log(searchString4);