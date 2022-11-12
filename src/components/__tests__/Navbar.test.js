import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

it('Nav renders as expected', () => {
  const Task = render(
    <Router>
      <Navbar />
    </Router>,
  );
  expect(Task).toMatchSnapshot();
});
