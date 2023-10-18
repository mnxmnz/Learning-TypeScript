export class WithMethod {
  myMethod() {
    // ...
  }
}

new WithMethod().myMethod === new WithMethod().myMethod; // true

export class WithProperty {
  myProperty: () => {
    // ERROR: 속성 'myProperty'은(는) 이니셜라이저가 없고 생성자에 할당되어 있지 않습니다.
    // ...
  };
}

new WithMethod().myProperty === new WithMethod().myProperty;
// ERROR: 'WithMethod' 형식에 'myProperty' 속성이 없습니다.
