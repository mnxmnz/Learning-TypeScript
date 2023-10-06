export type PoemWithPages = {
  name: string;
  pages: number;
};

export type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
};

export type Poem = PoemWithPages | PoemWithRhymes;

export const poem2: Poem =
  Math.random() > 0.5 ? { name: 'The Double Image', pages: 7 } : { name: 'Her Kind', rhymes: true };

poem2.name; // OK

poem2.pages; // ERROR

poem2.rhymes; // ERROR
