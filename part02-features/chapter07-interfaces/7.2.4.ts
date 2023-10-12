export type FunctionAlias = (input: string) => number;

export interface CallSignature {
  (input: string): number;
}

// 타입: (input: string) => number
export const typedFunctionAlias: FunctionAlias = input => input.length; // OK

// 타입: (input: string) => number
export const typedCallSignature: CallSignature = input => input.length; // OK

export interface FunctionWithCount {
  count: number;
  (): void;
}

export let hasCallCount: FunctionWithCount;

export function keepsTrackOfCalls() {
  keepsTrackOfCalls.count += 1;
  console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
}

keepsTrackOfCalls.count = 0;

hasCallCount = keepsTrackOfCalls; // OK

export function doesNotHaveCount() {
  console.log('No idea!');
}

hasCallCount = doesNotHaveCount; // ERROR: 'count' 속성이 '() => void' 형식에 없지만 'FunctionWithCount' 형식에서 필수입니다.
