import operate from '../operate';

describe('Testing operate functionality', () => {
  test('Test operate function', () => {
    expect(operate(2, 5, '+')).toBe('7');
    expect(operate(29, 1, '-')).toBe('28');
    expect(operate(6, 2, '÷')).toBe('3');
    expect(operate(10, 10, 'x')).toBe('100');
  });
});
