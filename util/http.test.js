import { it, vi, expect } from "vitest";
import { sendDataRequest } from "./http";

// replacement response data
const testResponseData = {testKey: "testData"};

// replacement fetch function
const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
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