import React from "react";

class TimeInp extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      inputText: "",
    };
  }

  onChange = (event) => {
    let inputText = event.target.value;
    this.setState({ inputText });
  };

  onIncrease = () => {
    let counter = this.state.counter + 1;
    this.setState({ counter });
  };

  onDecrease = () => {
    if (this.state.counter > 0) {
      let counter = this.state.counter - 1;
      this.setState({ counter });
    }
  };

  render() {
    console.log(this.state.counter);
    return (
      <div className="App">
        <input
          onChange={this.onChange}
          value={this.state.counter}
          placeholder={this.state.counter}
        ></input>
        <button onClick={this.onIncrease}>Increase</button>
        <button onClick={this.onDecrease}>Decrease</button>
      </div>
    );
  }
}

export default TimeInp;
