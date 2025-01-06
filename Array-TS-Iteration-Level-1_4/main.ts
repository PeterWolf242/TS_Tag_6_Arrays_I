const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];

const celsius = fahrenheit.map(f => (f - 32) / 1.8);

const celsiusRound = celsius.map(element => Math.round(element));


console.log(celsiusRound);