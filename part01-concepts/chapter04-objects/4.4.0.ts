export type Artwork = {
  genre: string;
  name: string;
};

export type Writing = {
  pages: number;
  name: string;
};

export type WrittenArt = Artwork & Writing;
/**
 *
 * {
 *  genre: string;
 *  name: string;
 *  pages: number;
 * }
 *
 */

export type ShortPoem = { author: string } & ({ kigo: string; type: 'haiku' } | { meter: number; type: 'villanelle' });

export const morningGlory: ShortPoem = {
  author: 'Fukuda Choiyo-ni',
  kigo: 'Morning Glory',
  type: 'haiku',
};

export const oneArt: ShortPoem = {
  author: 'Elizabeth Bishop',
  type: 'villanella', // ERROR
};
