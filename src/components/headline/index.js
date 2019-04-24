import React, { Component } from "react";

class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, desc } = this.props;
    if (!header) {
      return null;
    }
    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{header}</h1>
        <h3 data-test="desc">{desc}</h3>
      </div>
    );
  }
}

export default Headline;
