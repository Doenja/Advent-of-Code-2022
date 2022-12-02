const fs = require("fs");
const prompt = require("prompt-sync")();

const day = prompt("What day is it? ");
const part = prompt("Which part? ");
const expected = prompt("What is the expected test output? ");

const testTemplate = `
import { part${part} } from "./${day}/part${part}";

const expected = ${expected};
const output = part${part}("input/${day}-test.txt");

if (output === expected) {
    console.log("Test for part ${part} is a success!");
} else {
    console.group();
    console.log("Test for part ${part} failed");
    console.log("Expected: " + ${expected} + ", Output: " + output);
    console.groupEnd();
}
`;

const solveTemplate = `
import { part${part} } from "./${day}/part${part}";

const output = part${part}("input/${day}.txt");
console.log('The answer to part ${part} is ' + output);
`;

fs.writeFileSync("./src/test.ts", testTemplate);
fs.writeFileSync("./src/solve.ts", solveTemplate);
