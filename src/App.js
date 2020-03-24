import React from "react";

class Greetings extends React.Component {
  render() {
    return (
      <>
        <h1>Hello and welcome!</h1>
        <p>Learn React</p>
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <> 
      <Greetings />
      </>
    )
  }
}

export default App;
