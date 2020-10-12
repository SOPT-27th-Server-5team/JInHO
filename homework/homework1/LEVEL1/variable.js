// 재선언

var variableVar = "123";
var variableVar = "321";

console.log(`variableVar : ${variableVar}`);

let variableLet = "123";
let variableLet = "321";

console.log(`variableLet : ${variableLet}`);
// SyntaxError: Identifier 'variableLet' has already been declared

const variableConst = "123";
const variableConst = "321";

console.log(`variableConst : ${variableConst}`);
//SyntaxError: Identifier 'variableConst' has already been declared


// 재할당

var variableVar = "123";
variableVar = "321";

console.log(`variableVar : ${variableVar}`);

let variableLet = "123";
variableLet = "321";

console.log(`variableLet : ${variableLet}`);

const variableConst= "123";
variableConst = "321";

console.log(`variableConst : ${variableConst}`);
// Uncaught TypeError: Assignment to constant variable.