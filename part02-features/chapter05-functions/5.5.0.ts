function createDate(timestamp: number): Date;

function createDate(month: number, day: number, year: number): Date;

function createDate(monthOrTimestamp: number, day?: number, year?: number) {
  return day === undefined || year === undefined ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day);
}

createDate(554356800); // OK

createDate(7, 27, 1987); // OK

createDate(4, 1); // ERROR
