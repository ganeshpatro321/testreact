import React from "react";
import { shallow } from "enzyme";
import ListItem from "./index";

import { checkProps, findByTestAttr } from "./../../../utils";

describe("ListItem Component", () => {
  describe("Checking Prop Types", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        title: "Test title",
        desc: "Test desc"
      };
      const propsError = checkProps(ListItem, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("Component Renders", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "Test title",
        desc: "Test desc"
      };
      component = shallow(<ListItem {...props} />);
    });
    it("Should render without error", () => {
      const wrapper = findByTestAttr(component, "listItemComponent");
      expect(wrapper.length).toBe(1);
    });
    it("Should render a title", () => {
      const wrapper = findByTestAttr(component, "listItemTitle");
      expect(wrapper.length).toBe(1);
    });
    it("Should render title desc", () => {
      const wrapper = findByTestAttr(component, "listItemDesc");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Component should not render", () => {
    let component;
    beforeEach(() => {
      const props = {
        desc: "Test desc"
      };
      component = shallow(<ListItem {...props} />);
    });
    it("Not rendered", () => {
      const wrapper = findByTestAttr(component, "listItemComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
