export function singAllTheSongs(singer: string, ...songs: string[]) {
  for (const song of songs) {
    console.log(`${song}, by ${singer}`);
  }
}

singAllTheSongs('Alicia Keys'); // OK
singAllTheSongs('Lady Gaga', 'Bad Romance', 'Just Dance', 'Poker Face'); // OK

singAllTheSongs('Ella Fitzgerald', 2000); // ERROR
