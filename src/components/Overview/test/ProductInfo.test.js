import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import ProductInfo from "./ProductInfo";

const setup = (props = {}) => {
  return shallow(<ProductInfo {...props} />);
};

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-product-info");
  expect(component.length).toBe(1);
});
