import fs from "fs";
import path from "path";
import { expect, it, vi } from "vitest";
import { Window } from "happy-dom";
import { showError } from "./dom";

const htmlDocPath = path.join(process.cwd(), "index.html");
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window = new Window();
const document = window.document;
document.write(htmlDocumentContent);
vi.stubGlobal("document", document);
// setting up frontend virtual html page in the test file with the code above.

it("should add an error paragraph to the id='errors' element", () => {
  showError("Test");

  const errorsEl = document.getElementById("errors");
  const errorParagraph = errorsEl.firstElementChild;

  expect(errorParagraph).not.toBeNull();
})

