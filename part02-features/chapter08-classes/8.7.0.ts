export class TwoKeywords {
  private readonly name: string;

  constructor() {
    this.name = 'Anne Sullivan'; // OK
  }

  log() {
    console.log(this.name); // OK
  }
}

export const two = new TwoKeywords();

two.name = 'Savitribai Phule';
// ERROR
// 'name' 속성은 private이며 'TwoKeywords' 클래스 내에서만 액세스할 수 있습니다.
// 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
