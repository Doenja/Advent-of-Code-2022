
import { part2 } from "./dec2/part2";

const expected = 12;
const output = part2("input/dec2-test.txt");

if (output === expected) {
    console.log("Test for part 2 is a success!");
} else {
    console.group();
    console.log("Test for part 2 failed");
    console.log("Expected: " + 12 + ", Output: " + output);
    console.groupEnd();
}
