function format(data: string): string; // OK

function format(data: string, needle: string, haystack: string): string; // OK

function format(getData: () => string): string; // ERROR

function format(data: string, needle?: string, haystack?: string) {
  return needle && haystack ? data.replace(needle, haystack) : data;
}
