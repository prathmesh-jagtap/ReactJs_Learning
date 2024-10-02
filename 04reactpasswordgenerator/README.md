# React Password Generator

This project is a simple password generator built with React. It allows users to generate random passwords based on selected criteria such as length, inclusion of numbers, symbols, uppercase, and lowercase letters.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn
- JavaScript

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/react-password-generator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd react-password-generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Application

To start the development server, run:

```sh
npm start
```

or

```sh
yarn start
```

## Hooks Used in `App.jsx`

In the `App.jsx` file, we use several React hooks to manage state and side effects:

### `useState`

The `useState` hook is used to manage the state of the password and the criteria for generating it.

Example:

```jsx
const [password, setPassword] = useState("");
const [length, setLength] = useState(12);
const [includeNumbers, setIncludeNumbers] = useState(true);
const [includeSymbols, setIncludeSymbols] = useState(true);
const [includeUppercase, setIncludeUppercase] = useState(true);
const [includeLowercase, setIncludeLowercase] = useState(true);
```

### `useEffect`

The `useEffect` hook is used to perform side effects in the component. For example, we might use it to update the document title or to fetch data when the component mounts.

Example:

```jsx
useEffect(() => {
  // Code to run on component mount or when dependencies change
}, [dependencies]);
```

### `useCallback`

The `useCallback` hook is used to memoize functions so that they are not recreated on every render. This can improve performance by preventing unnecessary re-renders.

Example:

```jsx
const generatePassword = useCallback(() => {
  // Function to generate password
}, [
  length,
  includeNumbers,
  includeSymbols,
  includeUppercase,
  includeLowercase,
]);
```

### `useRef`

The `useRef` hook is used to create a mutable object that persists for the lifetime of the component. It can be used to access DOM elements directly or to store mutable values that do not cause re-renders when updated.

Example:

```jsx
const passwordInputRef = useRef(null);

const focusPasswordInput = () => {
  passwordInputRef.current.focus();
};
```

## Features

- Generate random passwords
- Customize password length
- Include/exclude numbers, symbols, uppercase, and lowercase letters

## License

This project is licensed under the MIT License.

## Acknowledgements

- React documentation
- Various online tutorials and resources
