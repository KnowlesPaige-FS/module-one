const {
    uppercase,
    lowercase
} = require("./string")

describe("Testing the string module", () => {
    test("Should uppercase a string input", () => {
        // const result = uppercase("bob");
        // expect(result).toBe("BOB");
        expect(uppercase("bob")).toBe("BOB");
    });

    test("Should lowercase a strign input", () => {
        expect(lowercase("FULL SAIL")).toBe("full sail");
    });
});