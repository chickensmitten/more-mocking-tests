import { it, expect } from "vitest";

import { validateNotEmpty, validationNotEmpty } from "./validation";

it("should throw an error if an empty string is provided as value", () => {
  const testInput = "";
  const validationFn = () => validationNotEmpty(testInput);

  expect(validationFn).toThrow();
});


it("should throw an error if an empty string is provided as value", () => {
  const testInput = "  ";
  const validationFn = () => validationNotEmpty(testInput);

  expect(validationFn).toThrow();
});

it("should throw an error with the provided error message", () => {
  const testInput = "";
  const testErrorMessage = "Test";
  const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

  expect(validationFn).toThrow(testErrorMessage);
});
