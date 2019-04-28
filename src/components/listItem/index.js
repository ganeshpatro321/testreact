import React, { Component } from "react";
import { PropTypes } from "prop-types";

class ListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (!this.props.title) {
      return null;
    }
    return (
      <div data-test="listItemComponent">
        <div data-test="listItemTitle">{this.props.title}</div>
        <div data-test="listItemDesc">{this.props.desc}</div>
      </div>
    );
  }
}

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string
};

export default ListItem;
