import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr } from "./test/testUtils";
import Overview from "./index";

const setup = (props = {}) => {
  return shallow(<Overview {...props} />);
};

test("render without error", () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, "component-overview");
  expect(component.length).toBe(1);
});

import { render, screen } from "@testing-library/react"; // (or /dom, /vue, ...)

it("should render without error", () => {
  render(<Overview />);
  const input = screen.getByLabelText("Username");
  // Events and assertions...
});
