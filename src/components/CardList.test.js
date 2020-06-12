import { shallow } from "enzyme";
import CardList from "./CardList";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

test("should render cardlist component", () => {
  const mockRobots = [
    {
      id: 1,
      name: "John",
      username: "johnjohn",
      email: "john@mail.com",
    },
  ];

  expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});
