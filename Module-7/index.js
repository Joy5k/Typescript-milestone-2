
const {add,a} = require("./local-1")
const {add:add2,a:a2} = require("./local-2")
console.log(add(10, 12));
console.log(add2(10, 12,12));

//built-in modules
const path = require("path");

console.log(path.join("F:/LEVE_2/TypeScript/Milestone-2/Module-7","/index.js"));