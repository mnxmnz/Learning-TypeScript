// 타입: (boolean | number)[]
export const pairLoose = [false, 123];

export const pairTupleLoose: [boolean, number] = pairLoose; // ERROR

export const tupleThree: [boolean, number, string] = [false, 1583, 'Nzinga'];

export const tupleTwoExact: [boolean, number] = [tupleThree[0], tupleThree[1]];

export const tupleTwoExtra: [boolean, number] = tupleThree; // ERROR

export function logPair(name: string, value: number) {
  console.log(`${name} has ${value}`);
}

export const pairArray = ['Amage', 1];

logPair(...pairArray); // ERROR

export const pairTupleIncorrect: [number, string] = [1, 'Amage'];

logPair(...pairTupleIncorrect); // ERROR

export const pairTupleCorrect: [string, number] = ['Amage', 1];

logPair(...pairTupleCorrect); // OK

export function logTrio(name: string, value: [number, boolean]) {
  console.log(`${name} has ${value[0]} (${value[1]})`);
}

export const trios: [string, [number, boolean]][] = [
  ['Amanitore', [1, true]],
  ['Amanitores', [2, false]],
  ['Ann E. Dunwoody', [3, false]],
];

trios.forEach(trio => logTrio(...trio)); // OK

trios.forEach(logTrio); // ERROR
