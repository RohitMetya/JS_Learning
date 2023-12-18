const accountID = 1234567
let accountEmail = "rtyugh@gmail.com"
var accountPassword = "1234897"
accountCity = "Jaipur"

//not allowed accountID = 4
accountEmail = "aaaa@gmail.com"
accountPassword = "99999"
accountCity = "Nagpur"
console.table([accountEmail,accountPassword,accountCity]);
//always use const and let(block scope) in JS over var(functional scope)