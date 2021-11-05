import { expect } from "chai";
import { getInputFilePath, getOutputFilePath} from "../src/jane";

describe("Jane tests", () => {
    it("should input correctly", () => {
        const name = "banter.png";
        const path = getInputFilePath(name);
        expect(path).to.equal("input/banter.png");
    });

    it("should output correctly", () => {
        const name = "banter.png";
        const path = getOutputFilePath(name);
        expect(path).to.equal("output/banter.png.rounded.png");
    });
});