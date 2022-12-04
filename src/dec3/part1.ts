import { readFileSync } from "fs";

export function getInput(file: string) {
    return readFileSync(file, "utf-8");
}

export function getRucksacks(input: string) {
    const lines = input.split("\n");
    const rucksacks: string[][] = [];
    lines.forEach((line) => {
        const compartment1 = line.slice(0, line.length / 2);
        const compartment2 = line.slice(line.length / 2);
        rucksacks.push([compartment1, compartment2]);
    });
    return rucksacks;
}

export function getMatches(rucksacks: string[][]) {
    const matches: string[] = [];
    rucksacks.forEach((rucksack) => {
        for (const item of rucksack[0]) {
            if (rucksack[1].includes(item)) {
                matches.push(item);
                break;
            }
        }
    });
    return matches;
}

export function getPriorities(matches: string[]) {
    return matches.map((item) => {
        let nr = item.charCodeAt(0);

        if (item === item.toLowerCase()) {
            nr -= 96;
        } else {
            nr -= 38;
        }
        return nr;
    });
}

export function sum(priorites: number[]) {
    return priorites.reduce((cur, acc) => cur + acc);
}

export function part1(file: string) {
    const input = getInput(file);
    const rucksacks = getRucksacks(input);
    const matches = getMatches(rucksacks);
    const priorites = getPriorities(matches);

    return sum(priorites);
}
