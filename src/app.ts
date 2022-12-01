import { part1 } from "./dec1/part1";
import { part2 } from "./dec1/part2";

const day = "dec1";
const testOutput = {
    part1: 0,
    part2: 0,
};
const output = {
    part1: part1(`input/${day}-test.txt`),
    part2: part2(`input/${day}-test.txt`),
};

console.log("Test 1 is", output.part1 === testOutput.part1 ? "a success!" : `failing with value ${output.part1}`);
console.log("The a nswer to part 1 is", part1(`input/${day}.txt`));

console.log("Test 2 is", output.part2 === testOutput.part2 ? "a success!" : `failing with value ${output.part2}`);
console.log("The answer to part 2 is", part2(`input/${day}.txt`));
