export class Assignment {
  grade?: number;
}

export class GradedAssignment extends Assignment {
  grade: number;

  constructor(grade: number) {
    super();
    this.grade = grade;
  }
}

export class NumericGrade {
  value = 0;
}

export class VagueGrade extends NumericGrade {
  value = Math.random() > 0.5 ? 1 : '...';
  // ERROR
  // 'VagueGrade' 형식의 'value' 속성을 기본 형식 'NumericGrade'의 동일한 속성에 할당할 수 없습니다.
  // 'string | number' 형식은 'number' 형식에 할당할 수 없습니다.
  // 'string' 형식은 'number' 형식에 할당할 수 없습니다.
}

export const instance: NumericGrade = new VagueGrade();

// 예상 타입: number
// 실제 타입: number | string
instance.value;
