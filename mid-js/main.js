function makeCounter() {
    let count = 0;

    return function() {
        return count++; // есть доступ к внешней переменной "count"
    };
}

/*
let counter = makeCounter();
let counter2 = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

console.log(counter2());
console.log(counter2());
console.log(counter2());
*/

export function pow(x, n) {
    if(n === 0) {
        return 1
    }

    return x * pow(x, n - 1);
}

