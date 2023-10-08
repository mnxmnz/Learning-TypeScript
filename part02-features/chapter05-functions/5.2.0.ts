// (songs: string[]) => number
export function singSongs(songs: string[]) {
  for (const song of songs) {
    console.log(`${song}`);
  }

  return songs.length;
}

// (songs: string[], index: number) => string | undefined
export function getSongAt(songs: string[], index: number) {
  return index < songs.length ? songs[index] : undefined;
}
