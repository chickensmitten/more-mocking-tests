# More Mocking and Front end testing
- mocking global objects and functions
- mocking front end features
- dom or testing front end

## Note on Mocking with Axios
In this example project, the global fetch() API / function is used.

You can, of course, also use third-party libraries in frontend JavaScript projects though. For example, the axios library is a very popular library for sending HTTP requests from the frontend.

In case you're working with such a library, instead of a global value, you can mock that library as you learned in the previous section (i.e., use vi.mock('axios'), provide a __mocks__/axios.js file if necessary etc.).

## JSDOM and Happy-DOM
testing front end code and projects by emulating it with JSDOM and Happy-DOM. Vitest only has Happy-DOM
use a 3rd party library, https://testing-library.com to make testing easier