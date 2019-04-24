import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { checkProps, findByTestAttr } from "./../../../utils";

const setup = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking Prop Types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Test fname",
            lName: "Test lName",
            email: "test@gmail.com",
            age: 23,
            onlineStatus: false
          }
        ]
      };
      const propsError = checkProps(Headline, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });

  describe("Have Props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Desc"
      };
      component = setup(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a H1", () => {
      const wrapper = findByTestAttr(component, "header");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a desc", () => {
      const wrapper = findByTestAttr(component, "desc");
      expect(wrapper.length).toBe(1);
    });
  });

  describe("Have No Props", () => {
    let component;
    beforeEach(() => {
      component = setup();
    });

    it("Should Not render", () => {
      const wrapper = findByTestAttr(component, "HeadlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
