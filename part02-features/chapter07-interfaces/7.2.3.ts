export interface HasBothFunctionTypes {
  property: () => string;
  method(): string;
}

export const hasBoth: HasBothFunctionTypes = {
  property: () => '',
  method() {
    return '';
  },
};

hasBoth.property(); // OK
hasBoth.method(); // OK
