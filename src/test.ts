
import { part1 } from "./dec3/part1";

const expected = 157;
const output = part1("input/dec3-test.txt");

if (output === expected) {
    console.log("Test for part 1 is a success!");
} else {
    console.group();
    console.log("Test for part 1 failed");
    console.log("Expected: " + expected + ", Output: " + output);
    console.groupEnd();
}
