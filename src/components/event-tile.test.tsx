import { render, screen } from "@testing-library/react";
import EventTile from "./event-tile";
// @ts-ignore
import {
  getByTestId,
  toHaveStyle,
} from "@testing-library/jest-dom/extend-expect";
const mockProps = {
  key: "1",
  title: "Test title",
  date: "09-18-2021",
  explaination: "Test",
  imageUrl: "https://miro.medium.com/max/1400/1*azM9L1gNzCS5-qabJGw6zg.jpeg",
};

test("renders title of an apod", () => {
  render(
    <EventTile
      key={mockProps.key}
      title={mockProps.title}
      date={mockProps.date}
      explaination={mockProps.explaination}
      imageUrl={mockProps.imageUrl}
      mediaType="image"
    />
  );
  const linkElement = screen.getByText(mockProps.title);
  expect(linkElement).toBeInTheDocument();
});

test("renders date of an apod", () => {
  render(
    <EventTile
      key={mockProps.key}
      title={mockProps.title}
      date={mockProps.date}
      explaination={mockProps.explaination}
      imageUrl={mockProps.imageUrl}
      mediaType="image"
    />
  );
  const textContent = screen.getByText(mockProps.date);
  expect(textContent).toBeInTheDocument();
});

test("renders explaination of an apod", () => {
  render(
    <EventTile
      key={mockProps.key}
      title={mockProps.title}
      date={mockProps.date}
      explaination={mockProps.explaination}
      imageUrl={mockProps.imageUrl}
      mediaType="image"
    />
  );
  const textContent = screen.getByText(mockProps.explaination);
  expect(textContent).toBeInTheDocument();
});

test("renders image of an apod", () => {
  render(
    <EventTile
      key={mockProps.key}
      title={mockProps.title}
      date={mockProps.date}
      explaination={mockProps.explaination}
      imageUrl={mockProps.imageUrl}
      mediaType="image"
    />
  );
  const textContent = screen.getByAltText("NASA Apod");
  expect(textContent).toBeInTheDocument();
});

test("render the like button", () => {
  render(
    <EventTile
      key={mockProps.key}
      title={mockProps.title}
      date={mockProps.date}
      explaination={mockProps.explaination}
      imageUrl={mockProps.imageUrl}
      mediaType="image"
    />
  );
  const testAriaLabel = screen.getByLabelText("heart");
  expect(testAriaLabel).toBeInTheDocument();
});
