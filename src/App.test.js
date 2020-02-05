import React from "react";
import { render, act, wait, waitForDomChange } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

test("it renders a modal after 5 seconds", async () => {
  const { queryByTestId } = render(<App />);

  expect(queryByTestId("modal")).toBeNull();

  act(() => jest.advanceTimersByTime(5000));

  await wait(() => queryByTestId("modal"));

  expect(queryByTestId("modal")).toBeTruthy();
});
