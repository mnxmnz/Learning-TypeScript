// 반환 타입: (string | number)[]
export function firstCharAndSize(input: string) {
  return [input[0], input.length];
}

// firstChar 타입: string | number
// size 타입: string | number
export const [firstChar, size] = firstCharAndSize('Gudit');

// 반환 타입: [string, number]
export function firstCharAndSizeExplicit(input: string): [string, number] {
  return [input[0], input.length];
}

// firstChar 타입: string | number
// size 타입: string | number
export const [firstChar2, size2] = firstCharAndSize('Cathay Williams');

// 타입: (string | number)[]
export const unionArray = [1157, 'Tomoe'];

// 타입: readonly [1157, "Tomoe"]
export const readonlyTuple = [1157, 'Tomoe'] as const;

export const pairMutable: [number, string] = [1157, 'Tomoe'];
pairMutable[0] = 1247; // OK

export const pairAlsoMutable: [number, string] = [1157, 'Tomoe'] as const; // ERROR

export const pairConst = [1157, 'Tomoe'] as const;
pairConst[0] = 1247; // ERROR

// 반환 타입: readonly [string, number]
export function firstCharAndSizeAsConst(input: string) {
  return [input[0], input.length] as const;
}

// firstChar 타입: string
// size 타입: number
export const [firstChar3, size3] = firstCharAndSizeAsConst('Ching Shih');
