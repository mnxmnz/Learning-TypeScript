export type PoemWithPages = {
  name: string;
  pages: number;
};

export type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};

export type Poem = PoemWithPages | PoemWithRhymes;

export const poem: Poem =
  Math.random() > 0.5 ? { name: 'The Double Image', pages: 7 } : { name: 'Her Kind', rhymes: true };

if ('pages' in poem) {
  poem.pages; // OK
} else {
  poem.rhymes; // OK
}

// ERROR
if (poem.pages) {
  // ...
}
