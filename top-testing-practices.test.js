import { capitalize, reverseString } from "./strings.js"
import { add, subtract, divide, multiply } from "./calculator.js";
import { caesarCipher } from "./caesar-cipher.js"
import { analyzeArray } from "./analyze-array.js"

test('first character capitalized', () => {
    expect(capitalize("hello world")).toBe("Hello world");
});

test('reverse string', () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

test('calculator adds 1 and 2 to return 3', () => {
    expect(add(1, 2)).toBe(3);
})

test('calculator subtracts 2 and -3 to return -1', () => {
    expect(subtract(2, 3)).toBe(-1);
})

test('calculator divides 8 and 2 to return 2', () => {
    expect(divide(8, 2)).toBe(4);
})

test('calculator multiplies 5 and 9 to return 45', () => {
    expect(multiply(5, 9)).toBe(45);
})

test('caesar cipher accounts for text wrap', () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
})

test('caesar cipher accounts for case preservation', () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
})

test('caesar cipher accounts for punctuation', () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test('analyse average', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6})
})