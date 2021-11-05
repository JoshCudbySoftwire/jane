import sharp from "sharp";
import readline from "readline";
import { exit } from "process";

const circleMask = Buffer.from(
	'<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>'
)

const roundedCornerResizer = (input, output) => sharp(input)
	.resize(200, 200)
	.composite([{
		input: circleMask,
		blend: 'dest-in'
	}])
	.png()
	.toFile(output)
	.then(() => console.log("Success!"));


const rl = readline.createInterface(({
	input: process.stdin,
	output: process.stdout,
	terminal: false
}));

const roundify = (file) => {
	if (file === "q") {
		console.log("Quitting...");
		exit();
	} else {
		const inputFile = `input/${file}`;
		const outputFile = `output/${file}.rounded.png`;
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
