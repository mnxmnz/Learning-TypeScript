export type Poet = {
  born: number;
  name: string;
};

// OK
export const poetMatch: Poet = {
  born: 1928,
  name: 'Maya Angelou',
};

export const extraProperty: Poet = {
  activity: 'walking', // ERROR
  born: 1935,
  name: 'Mary Oliver',
};

export const existingObject = {
  activity: 'walking',
  born: 1935,
  name: 'Mary Oliver',
};

export const extraPropertyButOk: Poet = existingObject; // OK
