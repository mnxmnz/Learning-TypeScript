export type Book = {
  author?: string;
  pages: number;
};

// OK
export const ok: Book = {
  author: 'Rita Dove',
  pages: 80,
};

// ERROR
export const missing: Book = {
  author: 'Rita Dove',
};

export type Writers = {
  author: string | undefined;
  editor?: string;
};

// OK
export const hasRequired: Writers = {
  author: undefined,
};

// ERROR
export const missingRequired: Writers = {
  // ...
};
