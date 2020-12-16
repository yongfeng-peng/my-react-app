import React from 'react';
import ReactDOM from 'react-dom';

const name = 'Shero';
// const element = <h1>Hello, {name}</h1>;

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  // 建议将内容包裹在括号中，虽然这样做不是强制要求的，但是这可以避免遇到自动插入分号陷阱
  <div>
    <h1>Hello, {name}</h1>
    <h1>Hello, {formatName(user)}</h1>
    <h1>{getGreeting()}</h1>
  </div>
);


function formatName(user) {
  return `${user.firstName}-----${user.lastName}`
}

function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//     <Welcome name="Sara" />
//     <Welcome name="Dedi" />
//     <Welcome name="Asli" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App/>,
//   document.getElementById('root')
// );

function formatDate(date) {
  return date.toLocaleDateString();
}

// 从组件自身的角度命名 props，而不是依赖于调用组件的上下文命名
function Avatar(props) {
  return (
    <img
      className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

// 该组件由于嵌套的关系，变得难以维护，且很难复用它的各个部分。因此，让我们从中提取一些组件出来
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );

function FormattedDate(props) {
  return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

// function Clock(props) {
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date
    }
  }

  // 挂载 组件已经被渲染到 DOM 中后运
  componentDidMount() {
    this.timeId =  setInterval(
      () => this.tick(),
      1000
    );
  }

  // 卸载
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return(
      <div>
        <h1>Hello, world!</h1>
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
        <FormattedDate date={this.state.date} />
      </div>
    );
  }
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true
    };
    // 为了在回调中使用 `this`，这个绑定是必不可少的
    // this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
function App() {
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
      <Toggle/>
    </div>
  );
}

// 每个 Clock 组件都会单独设置它自己的计时器并且更新它。
// 在 React 应用中，组件是有状态组件还是无状态组件属于组件实现的细节，它可能会随着时间的推移而改变。

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// setInterval(tick, 1000);
