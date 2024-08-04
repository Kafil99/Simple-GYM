#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

enum excersice {
    excersice1 = "Push Ups",
    excersice2 = "Leg Press",
    excersice3 = "Hammer Crul",
    excersice4 = "Crunches",
};
enum trainer {
    trainer1 = "Brad Schoenfeld",
    trainer2 = "Matt Roberts",
    trainer3 = "Shaun Stafford",
    trainer4 = "Benjamin Stone",
};
enum timing {
    timing1 = "6:00 Am to 9:00 Am",
    timing2 = "5:00 Pm to 8:00 Pm",
    timing3 = "8:00 Pm to 10:00 Pm",
    timing4 = "10:00 Pm to 12:00 Pm",
}

const userInput = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: chalk.white("Please Enter your Name")
    },
    {
        name: "Question1",
        type: "list",
        message: chalk.yellow.bold("Select any Excersice you want to Master"),
        choices: [excersice.excersice1, excersice["excersice2"], excersice["excersice3"], excersice.excersice4]
    },
    {
        name: "Question2",
        type: "list",
        message: chalk.yellow.bold("Select you'r Personal Trainer"),
        choices: ["Brad Schoenfeld", "Matt Roberts", "Shaun Stafford", "Benjamin Stone"]

    },
    {
        name: "Question3",
        type: "list",
        message: chalk.yellow.bold("Select you'r suitable Timing"),
        choices: ["6:00 Am to 9:00 Am", "5:00 Pm to 8:00 Pm", "8:00 Pm to 10:00 Pm", "10:00 Pm to 12:00 Pm"]
    }
]);

const { userName, Question1, Question2, Question3 } = userInput
console.log(chalk.greenBright.bold(`Shadow Fitness GYM Schedule For: ${userName}
    Your Choice Is To Master: ${Question1}
    With Gtear Trainer: ${Question2}
    At Time: ${Question3}`));

console.log(chalk.blue.bold("THANKS FOR HAVING OUR SERVICES"));
console.log(chalk.greenBright("YOU CAN ALSO VISIT OUR GYM ADDRESS: Plot No. 120, Block A, Sindhi Muslim Opposite Del Frio "))