const {
    addition,
    subtraction,
    divide,
    multiply,
    squareRoot,
} = require("./math")

describe(("Testing the Math Object"), () => {
// Add, Subtract, Divide, Multiply
    test("Math Addition", () => {
        expect(addition(4, 2)).toBe(6);
    });

    test("Math Substraction", () => {
        expect(subtraction(100, 10)).toBe(90);
    });

    test("Math Substraction", () => {
        expect(divide(1000, 10)).toBe(100);
    });

    test("Math Multiply", () => {
        expect(multiply(30, 10)).toBe(300);
    });
});

describe(("Advanced Math"), () => {
    // Square root and Max number
    test("Math Square root", () => {
        expect(Math.sqrt(2304)).toBe(48);
    });

    test("Math Max", () => {
        expect(Math.max(1890, 2000)).toBe(2000);
    });
});