import { readFileSync } from "fs";

export function getInput(file: string) {
    return readFileSync(file, "utf-8");
}

export function getFoodItems(input: string) {
    return input.split("\n").map((item) => parseInt(item));
}

function countCalories(foodItems: number[]) {
    let calories = 0;
    let mostCalories = 0;
    foodItems.forEach((foodItem) => {
        if (!foodItem) {
            mostCalories = Math.max(mostCalories, calories);
            calories = 0;
        } else {
            calories += foodItem;
        }
    });

    return mostCalories;
}

export function part1(file: string) {
    const input = getInput(file);
    const foodItems = getFoodItems(input);

    return countCalories(foodItems);
}
