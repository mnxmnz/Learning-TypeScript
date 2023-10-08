export let singer: (song: string) => string;

singer = function (song) {
  return `Singing: ${song.toUpperCase()}!`; // OK
};

export const songs = ['Call Me', 'Jolene', 'The Chain'];

// song: string
// index: number
songs.forEach((song, index) => {
  console.log(`${song} is at index ${index}`);
});
