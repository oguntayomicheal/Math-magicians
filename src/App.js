import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Qoutes from './pages/Qoute';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/calculator" element={(<Calculator />)} />
          <Route path="/qoutes" element={<Qoutes />} />
        </Routes>
      </div>
    );
  }
}
export default App;
