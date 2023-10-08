export function singTwo(first: string, second: string) {
  console.log(`${first} / ${second}`);
}

singTwo('Ball and Chain'); // ERROR

singTwo('I Will Survive', 'Higher Love'); // OK

singTwo('Go Your Own Way', 'The CHain', 'Dreams'); // ERROR
