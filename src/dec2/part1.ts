import { readFileSync } from "fs";

export const shapes = {
    X: 1, // Rock
    Y: 2, // Paper
    Z: 3, // Scissors
    A: 1, // Rock
    B: 2, // Paper
    C: 3, // Scissors
};

/*
 * When do you win?
 * X (1) beats C (3)    Rock beats Scissors
 * Y (2) beats A (1)    Paper beats Rock
 * Z (3) beats B (2)    Scissors beats Paper
 *
 * When do you lose?
 * A (1) beats Z (3)    Rock beats Scissors
 * B (2) beats X (1)    Paper beats Rock
 * C (3) beats Y (2)    Scissors beats Paper
 */

export function getInput(file: string) {
    return readFileSync(file, "utf-8");
}

export function getGames(input: string) {
    return input.split(/[\n]+/);
}

export function pointsWon(opponents: number, yours: number) {
    let score = yours;

    if (opponents === yours) {
        score += 3; // draw
    } else if (yours === 1 && opponents === 3) {
        score += 6; // you win
    } else if (yours === opponents + 1) {
        score += 6; // you win
    }

    return score;
}

export function playGames(games: string[]) {
    let total = 0;
    games.forEach((game) => {
        const split = game.split(" ");
        const opponents = split[0] as "A" | "B" | "C";
        const yours = split[1] as "X" | "Y" | "Z";

        total += pointsWon(shapes[opponents], shapes[yours]);
    });

    return total;
}

export function part1(file: string) {
    const input = getInput(file);
    const games = getGames(input);
    const total = playGames(games);

    return total;
}
