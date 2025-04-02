const accountId = 144553
let accountEmail = "shobhit@gmail.com"
var accountPass = "1234"
accountCity = "Ghaziabad"
let accountState;

// accountId = 2 Not allowed
accountEmail = "tissue@gmail.com"
accountPass = "4321"
accountCity = "Pune"
console.table([accountEmail,accountId,accountPass,accountCity,accountState]);

/*
Prefer not to use VAR because of issue on the block scope and functional scope.
*/