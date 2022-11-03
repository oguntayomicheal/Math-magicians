import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  // buttonClick = (buttonName, obj = this.state) => {
  //   const result = calculate(obj, buttonName);
  //   this.setState(result);
  // };

  return (
    <div className="container">
      <div className="result">
        <span>{obj.total}</span>
        <span>{obj.operation}</span>
        <span>{obj.next}</span>
      </div>
      <div className="buttons">
        <div className="row1 row">
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, 'AC'))}> AC </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '+/-'))}> +/- </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '%'))}> % </button>
          <button type="button" className="btnWidth bgd-color2" onClick={() => setState(calculate(obj, '÷'))}> ÷ </button>
        </div>
        <div className="row2 row">
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '7'))}> 7 </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '8'))}> 8 </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '9'))}> 9 </button>
          <button type="button" className="btnWidth bgd-color2" onClick={() => setState(calculate(obj, 'x'))}> x </button>
        </div>
        <div className="row3 row">
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '4'))}> 4 </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '5'))}> 5 </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '6'))}> 6 </button>
          <button type="button" className="btnWidth bgd-color2" onClick={() => setState(calculate(obj, '-'))}> - </button>
        </div>
        <div className="row4 row">
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '1'))}> 1 </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '2'))}> 2 </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '3'))}> 3 </button>
          <button type="button" className="btnWidth bgd-color2" onClick={() => setState(calculate(obj, '+'))}> + </button>
        </div>
        <div className="row5 row">
          <button type="button" className="btnWidth50" onClick={() => setState(calculate(obj, '0'))}> 0 </button>
          <button type="button" className="btnWidth" onClick={() => setState(calculate(obj, '.'))}> . </button>
          <button type="button" className="btnWidth bgd-color2" onClick={() => setState(calculate(obj, '='))}> = </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
