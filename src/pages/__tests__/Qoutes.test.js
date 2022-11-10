import { render } from '@testing-library/react';
import Qoutes from '../Qoute';

it('Quote renders as expected', () => {
  const homePage = render(<Qoutes />);
  expect(homePage).toMatchSnapshot();
});
