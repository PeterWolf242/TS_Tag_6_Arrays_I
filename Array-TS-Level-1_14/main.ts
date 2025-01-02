const oldHollywoodActors: string[] = ["Marlon Brando", "Audrey Hepburn", "Elizabeth Taylor", "Cary Grant", "Paul Newman", "Doris Day"];

console.log(oldHollywoodActors);

const actorsReference = oldHollywoodActors;

actorsReference.push("Marilyn Monroe");
console.log(actorsReference);

const neuActors = oldHollywoodActors.concat();
console.log(neuActors);

neuActors[2] = "Bruce Springsten";
console.log(neuActors);

const neuActors2 = oldHollywoodActors.slice();
console.log(neuActors2);
neuActors2[0] = "Tommy Lee Jones";
console.log(neuActors2);

const neuActors3 = [...oldHollywoodActors];
console.log(neuActors3);
neuActors3[4] = "Bruce Lee";
console.log(neuActors3);






