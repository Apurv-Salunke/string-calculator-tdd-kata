# String Calculator TDD Kata

A simple **String Calculator** implemented using **TypeScript** following the principles of **Test-Driven Development (TDD)**.

## Problem Statement

The task is to build a `StringCalculator` class that includes a method `add` with the following requirements:

### Features
1. The method signature:
   ```typescript
   add(numbers: string): number
   ```
   - Input: A string of numbers separated by a delimiter.
   - Output: The sum of the numbers as an integer.

2. The following cases should be handled:
   - **Empty String**: Return `0`.
     ```text
     Input: ""
     Output: 0
     ```
   - **Single Number**: Return the number itself.
     ```text
     Input: "1"
     Output: 1
     ```
   - **Two Numbers**: Return their sum.
     ```text
     Input: "1,2"
     Output: 3
     ```
   - **Multiple Numbers**: Return the sum of all numbers.
     ```text
     Input: "1,2,3"
     Output: 6
     ```

3. **Newline Delimiter**: The string can contain newlines between numbers (e.g., `1\n2,3` should return `6`).

4. **Custom Delimiters**:
   - A custom delimiter can be defined at the start of the string, preceded by `//` (e.g., `//;\n1;2` should return `3`).

5. **Negative Numbers**:
   - Calling `add` with negative numbers should throw an exception: `"negative numbers not allowed: <negative_numbers>"`.
   - If there are multiple negative numbers, all of them should be listed in the exception message.

## Example Inputs and Outputs

| Input                 | Output | Notes                                           |
|-----------------------|--------|-------------------------------------------------|
| `""`                 | `0`    | Empty string returns 0.                         |
| `"1"`                | `1`    | Single number returns itself.                   |
| `"1,2"`              | `3`    | Sum of two numbers.                             |
| `"1,2,3"`            | `6`    | Sum of multiple numbers.                        |
| `"1\n2,3"`           | `6`    | Supports newlines as delimiters.                |
| `"//;\n1;2"`         | `3`    | Supports custom delimiters (`;`).               |
| `"//|\n4|5|6"`       | `15`   | Supports custom delimiters (`|`).               |
| `"1,-2,3"`           | Error  | Throws exception for negative numbers.          |
| `"//;\n1;-2;-3"`     | Error  | Exception message: `negative numbers not allowed: -2,-3`. |

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Apurv-Salunke/string-calculator-tdd-kata.git
   ```
2. Navigate to the project directory:
   ```bash
   cd string-calculator-tdd-kata
   ```
3. Install dependencies using Bun:
   ```bash
   bun install
   ```

## Running Tests

To run the tests, use the following command:
```bash
bun test
```

The project uses **Mocha** and **Chai** for testing. Test cases are written in the `test` directory.

## Code Structure

```
├── src/
│   ├── StringCalculator.ts   # Main implementation
├── test/
│   ├── StringCalculator.test.ts   # Unit tests
├── package.json
├── tsconfig.json
└── README.md
```

## How to Contribute

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).