export class PastGrades {
  grades: number[] = [];
}

export class LabeledPastGrades extends PastGrades {
  label?: string;
}

export let subClass: LabeledPastGrades;

subClass = new LabeledPastGrades(); // OK
subClass = new PastGrades(); // OK
