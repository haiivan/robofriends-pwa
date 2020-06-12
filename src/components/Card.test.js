import { shallow } from "enzyme";
import Card from "./Card";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("expect to render Card component", () => {
  const cardComponent = shallow(<Card />);
  expect(cardComponent).toMatchSnapshot();
});
