import { getGames, getInput, pointsWon, shapes } from "./part1";

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

function whatDoIPlay(move: "X" | "Y" | "Z", opponents: number) {
    let yours = 0;

    if (move === "X") {
        // you need to lose
        yours = opponents === 1 ? 3 : opponents - 1;
    } else if (move === "Y") {
        // you need a draw
        yours = opponents;
    } else if (move === "Z") {
        // you need to win
        yours = opponents === 3 ? 1 : opponents + 1;
    }

    return yours;
}

export function playGames(games: string[]) {
    let total = 0;
    games.forEach((game) => {
        const split = game.split(" ");
        const opponents = split[0] as "A" | "B" | "C";
        const move = split[1] as "X" | "Y" | "Z";

        const yours = whatDoIPlay(move, shapes[opponents]);
        total += pointsWon(shapes[opponents], yours);
    });

    return total;
}

export function part2(file: string) {
    const input = getInput(file);
    const games = getGames(input);
    const total = playGames(games);
    return total;
}
