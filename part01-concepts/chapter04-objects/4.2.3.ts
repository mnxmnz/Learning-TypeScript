export type Poem = {
  author: {
    firstName: string;
    lastName: string;
  };
  name: string;
};

// OK
export const poemMatch: Poem = {
  author: {
    firstName: 'Sylvia',
    lastName: 'Plath',
  },
  name: 'Lady Lazarus',
};

export const poemMismatch: Poem = {
  author: {
    name: 'Sylvia Plath', // ERROR
  },
  name: 'Tulips',
};

export type Author = {
  firstName: string;
  lastName: string;
};

export type Poem2 = {
  author: Author;
  name: string;
};

export const poemMismatch2: Poem2 = {
  author: {
    name: 'Sylvia Plath', //  ERROR,
  },
  name: 'Tulips',
};
