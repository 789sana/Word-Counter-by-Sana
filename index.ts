#!/usr/bin/env node
// this line is called a shebang,it tells the OS to runit with nodejs
// Import the 'inquirer' module,which is a command line interfce for Nodejs
import inquirer from "inquirer"
console.log("Welcome To Sana's Word Counter");

const answers: {
  Sentence: string
} = await inquirer.prompt(
    [
        {
            name: "Sentence",
            type: "input",
            message: "Enter your sentence to count the word:"

    }
]
)
const words = answers.Sentence.trim().split(" ")
// print the array of words to console
console.log(words);

// print the words count of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);



