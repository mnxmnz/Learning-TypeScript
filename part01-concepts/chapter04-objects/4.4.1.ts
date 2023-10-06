export type ShortPoemBase = { author: string };
export type Haiku = ShortPoemBase & { kigo: string; type: 'haiku' };
export type Villanelle = ShortPoemBase & { meter: number; type: 'villanelle' };
export type ShortPoem = Haiku | Villanelle;

// ERROR
export const oneArt: ShortPoem = {
  author: 'Elizabeth Bishop',
  type: 'villanelle',
};

export type NotPossible = number & string; // never

export let notNumber: NotPossible = 0; // ERROR

export let notString: never = ''; // ERROR
