import { ImageSourcePropType } from "react-native";

export type Exercise = {
  title: string;
  description: string;
  image: ImageSourcePropType;
  content?: string[];
};

export const excercises: Exercise[] = [
  {
    title: "Tip 1: Use === Instead of ==",
    description:
      "Always use strict equality to avoid unexpected type coercion.",
    image: require("../assets/tip1.png"),
    content: [
      "1. In JavaScript, `==` performs type coercion which can cause bugs.",
      "2. Example: '5' == 5 → true, but '5' === 5 → false.",
      "3. Always prefer `===` and `!==` for predictable comparisons.",
    ],
  },
  {
    title: "Tip 2: Use const and let Instead of var",
    description: "Block-scoped variables reduce errors and make code cleaner.",
    image: require("../assets/tip2.png"),
    content: [
      "1. `var` is function-scoped and can lead to hoisting issues.",
      "2. Use `const` for values that don’t change, `let` for reassignable variables.",
      "3. Example: const PI = 3.14; let count = 0;",
    ],
  },
  {
    title: "Tip 3: Use Template Literals",
    description: "Make string concatenation cleaner with backticks.",
    image: require("../assets/tip3.png"),
    content: [
      "1. Instead of: 'Hello ' + name + '!'.",
      "2. Use: `Hello ${name}!`.",
      "3. Template literals also support multi-line strings.",
    ],
  },
  {
    title: "Tip 4: Destructure Objects and Arrays",
    description: "Extract values quickly using destructuring.",
    image: require("../assets/tip4.png"),
    content: [
      "1. Example array: const [first, second] = [10, 20];",
      "2. Example object: const {name, age} = person;",
      "3. Helps keep code shorter and clearer.",
    ],
  },
  {
    title: "Tip 5: Use Default Parameters",
    description: "Simplify functions by setting default argument values.",
    image: require("../assets/tip5.png"),
    content: [
      "1. Example: function greet(name = 'Guest') { console.log(`Hello ${name}`); }",
      "2. greet(); → Hello Guest",
      "3. greet('Alice'); → Hello Alice",
    ],
  },
  {
    title: "Tip 6: Avoid Global Variables",
    description: "Keep variables scoped inside functions or modules.",
    image: require("../assets/tip6.png"),
    content: [
      "1. Globals can be overwritten or conflict with libraries.",
      "2. Use modules (import/export) or closures to limit scope.",
      "3. Example: wrap logic inside functions or IIFEs.",
    ],
  },
  {
    title: "Tip 7: Use Array Methods Instead of Loops",
    description: "map, filter, reduce make code more readable.",
    image: require("../assets/tip7.png"),
    content: [
      "1. Instead of using for loops for transformations, use array methods.",
      "2. Example: const doubles = arr.map(x => x * 2);",
      "3. They are concise and functional.",
    ],
  },
  {
    title: "Tip 8: Handle Async Code with async/await",
    description: "Make asynchronous code easier to read.",
    image: require("../assets/tip8.png"),
    content: [
      "1. async/await syntax makes promises look synchronous.",
      "2. Example: const data = await fetch(url).then(res => res.json());",
      "3. Wrap in try/catch for error handling.",
    ],
  },
  {
    title: "Tip 9: Use Strict Mode",
    description: "Enforce better coding practices with 'use strict'.",
    image: require("../assets/tip9.png"),
    content: [
      "1. Add 'use strict' at the top of files/functions.",
      "2. Prevents using undeclared variables.",
      "3. Helps catch silent errors early.",
    ],
  },
  {
    title: "Tip 10: Keep Code DRY (Don’t Repeat Yourself)",
    description: "Refactor repeated code into functions or components.",
    image: require("../assets/tip10.png"),
    content: [
      "1. If you write similar code twice, make it a function.",
      "2. Example: formatDate(date) instead of repeating formatting logic.",
      "3. In React/Web, extract common UI parts into reusable components.",
    ],
  },
];
