import calculate from '../calculate';

describe('Testing calculate functionality', () => {
  test('must return answer', () => {
    expect(calculate({ total: '15', next: '4', operation: '+' }, '=')).toEqual({ total: '19', next: null, operation: null });
    expect(calculate({ total: '10', next: '2', operation: '-' }, '=')).toEqual({ total: '8', next: null, operation: null });
    expect(calculate({ total: '15', next: '4', operation: 'x' }, '=')).toEqual({ total: '60', next: null, operation: null });
    expect(calculate({ total: '16', next: '2', operation: '÷' }, '=')).toEqual({ total: '8', next: null, operation: null });
  });
});
