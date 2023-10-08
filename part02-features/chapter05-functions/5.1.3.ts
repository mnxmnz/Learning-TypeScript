export function rateSong(song: string, rating = 0) {
  console.log(`${song} gets ${rating}/5 stars!`);
}

rateSong('Photograph'); // OK
rateSong('Set Fire to the Rain', 5); // OK
rateSong('Set Fire to the Rain', undefined); // OK

rateSong('At Last!', '100'); // ERROR
