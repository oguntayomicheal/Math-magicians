import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  buttonClick = (buttonName, obj = this.state) => {
    const result = calculate(obj, buttonName);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div className="result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </div>
        <div className="buttons">
          <div className="row1 row">
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('AC')}> AC </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('+/-')}> +/- </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('%')}> % </button>
            <button type="button" className="btnWidth bgd-color2" onClick={() => this.buttonClick('÷')}> ÷ </button>
          </div>
          <div className="row2 row">
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('7')}> 7 </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('8')}> 8 </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('9')}> 9 </button>
            <button type="button" className="btnWidth bgd-color2" onClick={() => this.buttonClick('x')}> x </button>
          </div>
          <div className="row3 row">
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('4')}> 4 </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('5')}> 5 </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('6')}> 6 </button>
            <button type="button" className="btnWidth bgd-color2" onClick={() => this.buttonClick('-')}> - </button>
          </div>
          <div className="row4 row">
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('1')}> 1 </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('2')}> 2 </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('3')}> 3 </button>
            <button type="button" className="btnWidth bgd-color2" onClick={() => this.buttonClick('+')}> + </button>
          </div>
          <div className="row5 row">
            <button type="button" className="btnWidth50" onClick={() => this.buttonClick('0')}> 0 </button>
            <button type="button" className="btnWidth" onClick={() => this.buttonClick('.')}> . </button>
            <button type="button" className="btnWidth bgd-color2" onClick={() => this.buttonClick('=')}> = </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
