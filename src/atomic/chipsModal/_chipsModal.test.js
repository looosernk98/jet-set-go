import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ChipsModal from "./index";
import { Facilities } from "../../constants/constants";

describe("Test ChipsModal Component", () => {
  it("should render component", () => {
    render(<ChipsModal chips={Facilities} />);
    const container = screen.getByTestId("container");
    expect(container.childElementCount).toEqual(Facilities.length);
  });
});
