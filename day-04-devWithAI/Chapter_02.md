## Performing Tasks with ChatGPT

```js
let isEven = (num) => {
     if(num%2==0){
          return "Num is even";
     }else{
          return "Num is odd"
     }
}
console.log(isEven(2));
```

## 🧠 How to Think Like a Strong Prompt Engineer

> A better prompt should include:

1. Task
2. Input
3. Output format
4. Edge cases (optional but strong)
5. Example (very powerful)


## Here is pro-level prompt, for above function creation using chatGPT.

> Write a clean and reusable JavaScript function named checkEvenOrOdd that:

1. Accepts a single parameter x (number)
2. Returns "Even" if x is divisible by 2, otherwise "Odd"
3. Handles edge cases like negative numbers and zero
4. Throws an error if the input is not a number
5. Include example usage


# 🧮 JavaScript Calculator Function

## 📌 Description

Write a clean and reusable JavaScript function named `calculator` that performs basic arithmetic operations with proper validation and error handling.

---

## ⚙️ Requirements

### ✅ Function Signature

The function should accept three parameters:

* `num1` → number
* `num2` → number
* `operator` → string

---

### ➕ Supported Operators

* Addition → `+`
* Subtraction → `-`
* Multiplication → `*`
* Division → `/`

---

### 🛡️ Input Validation

* Convert `num1` and `num2` to numbers if possible
* Throw an error if conversion fails
* Throw an error if `operator` is not one of the supported operators

---

### ⚠️ Edge Cases

* Division by zero should throw an error

---

### 📤 Output Format

* Addition → `"The sum of <num1> and <num2> is <result>"`
* Subtraction → `"The difference of <num1> and <num2> is <result>"`
* Multiplication → `"The product of <num1> and <num2> is <result>"`
* Division → `"The division of <num1> and <num2> is <result>"`

---

## 💻 Implementation

```js
function calculator(num1, num2, operator) {
  // Convert inputs
  const a = Number(num1);
  const b = Number(num2);

  // Validate numbers
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Enter valid input: num1 and num2 must be numbers");
  }

  // Validate operator
  const validOperators = ["+", "-", "*", "/"];
  if (!validOperators.includes(operator)) {
    throw new Error("Invalid operator. Use +, -, *, /");
  }

  // Handle division by zero
  if (operator === "/" && b === 0) {
    throw new Error("Division by zero is not allowed");
  }

  let result;

  switch (operator) {
    case "+":
      result = a + b;
      return `The sum of ${a} and ${b} is ${result}`;

    case "-":
      result = a - b;
      return `The difference of ${a} and ${b} is ${result}`;

    case "*":
      result = a * b;
      return `The product of ${a} and ${b} is ${result}`;

    case "/":
      result = a / b;
      return `The division of ${a} and ${b} is ${result}`;
  }
}
```

---

## ▶️ Example Usage

```js
console.log(calculator(10, 5, "+"));
// Output: The sum of 10 and 5 is 15

console.log(calculator("20", "4", "/"));
// Output: The division of 20 and 4 is 5
```

---

## 🎯 Key Highlights

* Clean and reusable function
* Strong input validation
* Handles edge cases (division by zero)
* Readable and structured output
* Supports type conversion for flexibility

---

💡 *Tip: This pattern is commonly used in real-world applications for building utility functions and APIs.*
