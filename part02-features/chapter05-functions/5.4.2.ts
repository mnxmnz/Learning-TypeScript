export function fail(message: string): never {
  throw new Error(`Invariant failure: ${message}.`);
}

export function workWithUnsafeParam(param: unknown) {
  if (typeof param !== 'string') {
    fail(`param should be a string, not ${typeof param}`);
  }

  param.toUpperCase(); // OK
}
