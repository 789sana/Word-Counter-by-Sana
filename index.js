#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// this line is called a shebang,it tells the OS to runit with nodejs
// Import the 'inquirer' module,which is a command line interfce for Nodejs
var inquirer_1 = require("inquirer");
console.log("Welcome To Sana's Word Counter");
var answers = await inquirer_1.default.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
var words = answers.Sentence.trim().split(" ");
// print the array of words to console
console.log(words);
// print the words count of the sentence to the console
console.log("Your sentence word count is ".concat(words.length));
