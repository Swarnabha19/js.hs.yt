// const score = 400


// const balance = new Number(100)
// const number = new String(200)

// const stringname = new Number("rini")

// console.log(score);
// console.log(stringname);
// console.log(number);
// console.log(balance);

// console.log(typeof stringname);
// console.log(typeof balance);


// console.log(balance.toString().length);

// console.log(typeof balance);

// console.log(balance.toFixed(2)); // decimal upto how many terms

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(6)); //gives precise value

// const hundreds = 100000000
// console.log(hundreds.toLocaleString()); // empty bracket defaults to us standard 100,000

// console.log(hundreds.toLocaleString("en-IN")); // US TO INDIA  

// console.log(balance.valueOf());

//****************************************************  MATHS FUNCTION *********************

console.log(Math);

// console.log(Math.abs(-4)); // absolute value = 4
// console.log(Math.round(4.5)); // 5
// console.log(Math.round(4.4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.ceil(4.2)); //ceiling value=5
// console.log(Math.floor(4.6)); // floor value =4

// console.table([Math.abs(-4),Math.round(4.5),Math.round(4.3),Math.ceil(4.2), Math.floor(4.8)]);

// console.log(Math.min(54,67,3,89,10)); // returns min value in an array

// console.log(Math.max(34,100,588,434,133)); // return max in array


//console.log(Math.random()); // lies between 0 and 1


//console.log(Math.random()*10); //// random value will be shifted to one decimal place


// console.log((Math.random()*10) +1); // random value will be shifted to two  decimal place and to avoid zero  range between 1 and 9

console.log(Math.floor(Math.random()*10) +1); // floor value to get integer between 1 and 9

const min = 10
const max = 20

console.log(Math.random() * (max- min + 1) + min) // between 10 and 20

console.log(Math.floor(Math.random() * (max- min + 1) + min));




