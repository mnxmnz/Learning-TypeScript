export type Poet = {
  born: number;
  name: string;
};

export let poetLater: Poet;

// OK
poetLater = {
  born: 1935,
  name: 'Sara Teasdale',
};

// ERROR
poetLater = 'Emily Dickinson';
