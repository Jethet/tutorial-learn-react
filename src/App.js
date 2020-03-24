import React from "react";
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";

class App extends React.Component {
  constructor() {
    super();
    this.increaseCount = this.increaseCount.bind(this);
  }
  state = {
    count: 0
  };

  increaseCount() {
    this.setState({ count: this.state.count + 1 });
  }

  decreaseCount() {
    console.log("Decrease count");
  }

  resetCount() {
    console.log("Reset count");
  }

  render() {
    return (
      <>
        <Greetings title="Good morning!" message="It is a beautiful day" />
        <Counter
          increaseCount={this.increaseCount}
          decreaseCount={this.decreaseCount}
          resetCount={this.resetCount}
          count={this.state.count}
        />
      </>
    );
  }
}

export default App;
