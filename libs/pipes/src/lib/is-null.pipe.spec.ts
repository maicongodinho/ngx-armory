import { IsNullPipe } from './is-null.pipe';
import { PipeTransform } from '@angular/core';

describe('IsNullPipe', () => {
  let pipe: IsNullPipe;
  let transform: PipeTransform;

  beforeEach(() => {
    pipe = new IsNullPipe();
    transform = pipe;
  });

  it('should return true if the value is null', () => {
    const value = null;
    const result = transform.transform(value);
    expect(result).toBe(true);
  });

  it('should return false if the value is not null', () => {
    const value = 'some value';
    const result = transform.transform(value);
    expect(result).toBe(false);
  });
});
