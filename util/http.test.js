import { it, vi, expect } from "vitest";
import { sendDataRequest } from "./http";

// replacement response data
const testResponseData = {testKey: "testData"};

// replacement fetch function
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== "string") {
      return reject("Not a string.");
    }
    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      }
    };
    resolve(testResponse);
  })
});

// can't use vi.mock("fs") because the fetch function is a globally available module
// not just one function
vi.stubGlobal("fetch", testFetch);

it("should return any available response data", () => {
  const testData = {key: "test"};

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
})

it("should convert the provided data to JSON before sending the request", async () => {
  const testData = {key: "test"};

  let errorMessage;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe("Not a string.")
})