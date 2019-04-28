import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, checkProps } from "./../../../utils";
import SharedButton from "./index";

const setup = (props = {}) => {
  const component = shallow(<SharedButton {...props} />);
  return component;
};

describe("SharedButton Component", () => {
  describe("Check PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Renders", () => {
    let component;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {}
      };
      component = setup(props);
    });
    it("Should Render a Button", () => {
      const wrapper = findByTestAttr(component, "buttonComponent");
      expect(wrapper.length).toBe(1);
    });
  });
});
