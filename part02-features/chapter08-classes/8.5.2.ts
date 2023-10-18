export class GradeAnnouner {
  message: string;

  constructor(grade: number) {
    this.message = grade >= 65 ? 'Maybe next time...' : 'You pass!';
  }
}

export class PassingAnnouncer extends GradeAnnouner {
  constructor() {
    super(100);
  }
}

export class FailingAnnouncer extends GradeAnnouner {
  constructor() {
    // ERROR: 파생 클래스의 생성자는 'super' 호출을 포함해야 합니다.
  }
}

export class GradesTally {
  grades: number[] = [];

  addGrades(...grades: number[]) {
    this.grades.push(...grades);
    return this.grades.length;
  }
}

export class ContinuedGradesTally extends GradesTally {
  constructor(previousGrades: number[]) {
    this.grades = [...previousGrades]; // ERROR: 파생 클래스의 생성자에서 'this'에 액세스하기 전에 'super'를 호출해야 합니다.

    super();

    console.log('Starting with length', this.grades.length); // OK
  }
}
