export interface WithNullableName {
  name: string | null;
}

export interface WithNonNullableName extends WithNullableName {
  name: string;
}

export interface WithNumericName extends WithNullableName {
  // ERROR
  // 'WithNumericName' 인터페이스가 'WithNullableName' 인터페이스를 잘못 확장합니다.
  // 'name' 속성의 형식이 호환되지 않습니다.
  // 'string | number' 형식은 'string | null' 형식에 할당할 수 없습니다.
  // 'number' 형식은 'string' 형식에 할당할 수 없습니다.
  name: number | string;
}
