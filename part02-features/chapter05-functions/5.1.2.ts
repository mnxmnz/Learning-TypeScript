export function announceSong(song: string, singer?: string) {
  console.log(`Song: ${song}`);

  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}

announceSong('Greensleeves'); // OK
announceSong('Greensleeves', undefined); // OK
announceSong('Chandelier', 'Sia'); // OK

export function announceSongBy(song: string, singer: string | undefined) {
  console.log(`Song: ${song}`);

  if (singer) {
    console.log(`Singer: ${singer}`);
  }
}

announceSongBy('Greensleeves'); // ERROR

announceSongBy('Greensleeves', undefined); // OK
announceSongBy('Chandelier', 'Sia'); // OK

export function announceSinger(singer?: string, song: string) {
  // ...
}
