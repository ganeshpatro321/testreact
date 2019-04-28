import React, { Component } from "react";
import PropTypes from "prop-types";

class SharedButton extends Component {
  submitEvent = () => {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  };
  render() {
    return (
      <div>
        <button data-test="buttonComponent" onClick={() => submitEvent()}>
          {this.props.buttonText}
        </button>
      </div>
    );
  }
}

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default SharedButton;
