import readline from "readline";
import { exit } from "process";
import { getInputFilePath, getOutputFilePath, roundedCornerResizer } from "./jane.js";


const rl = readline.createInterface(({
	input: process.stdin,
	output: process.stdout,
	terminal: false
}));

const roundify = (fileName) => {
	if (fileName === "q") {
		console.log("Quitting...");
		exit();
	} else {
		const inputFile = getInputFilePath(fileName);
		const outputFile = getOutputFilePath(fileName);
		roundedCornerResizer(inputFile, outputFile)
			.then(exit)
			.catch((err) => {
				console.log(err);
				rl.question("Try again: ", roundify);
			});
	}
}

console.log("Welcome to jane.js v3.2.17\nPress (q) to exit\n")
rl.question("File to roundify: ", roundify);
