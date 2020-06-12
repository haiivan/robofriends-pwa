import { shallow } from "enzyme";
import CounterButton from "./CounterButton";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("should CounterButton render", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

test("should CounterButton increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual("red");
});
