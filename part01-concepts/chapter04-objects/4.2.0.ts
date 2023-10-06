export type WithFirstName = {
  firstName: string;
};

export type WithLastName = {
  lastName: string;
};

export const hasBoth = {
  firstName: 'Lucille',
  lastName: 'Clifton',
};

export let withFirstName: WithFirstName = hasBoth; // OK

export let withLastName: WithLastName = hasBoth; // OK
