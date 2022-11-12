import { render } from '@testing-library/react';
import Home from '../Home';

it('Home renders as expected', () => {
  const homePage = render(<Home />);
  expect(homePage).toMatchSnapshot();
});
