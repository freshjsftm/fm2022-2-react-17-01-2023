// React;
// ReactDOM;

class Heading extends React.Component {
  render() {
    console.log(this);
    const { className, titleProps, children } = this.props;
    return React.createElement(
      "h1",
      {
        className: className,
        title: titleProps,
      },
      "Hi! ",
      "React",
      ...children
    );
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  increment = () => {
    //this.state.count++; //мутація - погана практика
    this.setState({ count: this.state.count + 1 })
    console.log("+", this.state.count);
  };
  decrement = () => {
    //this.state.count--;
    this.setState({ count: this.state.count - 1 })
    console.log("-", this.state.count);
  };
  render() {
    const { count } = this.state;
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("h2", { className: "color" }, count),
      React.createElement("button", { onClick: this.increment }, "+"),
      React.createElement("button", { onClick: this.decrement }, "-")
    );
  }
}

const child = React.createElement(Counter, {});
const root = document.getElementById("root");
//ReactDOM.render(child, root);
const container = ReactDOM.createRoot(root);
container.render(child);
