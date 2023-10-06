export type PoemWithPages = {
  name: string;
  pages: number;
  type: 'pages';
};

export type PoemWithRhymes = {
  name: string;
  rhymes: boolean;
  type: 'rhymes';
};

export type Poem = PoemWithPages | PoemWithRhymes;

export const poem: Poem =
  Math.random() > 0.5
    ? { name: 'The Double Image', pages: 7, type: 'pages' }
    : { name: 'Her Kind', rhymes: true, type: 'rhymes' };

if (poem.type === 'pages') {
  console.log(`It's got pages: ${poem.pages}`); // OK
} else {
  console.log(`It rhymes: ${poem.rhymes}`);
}

poem.type; // "pages" | "rhymes"

poem.pages; // ERROR
