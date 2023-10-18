export class WithValue {
  immediate = 0; // OK
  later: number; // OK: constructor에서 할당
  mayBeUndefined: number | undefined; // OK: undefined가 되는 것이 허용
  unused: number; // ERROR: 속성 'unused'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.

  constructor() {
    this.later = 1;
  }
}

export class ActivitiesQueue {
  pending!: string[]; // OK

  initialize(pending: string[]) {
    this.pending = pending;
  }

  next() {
    return this.pending.pop();
  }
}

export const activities = new ActivitiesQueue();

activities.initialize(['eat', 'sleep', 'learn']);
activities.next();
