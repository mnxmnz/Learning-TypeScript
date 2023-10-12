export interface GivesNumber {
  giveNumber(): number;
}

export interface GiveString {
  giveString(): string;
}

export interface GivesBothAndEither extends GivesNumber, GiveString {
  giveEither(): number | string;
}

export function useGivesBoth(instance: GivesBothAndEither) {
  instance.giveEither(); // 타입: number | string
  instance.giveNumber(); // 타입: number
  instance.giveString(); // 타입: string
}
