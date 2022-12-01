import { getFoodItems, getInput } from "./part1";

function getCaloriesPerElf(foodItems: number[]) {
    const caloriesPerElf: number[] = [0];
    foodItems.forEach((foodItem) => {
        if (!foodItem) {
            caloriesPerElf.push(0);
        } else {
            caloriesPerElf[caloriesPerElf.length - 1] += foodItem;
        }
    });
    return caloriesPerElf;
}

export function part2(file: string) {
    const input = getInput(file);
    const foodItems = getFoodItems(input);
    const caloriesPerElf = getCaloriesPerElf(foodItems);
    const sorted = caloriesPerElf.sort((a, b) => b - a);

    return sorted[0] + sorted[1] + sorted[2];
}
