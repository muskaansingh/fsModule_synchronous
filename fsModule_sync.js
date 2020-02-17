const fs = require("fs");
const FileName = "target.txt";

const data = fs.readFileSync(FileName);

console.log(data.toString()); //first this method executes

console.log("Nodejs is not a Synchronous programming");