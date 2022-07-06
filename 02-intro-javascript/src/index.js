// Write a JavaScript program to get the sum of a given array, after mapping each element to a value using the provided function.

// Use Array.prototype.map() to map each element to the value returned by fn.
// Use Array.prototype.reduce() to add each value to an accumulator, initialized with a value of 0.

// Note: Write code on an initialized git repository

const numbers = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];

const calculateSum = () => {
    let res = 0;
    numbers.map( item => {
        // console.log(`Resultado ${res} + ${item}`);
        res = res + item;
        // console.log(`Resultado: ${res}` );
    });
    return res;
}

// Map
console.log("Resultado:" + calculateSum());

// Reduce
console.log("Resultado:" + numbers.reduce((res, item) => res + item));