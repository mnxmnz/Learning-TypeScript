export interface Merged {
  fromFirst: string;
}

export interface Merged {
  fromSecond: number;
}

/**
 * 다음과 같음
 * interface Merged {
 *   fromFirst: string;
 *   fromSecond: number;
 * }
 */

export interface Window {
  myEnvironmentVariable: string;
}

window.myEnvironmentVariable;
// ERROR: 'Window & typeof globalThis' 형식에 'myEnvironmentVariable' 속성이 없습니다.
