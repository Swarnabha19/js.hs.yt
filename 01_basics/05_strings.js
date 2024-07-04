const name = "tojo"
console.log(typeof name);
const repoCount = 50
console.log(name + repoCount + " value"); // backdated method

console.log(`hello my name is is ${name} and my repo count is ${repoCount}`); //string interpolation and making place holders

const gameName = new String("swarnabha") // new keyword object use korchhi ar constructor er modhye string

console.log(gameName);
console.log(typeof gameName); // string is declared as object 

//********************************* STRING METHODS*******************************

console.log(gameName[5]);
console.log(gameName.__proto__);


console.log(gameName.length);

console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));

console.log(gameName.indexOf("n"));

const newString = gameName.substring(1,5) // we cannot give negetive value
console.log(newString)

console.log(gameName.substring(5,8)); // another method

const anotherString = gameName.slice(-8, 4)


console.log(anotherString);

const newStringOne = "    sarker    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://swarnabha.com/tojo%20sarker"

console.log(url.replace("%20" , "-")) // want to replace %20 with "-""

console.log(url.includes("tojo")) // check weather tojo is present or not

const username = new String("tuli- sarker-female")
console.log(username.split("-"));

const x = new String("rini  sarker")
console.log(x.split(" "));




