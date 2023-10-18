export interface Graded {
  grades: number[];
}

export interface Reporter {
  report: () => string;
}

export class ReportCard implements Graded, Reporter {
  grades: number[];

  constructor(grades: number[]) {
    this.grades = grades;
  }

  report() {
    return this.grades.join(', ');
  }
}

// class Empty implements Graded, Reporter {
//   // ERROR
//   // 'Empty' 클래스가 'Graded' 인터페이스를 잘못 구현합니다.
//   // 'grades' 속성이 'Empty' 형식에 없지만 'Graded' 형식에서 필수입니다.
//   // 'Empty' 클래스가 'Reporter' 인터페이스를 잘못 구현합니다.
//   // 'report' 속성이 'Empty' 형식에 없지만 'Reporter' 형식에서 필수입니다.
// }

export interface AgeIsANumber {
  age: number;
}

export interface AgeIsNotANumber {
  age: () => string;
}

export class AsNumber implements AgeIsANumber, AgeIsNotANumber {
  age = 0;
  // ERROR
  // 'AsNumber' 형식의 'age' 속성을 기본 형식 'AgeIsNotANumber'의 동일한 속성에 할당할 수 없습니다.
  // 'number' 형식은 '() => string' 형식에 할당할 수 없습니다.
}

export class NotAsNumber implements AgeIsANumber, AgeIsNotANumber {
  age() {
    return '';
  }
  // ERROR
  // 'NotAsNumber' 형식의 'age' 속성을 기본 형식 'AgeIsANumber'의 동일한 속성에 할당할 수 없습니다.
  // '() => string' 형식은 'number' 형식에 할당할 수 없습니다.
}
