import sharp from "sharp";

const circleMask = Buffer.from(
	'<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>'
)

export const roundedCornerResizer = (input, output) => sharp(input)
	.resize(200, 200)
	.composite([{
		input: circleMask,
		blend: 'dest-in'
	}])
	.png()
	.toFile(output)
	.then(() => console.log("Success!"));


export const getInputFilePath = (fileName) => `input/${fileName}`;
export const getOutputFilePath = (fileName) => `output/${fileName}.rounded.png`;
