export interface MergedProperties {
  same: (input: boolean) => string;
  different: (input: string) => string;
}

export interface MergedProperties {
  same: (input: boolean) => string; // OK
  different: (input: number) => string; // ERROR: 후속 속성 선언에 같은 형식이 있어야 합니다. 'different' 속성이 '(input: string) => string' 형식이어야 하는데 여기에는 '(input: number) => string' 형식이 있습니다.
}

export interface MergedMethods {
  different(input: string): string;
}

export interface MergedMethods {
  different(input: number): string; // OK
}
