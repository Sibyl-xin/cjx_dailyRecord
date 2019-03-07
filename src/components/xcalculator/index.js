import React from 'react'
import './style/index.less'

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      result: 0,
      symbolArr: []
    }
  }

  //接收输入的运算符或数字
  getSymbol(value,type){
    if(type == "num"){
      let res = []
      res = value.splice('')

      this.setState({symbolArr: this.state.symbolArr.concat(value)})

    }else if(type == "symbol"){

    }
  }

  render(){
    let {result} = this.state
    return(
      <div className="calculator">
        <div className="cal-result">
          {result}
        </div>
        <div className="cal-operate">
          <ul>
            <li>
              <span className="cal-operate-symbol" onClick={this.getSymbol.bind(this, 'AC', 'symbol')}>AC</span>
              <span className="cal-operate-symbol" onClick={this.getSymbol.bind(this, '±', 'symbol')}>±</span>
              <span className="cal-operate-symbol" onClick={this.getSymbol.bind(this, '%', 'symbol')}>%</span>
              <span className="cal-operate-operation" onClick={this.getSymbol.bind(this, '÷', 'symbol')}>÷</span>
            </li>
            <li>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '7', 'num')}>7</span>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '8', 'num')}>8</span>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '9', 'num')}>9</span>
              <span className="cal-operate-operation" onClick={this.getSymbol.bind(this, '×', 'symbol')}>×</span>
            </li>
            <li>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '4', 'num')}>4</span>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '5', 'num')}>5</span>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '6', 'num')}>6</span>
              <span className="cal-operate-operation" onClick={this.getSymbol.bind(this, '-', 'symbol')}>-</span>
            </li>
            <li>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '1', 'num')}>1</span>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '2', 'num')}>2</span>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '3', 'num')}>3</span>
              <span className="cal-operate-operation" onClick={this.getSymbol.bind(this, '+', 'symbol')}>+</span>
            </li>
            <li>
              <span className="cal-operate-numLg" onClick={this.getSymbol.bind(this, '0', 'num')}>0</span>
              <span className="cal-operate-num" onClick={this.getSymbol.bind(this, '.', 'num')}>.</span>
              <span className="cal-operate-operation" onClick={this.getSymbol.bind(this, '=', 'symbol')}>=</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Calculator
