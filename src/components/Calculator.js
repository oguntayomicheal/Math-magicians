import React from 'react';
import './Calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="result">0</div>
        <div className="buttons">
          <div className="row1 row">
            <button type="button" className="btnWidth"> AC </button>
            <button type="button" className="btnWidth"> +/- </button>
            <button type="button" className="btnWidth"> % </button>
            <button type="button" className="btnWidth"> ÷ </button>
          </div>
          <div className="row2 row">
            <button type="button" className="btnWidth"> 7 </button>
            <button type="button" className="btnWidth"> 8 </button>
            <button type="button" className="btnWidth"> 9 </button>
            <button type="button" className="btnWidth"> x </button>
          </div>
          <div className="row3 row">
            <button type="button" className="btnWidth"> 4 </button>
            <button type="button" className="btnWidth"> 5 </button>
            <button type="button" className="btnWidth"> 6 </button>
            <button type="button" className="btnWidth"> - </button>
          </div>
          <div className="row4 row">
            <button type="button" className="btnWidth"> 1 </button>
            <button type="button" className="btnWidth"> 2 </button>
            <button type="button" className="btnWidth"> 3 </button>
            <button type="button" className="btnWidth"> + </button>
          </div>
          <div className="row5 row">
            <button type="button" className="btnWidth50"> 0 </button>
            <button type="button" className="btnWidth"> . </button>
            <button type="button" className="btnWidth"> = </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
