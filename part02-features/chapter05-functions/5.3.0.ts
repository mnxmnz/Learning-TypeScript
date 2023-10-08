export let nothingInGiveString: () => string;

export let inputAndOutput: (songs: string[], count?: number) => number;

export const songs = ['Juice', 'Shake It Off', "What's Up"];

export function runOnSongs(getSongAt: (index: number) => string) {
  for (let i = 0; i < songs.length; i += 1) {
    console.log(getSongAt(i));
  }
}

export function getSongAt(index: number) {
  return `${songs[index]}`;
}

runOnSongs(getSongAt); // OK

export function logSong(song: string) {
  return `${song}`;
}

runOnSongs(logSong); // ERROR
