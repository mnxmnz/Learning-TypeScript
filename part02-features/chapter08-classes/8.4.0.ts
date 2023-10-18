export interface Learner {
  name: string;
  study(hours: number): void;
}

export class Student implements Learner {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  study(hours: number) {
    for (let i = 0; i < hours; i += 1) {
      console.log('...studying...');
    }
  }
}

// export class Slacker implements Learner {
//   // ERROR
//   // 'Slacker' 클래스가 'Learner' 인터페이스를 잘못 구현합니다.
//   // 'Slacker' 형식에 'Learner' 형식의 name, study 속성이 없습니다.
// }

export class Student implements Learner {
  name;
  // ERROR: 'name' 멤버에는 암시적으로 'any' 형식이 포함됩니다.

  study(hours) {
    // ERROR: 'hours' 매개 변수에는 암시적으로 'any' 형식이 포함됩니다.
  }
}
