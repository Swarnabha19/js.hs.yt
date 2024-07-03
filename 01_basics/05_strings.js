const name = "tojo"
const repoCount = 50
console.log(name + repoCount + " value"); // backdated method

console.log(`hello my name is is ${name} and my repo count is ${repoCount}`); //string interpolation and making place holders

const gameName = new String("swarnabha") // new keyword object use korchhi ar constructor er modhye string

console.log(gameName);

//********************************* STRING METHODS*******************************

console.log(gameName[5]);
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf("n"));

const newString = gameName.substring(0, 4) // we cannot give negetive value

console.log(newString);

const anotherString = gameName.slice(-8, 4)

console.log(anotherString);