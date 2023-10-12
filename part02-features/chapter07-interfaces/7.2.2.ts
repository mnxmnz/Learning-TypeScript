export interface Page {
  readonly text: string;
}

export function read(page: Page) {
  console.log(page.text); // OK

  page.text += '!'; // ERROR: 읽기 전용 속성이므로 'text'에 할당할 수 없습니다.
}

export const pageIsh = {
  text: 'Hello, world!',
};

pageIsh.text += '!'; // OK

read(pageIsh); // OK
