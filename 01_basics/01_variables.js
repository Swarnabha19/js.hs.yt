const accountId = 144553
let accountEmail = "swarnabha@gmail.com"
var accountPassword = "12345"
accountCity = "kolkata"
let accountState;

// accountId = 2 //not allowed

accountEmail = "ss@gmail.com"
accountPassword = "1902"
accountCity = "delhi"

/*
prefer not to use var datatype because of issue in block and fumctional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])