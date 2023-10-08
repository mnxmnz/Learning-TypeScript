export function singSongsRecursive(songs: string[], count = 0): number {
  return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
}

export const singSongsRecursive2 = (songs: string[], count = 0): number => {
  return songs.length ? singSongsRecursive2(songs.slice(1), count + 1) : count;
};

export function getSongRecordingDate(song: string): Date | undefined {
  switch (song) {
    case 'Strange Fruit':
      return new Date('April 20, 1939'); // OK
    case 'Greensleeves':
      return 'unknown'; // ERROR
    default:
      return undefined; // OK
  }
}
