export abstract class School {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getStudentTypes(): string[];
}

export class Preschool extends School {
  getStudentTypes() {
    return ['preschooler'];
  }
}

export class Absence extends School {
  // ERROR
  // 비추상 클래스 'Absence'은(는) 'School' 클래스에서 상속된 추상 멤버 'getStudentTypes'을(를) 구현하지 않습니다.
}

export let school: School;

school = new Preschool('Sunnyside Daycare'); // OK

school = new School('somewhere else');
// ERROR: 추상 클래스의 인스턴스를 만들 수 없습니다.
