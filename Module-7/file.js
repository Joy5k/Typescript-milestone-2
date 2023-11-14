const fs = require('fs');

const readText = fs.readFileSync("../Module-7/read.txt","utf-8")
console.log(readText);
const writeText = fs.writeFileSync("../Module-7/write.txt", readText + "Hi I am Mehedi Hasan")
console.log(writeText);