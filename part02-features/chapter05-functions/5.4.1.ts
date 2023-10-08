export function logSong(song: string | undefined): void {
  if (!song) {
    return; // OK
  }

  console.log(`${song}`);

  return true; // ERROR
}

export let songLogger: (song: string) => void;

songLogger = song => {
  console.log(`${song}`);
};

songLogger('Heart of Glass'); // OK

export function returnsVoid() {
  return;
}

export let lazyValue: string | undefined;

lazyValue = returnsVoid(); // ERROR

export const records: string[] = [];

export function saveRecords(newRecords: string[]) {
  newRecords.forEach(record => records.push(record));
}

saveRecords(['21', 'Come On Over', 'The Bodyguard']);
