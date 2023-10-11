export function logWarriors(greeting: string, ...names: string[]) {
  for (const name of names) {
    console.log(`${greeting}, ${name}!`);
  }
}

export const warriors = ['Cathay Williams', 'Lozen', 'Nzinga'];

logWarriors('Hello', ...warriors);

export const birthYears = [1844, 1840, 1583];

logWarriors('Born in', ...birthYears); // ERROR
