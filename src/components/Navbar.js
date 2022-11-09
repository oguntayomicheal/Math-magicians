import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div id="Navbar">
      <h1>Math Magicians</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/qoutes">Qoutes</Link>
      </nav>
    </div>

  );
}

export default Navbar;
