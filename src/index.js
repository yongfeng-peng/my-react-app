import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
  // 在 JavaScript class 中，每次你定义其子类的构造函数时，都需要调用 super 方法。
  // 在所有含有构造函数的的 React 组件中，构造函数必须以 super(props) 开头。
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: null,
      
  //   };
  // }
  // onClick={() => { this.setState({value: 'X'}) }}
  // 在 React 中，有一个命名规范，通常会将代表事件的监听 prop 命名为 on[Event]，将处理事件的监听方法命名为 handle[Event] 这样的格式。
  render() {
    return (
      <button 
        className="square"
        onClick={() => { this.props.onClick() }}
      >
        {/* TODO */}
        { this.props.value }
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  handClick(i) {
    console.log(this.state.squares);
    // slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({
      squares: squares
    })
  }
  renderSquare(i) {
    // 给子组件传递一个value值
    return (
      <Square 
        value={this.state.squares[i]}
        onClick={() => this.handClick(i)}
      />
    );
    // 为了提高可读性，我们把返回的 React 元素拆分成了多行，同时在最外层加了小括号，
    // 这样 JavaScript 解析的时候就不会在 return 的后面自动插入一个分号从而破坏代码结构了。
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
