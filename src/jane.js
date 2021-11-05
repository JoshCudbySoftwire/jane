import sharp from "sharp";
import fs from "fs";
const prompt = require("prompt-sync")();

const circleMask = Buffer.from(
    '<svg><rect x="0" y="0" width="200" height="200" rx="100" ry="100"/></svg>'
)

const roundedCornerResizer =
  sharp()
    .resize(200, 200)
    .composite([{
      input: circleMask,
      blend: 'dest-in'
    }])
    .png();


let filename = ""
console.log('About to prompt')
filename = prompt(`Hello, input please: `);
console.log(`${filename} is the file`)

const readableStream = fs.createReadStream(filename)
const writableStream = fs.createWriteStream("week4/src/output.png")

readableStream.pipe(roundedCornerResizer).pipe(writableStream)