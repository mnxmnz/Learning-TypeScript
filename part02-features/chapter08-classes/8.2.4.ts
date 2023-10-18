export class Quote {
  readonly text: string;

  constructor(text: string) {
    this.text = '';
  }

  emphasize() {
    this.text += '!'; // ERROR: 읽기 전용 속성이므로 'text'에 할당할 수 없습니다.
  }
}

export const quote = new Quote('There is a brilliant child locked inside every student');

Quote.text = 'Ha!'; // ERROR: 'typeof Quote' 형식에 'text' 속성이 없습니다.

export class RandomQuote {
  readonly explicit: string = 'Home is the nicest word there is.';
  readonly implicit = 'Home is the nicest word there is.';

  constructor() {
    if (0.5 < Math.random()) {
      this.explicit = "We start learning the minute we're born."; // OK
      this.implicit = "We start learning the minute we're born."; // ERROR: '"We start learning the minute we're born."' 형식은 '"Home is the nicest word there is."' 형식에 할당할 수 없습니다.
    }
  }
}

export const quote2 = new RandomQuote();

quote2.explicit; // 타입: string
quote2.implicit; // 타입: "Home is the nicest word there is."
