export type StringToNumber = (input: string) => number;

export let stringToNumber: StringToNumber;

stringToNumber = input => input.length; // OK

stringToNumber = input => input.toUpperCase(); // ERROR

export type NumberToString = (input: number) => string;

export function usesNumberToString(numberToString: NumberToString) {
  console.log(`The string is: ${numberToString(1234)}`);
}

usesNumberToString(input => `${input}! Hooray!`); // OK

usesNumberToString(input => input * 2); // ERROR
