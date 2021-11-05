import sharp from "sharp";
import fs from "fs";
import readline from "readline";

const circleMask = Buffer.from(
	'<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>'
)

const roundedCornerResizer = sharp()
	.resize(200, 200)
	.composite([{
		input: circleMask,
		blend: 'dest-in'
	}])
	.png();


const rl = readline.createInterface(({
	input: process.stdin,
	output: process.stdout,
	terminal: false
}));

const roundify = (file) => {
	const inputFile = `input/${file}`;
	const outputFile = `output/${inputFile}.rounded.png`
	const stream = fs.createReadStream(inputFile)
		.pipe(roundedCornerResizer)
		.pipe(fs.createWriteStream(outputFile));

	stream.on("finish", () => {
		console.log("Success!");
		rl.close();
	});
	stream.on("error", (error) => console.log(`Oh no! My error: ${error}`))
}

rl.question("File to roundify: ", roundify);
