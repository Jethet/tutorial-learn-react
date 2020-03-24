import React from "react";

class Greetings extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
      </>
    );
  }
}

export default Greetings;
