export interface WordCounts {
  [i: string]: number;
}

export const counts: WordCounts = {};

counts.apple = 0; // OK
counts.banana = 1; // OK

counts.cherry = false; // ERROR: 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.

export interface DatesByName {
  [i: string]: Date;
}

export const publishDates: DatesByName = {
  Frankenstein: new Date('1 January 1818'),
};

publishDates.Frankenstein; // 타입: Date
console.log(publishDates.Frankenstein.toString()); // OK

publishDates.Beloved; // 타입: Date, 런타임: undefined
console.log(publishDates.Beloved.toString()); // 타입: OK, 런타임: ERROR

export interface HistoricalNovels {
  Oroonoko: number;
  [i: string]: number;
}

// OK
export const novels: HistoricalNovels = {
  Outlander: 1991,
  Oroonoko: 1688,
};

export const missingOroonoko: HistoricalNovels = {
  // ERROR
  // 'Oroonoko' 속성이 '{ Outlander: number; }' 형식에 없지만 'HistoricalNovels' 형식에서 필수입니다.
  Outlander: 1991,
};

export interface ChapterStarts {
  preface: 0;
  [i: string]: number;
}

export const correctPreface: ChapterStarts = {
  preface: 0,
  night: 1,
  shopping: 5,
};

export const wrongPreface: ChapterStarts = {
  preface: 1, // ERROR: '1' 형식은 '0' 형식에 할당할 수 없습니다.
};

// OK
export interface MoreNarrowNumbers {
  [i: number]: string;
  [i: string]: string | undefined;
}

// OK
export const mixesNumbersAndStrings: MoreNarrowNumbers = {
  0: '',
  key1: '',
  key2: undefined,
};

export interface MoreNarrowStrings {
  [i: number]: string | undefined; // ERROR: 'number' 인덱스 유형 'string | undefined'을(를) 'string' 인텍스 유형 'string'에 할당할 수 없습니다.
  [i: string]: string;
}
