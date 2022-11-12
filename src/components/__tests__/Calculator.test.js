import { render } from '@testing-library/react';
import Calculator from '../Calculator';

test('Test for calculator', () => {
  const calc = render(<Calculator />);
  expect(calc).toMatchSnapshot();
});
