export type FirstAndLastNames = {
  first: string;
  last: string;
};

// OK
export const hasBoth: FirstAndLastNames = {
  first: 'Sarojini',
  last: 'Naidu',
};

// ERROR
export const hasOnlyOne: FirstAndLastNames = {
  first: 'Sappho',
};

export type TimeRange = {
  start: Date;
};

export const hasStartString: TimeRange = {
  start: '1879-02-13', // ERROR
};
