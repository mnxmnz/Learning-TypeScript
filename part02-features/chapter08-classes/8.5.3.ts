export class GradeCounter {
  countGrades(grades: string[], letter: string) {
    return grades.filter(grade => grade === letter).length;
  }
}

export class FailureCounter extends GradeCounter {
  countGrades(grades: string[]) {
    return super.countGrades(grades, 'F');
  }
}

export class AnyFailureChecker extends GradeCounter {
  countGrades(grades: string[]) {
    // ERROR
    // 'AnyFailureChecker' 형식의 'countGrades' 속성을 기본 형식 'GradeCounter'의 동일한 속성에 할당할 수 없습니다.
    // '(grades: string[]) => boolean' 형식은 '(grades: string[], letter: string) => number' 형식에 할당할 수 없습니다.
    // 'boolean' 형식은 'number' 형식에 할당할 수 없습니다.
    return super.countGrades(grades, 'F') !== 0;
  }
}

export const counter: GradeCounter = new AnyFailureChecker();

// 예상 타입: number
// 실제 타입: boolean
export const count = counter.countGrades(['A', 'B', 'F']);
