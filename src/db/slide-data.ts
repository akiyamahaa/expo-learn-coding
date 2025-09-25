import { ImageSourcePropType } from "react-native";
import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export const basic: IData[] = [
  {
    id: 1,
    image: require("../assets/tech1.png"),
    title: "Topic: Introduction to Web Development",
    description:
      "Discover an overview of web development, the roles of front-end, back-end, and full-stack developers. Understand how websites work through the client-server model and get familiar with essential development tools.",
    videoUrl: "https://youtu.be/GHUe4m9s6Zk?si=gR_K4sMPU4b3bkGo",
    content: [
      "Explore the history and impact of web development on technology and society",
      "Differentiate between front-end, back-end, and full-stack roles",
      "Get familiar with the three building blocks of the web: HTML, CSS, and JavaScript",
      "Understand how the internet works through the client-server model",
      "Set up beginner-friendly tools like VS Code, browser dev tools, and GitHub",
      "Discuss career pathways and future opportunities in web development",
    ],
  },
  {
    id: 2,
    image: require("../assets/tech2.png"),
    title: "Topic: Basic HTML - Advanced HTML",
    description:
      "Learn HTML, the language that builds the structure of a website. Practice creating text, links, images, forms, and use semantic tags to improve clarity and accessibility.",
    videoUrl: "https://youtu.be/HD13eq_Pmp8?si=GNgYeMz9McPrD5I_",
    content: [
      "Document structure: <!DOCTYPE>, <html>, <head>, <body>",
      "Working with headings, paragraphs, links, and images",
      "Building ordered and unordered lists for structured content",
      "Semantic tags: <header>, <nav>, <article>, <section>, <footer>",
      "Embedding media: <audio>, <video>, and <iframe>",
      "Forms: <form>, <input>, <select>, <textarea>, <button>",
      "Attributes for functionality and accessibility: href, alt, aria-label",
      "Best practices for clean, semantic, and accessible HTML",
    ],
  },
  {
    id: 3,
    image: require("../assets/tech3.png"),
    title: "Topic: Basic CSS - Advanced CSS",
    description:
      "Learn how to use CSS to style your website with colors, fonts, and layouts. Move on to advanced techniques like the box model, grid, and animations to create professional interfaces.",
    videoUrl: "https://youtu.be/wRNinF7YQqQ?si=LCkbNdv2lJZFhsH7",
    content: [
      "CSS syntax and structure: selectors, properties, and values",
      "Inline, internal, and external CSS approaches",
      "Typography styling: colors, fonts, spacing, and alignment",
      "The box model: margin, border, padding, and content",
      "Positioning and display: inline, block, absolute, relative, fixed",
      "Backgrounds, gradients, and images",
      "Working with pseudo-classes and pseudo-elements (:hover, :before, :after)",
      "CSS transitions, transformations, and simple animations",
      "CSS Grid basics for advanced layouts",
      "Organizing and structuring reusable styles",
    ],
  },
  {
    id: 4,
    image: require("../assets/tech4.png"),
    title: "Topic: Flexbox & Responsive Design",
    description:
      "Learn to create flexible layouts using Flexbox and optimize your website for all devices with responsive design. Apply media queries and mobile-first principles to build modern websites.",
    videoUrl: "https://youtu.be/phWxA89Dy94?si=F-BrUJAhNMh8eKki",
    content: [
      "Introduction to Flexbox: containers and items",
      "Flexbox container properties: display: flex;, flex-direction, justify-content, align-items, flex-wrap",
      "Flexbox item properties: flex-grow, flex-shrink, flex-basis, order, align-self",
      "Creating common layouts: navbars, cards, and grids",
      "Responsive design principles and why they matter",
      "Using relative units (% , em, rem, vw, vh) for fluid design",
      "Applying media queries for multiple screen sizes",
      "Mobile-first design: benefits and implementation",
      "Practical case studies: building a responsive landing page",
    ],
  },
  {
    id: 5,
    image: require("../assets/tech5.png"),
    title: "Topic: Overall Summary: Web Development Fundamentals",
    description:
      "Summarize the knowledge from HTML, CSS, to Flexbox and responsive design. Students will master the foundations to build a complete website and be ready to move on to JavaScript or frameworks.",
    videoUrl: "https://youtu.be/5YDVJaItmaY?si=bVWvyc86EVk4TJwk",
    content: [
      "Recap of HTML fundamentals: structure, semantic elements, and forms",
      "Review of CSS essentials: styling, layouts, and advanced techniques",
      "Understanding how Flexbox simplifies complex designs",
      "Key principles of responsive design for multi-device compatibility",
      "How HTML and CSS combine to create complete, user-friendly websites",
      "Next steps in the journey: JavaScript, frameworks, and project building",
    ],
  },
  {
    id: 11,
    image: require("../assets/tech16.png"),
    title: "Topic: Browser DevTools & Debugging Basics",
    description:
      "Get familiar with Chrome DevTools: Elements, Console, and Network tabs, and learn how to set breakpoints to debug HTML, CSS, and JavaScript effectively.",
    videoUrl: "https://youtu.be/H0XScE08hy8",
    content: [
      "Inspect and edit HTML/CSS directly in the Elements tab",
      "View logs, warnings, and errors with the Console; use console.log effectively",
      "Debug JavaScript with the Sources tab: breakpoints, stepping, and call stack",
      "Monitor requests and responses in the Network tab; analyze status and timing",
      "CSS debugging tips (box model, computed styles)",
    ],
  },
  {
    id: 12,
    image: require("../assets/tech17.png"),
    title: "Topic: Images, Icons & SVG for the Web",
    description:
      "Learn when to use PNG, JPG, WebP, and SVG formats, how to optimize image size, and use SVG icons flexibly.",
    videoUrl: "https://youtu.be/NiV5n0_mGa8?si=Pw7SKPQ_7bMSpPPu",
    content: [
      "When to use PNG/JPG/WebP, pros and cons",
      "What SVG is and how to embed inline SVG and style with CSS",
      "Image optimization: compression, resizing, lazy-loading (loading='lazy')",
      "Using icon libraries (Heroicons/Font Awesome) safely",
      "Best practices for naming and structuring the /assets folder",
    ],
  },
  {
    id: 13,
    image: require("../assets/tech18.png"),
    title: "Topic: Color & Typography Basics",
    description:
      "Understand the principles of choosing colors, ensuring contrast, and setting font size/line-height for better readability and user-friendly design.",
    videoUrl: "https://youtu.be/AXpxZMRM1EY?si=OCgAoEbGhw4wpX7W",
    content: [
      "Color contrast (WCAG) and considerations for text/background",
      "Type scales and proper line-height",
      "System fonts vs. Webfonts (Google Fonts) and performance optimization",
      "Responsive typography with clamp(), rem, and em",
      "Creating a basic style guide for small projects",
    ],
  },
  {
    id: 14,
    image: require("../assets/tech19.png"),
    title: "Topic: HTML Forms — Structure & UX",
    description:
      "Learn how to build basic HTML forms, set labels and placeholders properly, and improve user experience when entering data.",
    videoUrl: "https://youtu.be/2O8pkybH6po?si=Xw5x6Cz_XZxuo2Pp",
    content: [
      "Basic form elements: label, input, textarea, select, button",
      "Linking labels and inputs with for/id and aria-describedby",
      "Input types: email, number, date, and attributes like required and pattern",
      "Avoid using placeholders instead of labels; show friendly error messages",
      "Basic form submission and handling default behavior",
    ],
  },
  {
    id: 15,
    image: require("../assets/tech20.png"),
    title: "Topic: Accessibility (A11y) Fundamentals",
    description:
      "Understand the principles of accessibility for all users: semantic HTML, keyboard navigation, and ARIA attributes.",
    videoUrl: "https://youtu.be/e2nkq3h1P68?si=52lKWQd18L5_yaPn",
    content: [
      "Why accessibility matters: user benefits and SEO",
      "Using semantic HTML correctly: nav, main, header, footer, button vs. div",
      "Focus states and keyboard navigation (Tab, Enter, Space)",
      "ARIA basics: role, aria-label, aria-live (only when necessary)",
      "Quick accessibility checks with Lighthouse and screen readers",
    ],
  },
];

export const intermediate: IData[] = [
  {
    id: 6,
    image: require("../assets/tech6.png"),
    title: "Topic: JavaScript Basics",
    description:
      "In this topic, you will be introduced to JavaScript, the programming language that adds interactivity and dynamic behavior to web pages. You’ll learn how to write and run simple scripts that respond to user actions and manipulate page content.",
    videoUrl: "https://youtu.be/DHjqpvDnNGE?si=rz07OhA_PjXJyqzB",
    content: [
      "What JavaScript is and how it works with HTML and CSS",
      "Embedding JavaScript in web pages: inline, internal, and external scripts",
      "Basic syntax: variables, data types, operators, and expressions",
      "Writing functions and understanding scope",
      "Using conditional statements (if, else, switch)",
      "Looping with for and while loops",
      "Handling user input with prompts and alerts",
      "Introduction to the Document Object Model (DOM)",
      "Selecting and modifying HTML elements with JavaScript",
      "Basic event handling (e.g., responding to button clicks)",
    ],
  },
  {
    id: 7,
    image: require("../assets/tech7.png"),
    title: "Topic: Functions, Arrays, and Objects",
    description:
      "In this topic, you will deepen your understanding of JavaScript by learning about key programming concepts that enable you to write more organized and efficient code. You’ll explore how to use functions to encapsulate reusable logic, manage collections of data with arrays, and structure complex data using objects.",
    videoUrl: "https://youtu.be/yQ1fz8LY354?si=NqwmNMDQrY82h3C4",
    content: [
      "Defining and invoking functions, including parameters and return values",
      "Understanding function scope and hoisting",
      "Working with arrays: creation, accessing elements, and common methods (push, pop, shift, unshift, forEach, map)",
      "Iterating over arrays with loops and array methods",
      "Introduction to objects: creating objects, properties, and methods",
      "Accessing and modifying object properties using dot notation and bracket notation",
      "Nested objects and arrays",
      "Practical examples combining functions, arrays, and objects to solve problems",
    ],
  },
  {
    id: 8,
    image: require("../assets/tech8.png"),
    title: "Topic: DOM Manipulation & Events",
    description:
      "In this topic, you’ll learn how to make your web pages truly interactive by using JavaScript to manipulate the Document Object Model (DOM) and respond to user events. You’ll gain hands-on experience selecting, modifying, and creating HTML elements dynamically, as well as handling events like clicks, key presses, and more.",
    videoUrl: "https://youtu.be/y17RuWkWdn8?si=QDvJZ0XAHqdvueuI",
    content: [
      "Understanding the DOM structure and how JavaScript interacts with it",
      "Selecting DOM elements using methods like getElementById, querySelector, and getElementsByClassName",
      "Changing content, styles, and attributes of HTML elements dynamically",
      "Creating, appending, and removing elements from the DOM",
      "Introduction to event handling: adding event listeners with addEventListener",
      "Common event types: click, mouseover, keydown, submit, and more",
      "Event propagation: capturing and bubbling",
      "Practical examples: interactive buttons, form validation, dynamic content updates",
    ],
  },
  {
    id: 9,
    image: require("../assets/tech9.png"),
    title: "Topic: Advanced JavaScript",
    description:
      "This topic takes your JavaScript skills to the next level by introducing advanced concepts and techniques that allow you to write more efficient, maintainable, and powerful code. You’ll explore modern JavaScript features and best practices used in real-world web development.",
    videoUrl: "https://youtu.be/R9I85RhI7Cg?si=JvzEB-zmFvzVy7TJ",
    content: [
      "ES6+ features: arrow functions, template literals, destructuring, spread/rest operators",
      "Working with asynchronous JavaScript: callbacks, Promises, and async/await",
      "Closures and lexical scope",
      "The this keyword and how it behaves in different contexts",
      "Prototypes and inheritance in JavaScript",
      "Modules and import/export syntax",
      "Error handling with try...catch",
      "Introduction to JavaScript design patterns (e.g., Module pattern)",
      "Practical examples demonstrating advanced techniques in action",
    ],
  },
  {
    id: 10,
    image: require("../assets/tech10.png"),
    title: "Topic: Overall Summary: JavaScript",
    description:
      "Starting with Topic 6: JavaScript Basics, you learned foundational programming concepts including variables, data types, functions, conditionals, loops, and how to embed JavaScript into web pages to create interactivity. In Topic 7: Functions, Arrays, and Objects, you expanded your skills by mastering reusable functions, working with arrays to handle lists of data, and using objects to model complex data structures—key to writing organized and maintainable code. Topic 8: DOM Manipulation & Events focused on dynamically interacting with web pages. You learned how to select, modify, and create HTML elements, as well as handle user events like clicks and key presses, making your sites responsive and interactive. Finally, Topic 9: Advanced JavaScript introduced modern language features such as ES6+ syntax (arrow functions, destructuring), asynchronous programming with Promises and async/await, closures, prototypes, and modules. These concepts prepare you to write clean, efficient, and scalable JavaScript code suitable for real-world applications.",
    videoUrl: "https://youtu.be/lkIFF4maKMU?si=DIOXO9Dnd-Eezf-r",
  },
  // Additional lessons
  {
    id: 16,
    image: require("../assets/tech21.png"),
    title: "Topic: Asynchronous JavaScript — Promises & Fetch",
    description:
      "Understand asynchronous behavior in JavaScript through Promises and the fetch() API, and learn how to work with JSON data from APIs.",
    videoUrl: "https://youtu.be/DHvZLI7Db8E",
    content: [
      "Promise states: pending, fulfilled, rejected",
      "Using fetch() to make HTTP requests and parse .json() responses",
      "Chaining Promises with then/catch/finally",
      "Avoiding callback hell with Promises",
      "Practical example: calling a public API and displaying data",
    ],
  },
  {
    id: 17,
    image: require("../assets/tech22.png"),
    title: "Topic: Modules & Bundlers Introduction",
    description:
      "Organize code with ES Modules (import/export), understand the difference between development and production builds, and get an introduction to bundlers like Vite and Webpack.",
    videoUrl: "https://youtu.be/5IG4UmULyoA",
    content: [
      "ES Modules: default and named exports, import paths",
      "Difference between dev server and production build",
      "What bundlers do: bundle, minify, code-splitting",
      "Hands-on with Vite: initialize, run dev, build",
    ],
  },
  {
    id: 18,
    image: require("../assets/tech23.png"),
    title: "Topic: Error Handling & Debugging in JavaScript",
    description:
      "Learn how to handle errors gracefully with try/catch and how to debug JavaScript efficiently using browser DevTools.",
    videoUrl: "https://youtu.be/MkESyVB4oUw",
    content: [
      "try/catch/finally and throwing custom errors",
      "Catching errors in async code with .catch or async/await + try/catch",
      "Using source maps and breakpoints in DevTools",
      "Structured logging with console.group, console.table, console.time/timeEnd",
    ],
  },
  {
    id: 19,
    image: require("../assets/tech24.png"),
    title: "Topic: Web Storage — localStorage & sessionStorage",
    description:
      "Learn how to use browser storage APIs to store and retrieve simple client-side data like theme preferences, mock tokens, or checklists.",
    videoUrl: "https://youtu.be/GihQAC1I39Q",
    content: [
      "Core API methods: setItem, getItem, removeItem, clear",
      "Storing structured data with JSON.stringify and JSON.parse",
      "Use cases: saving UI state, caching lightweight data",
      "Limitations and security considerations: avoid sensitive info",
    ],
  },
  {
    id: 24,
    image: require("../assets/tech25.png"),
    title: "Topic: TypeScript Essentials for JavaScript Developers",
    description:
      "Get started with TypeScript to make your code safer and more maintainable: learn basic types, interfaces, type aliases, and generics.",
    videoUrl: "https://youtu.be/zQnBQ4tB3ZA",
    content: [
      "Setting up TypeScript with a minimal tsconfig.json",
      "Basic types: string, number, boolean, union",
      "Interface vs type alias; optional and readonly properties",
      "Function types and simple generics",
      "Refactor a small JavaScript module into TypeScript",
    ],
  },
];

export const advanced: IData[] = [
  {
    id: 20,
    image: require("../assets/tech11.png"),
    title: "Topic: Fetching Data from APIs",
    description:
      "In this topic, you will learn how to use JavaScript to retrieve and work with data from external sources through APIs (Application Programming Interfaces). You’ll discover how to make network requests, handle asynchronous data, and dynamically update web pages with real-time information.",
    videoUrl: "https://youtu.be/cuEtnrL9-H0?si=oX4q8uLr2cYSMfYe",
    content: [
      "What APIs are and how they work",
      "Using the fetch API to make HTTP requests",
      "Understanding Promises and handling asynchronous operations",
      "Parsing JSON responses and accessing data",
      "Error handling in network requests",
      "Updating the DOM with fetched data",
      "Practical examples: loading user profiles, displaying weather data, or fetching news headlines",
      "Introduction to RESTful APIs and common HTTP methods (GET, POST)",
    ],
  },
  {
    id: 21,
    image: require("../assets/tech12.png"),
    title: "Topic: Form Handling & Validation",
    description:
      "In this topic, you’ll learn how to create interactive and user-friendly web forms using JavaScript. You’ll explore techniques to capture user input, validate data before submission, and provide feedback to ensure accuracy and improve user experience.",
    videoUrl: "https://youtu.be/In0nB0ABaUk?si=EFdolpHIMkA9x81c",
    content: [
      "Understanding HTML forms and form elements",
      "Accessing form data using JavaScript",
      "Client-side validation techniques: required fields, input types, and patterns",
      "Writing custom validation logic with JavaScript",
      "Handling form submission events and preventing default behavior",
      "Displaying error messages and success feedback dynamically",
      "Using HTML5 built-in validation attributes",
      "Introduction to third-party validation libraries (optional)",
      "Best practices for user-friendly and accessible forms",
    ],
  },
  {
    id: 22,
    image: require("../assets/tech13.png"),
    title: "Topic: Deploying Your Website",
    description:
      "In this topic, you will learn how to take your completed website live on the internet so that others can access it. You’ll explore different hosting options and understand the steps involved in deploying a website efficiently and securely.",
    videoUrl: "https://youtu.be/9srnyNC1e_o?si=w510RdfuCay4VjO_",
    content: [
      "Overview of web hosting and domain names",
      "Choosing a hosting provider: shared hosting, cloud services, and static site hosts",
      "Introduction to Git and version control basics (optional)",
      "Using platforms like GitHub Pages, Netlify, or Vercel for free and easy deployment",
      "Uploading files via FTP or using deployment tools",
      "Understanding SSL certificates and HTTPS for website security",
      "Basic troubleshooting and website maintenance tips",
      "Best practices for optimizing your website for performance and reliability",
    ],
  },
  {
    id: 23,
    image: require("../assets/tech14.png"),
    title: "Topic: Project: Personal Portfolio Website",
    description:
      "Build a responsive personal portfolio website that showcases your name, a short bio, your skills, and links to your social media or projects. The site will include:",
    videoUrl: "https://youtu.be/ifOJ0R5UQOc?si=XTQSubGRV9-y-_KV",
    content: [
      "A clean homepage with your name and bio",
      "A skills section displayed using Flexbox",
      "A contact form with validation",
      "A button to fetch and display a random quote from a public API (for interactivity)",
      "Responsive design that works well on mobile and desktop",
    ],
  },
  {
    id: 26,
    image: require("../assets/tech26.png"),
    title: "Topic: Advanced Async — Debounce, Throttle & Web APIs",
    description:
      "Optimize scroll and input events using debounce/throttle, and leverage modern Web APIs for efficient interactivity.",
    videoUrl: "https://youtu.be/mSO8bqDFZ3Y",
    content: [
      "Differences between debounce and throttle, and when to use them",
      "Using IntersectionObserver for lazy-loading and infinite scroll",
      "Canceling fetch requests with AbortController",
      "Practical examples: smooth live search and optimized scrolling",
    ],
  },
  {
    id: 27,
    image: require("../assets/tech27.png"),
    title: "Topic: Performance — Core Web Vitals & Lighthouse",
    description:
      "Measure and optimize performance with Lighthouse, understand Core Web Vitals (LCP, CLS, FID/INP), and apply real-world optimization techniques.",
    videoUrl: "https://youtu.be/5bP5A6UOAGk",
    content: [
      "Measuring performance with Lighthouse and PageSpeed",
      "Optimizing images, using preload/preconnect, and critical CSS",
      "Code-splitting, dynamic imports, and tree-shaking",
      "Analyzing bundles and reducing dependency overhead",
    ],
  },
  {
    id: 28,
    image: require("../assets/tech28.png"),
    title: "Topic: Authentication Basics — JWT & OAuth Concepts",
    description:
      "Learn fundamental authentication concepts for SPAs: session vs. token, JWT flow, and an overview of OAuth.",
    videoUrl: "https://youtu.be/996OiexHze0",
    content: [
      "Session cookies vs token-based authentication",
      "JWT structure: header, payload, signature",
      "Where to store tokens (risks and best practices)",
      "OAuth2 and OpenID Connect basics",
    ],
  },
  {
    id: 29,
    image: require("../assets/tech29.png"),
    title: "Topic: Testing — Jest & React Testing Library",
    description:
      "Learn to write unit and component tests, structure test suites properly, and catch bugs early before deployment.",
    videoUrl: "https://youtu.be/7N63cMKosIE",
    content: [
      "Setting up Jest and using common matchers",
      "Using React Testing Library: render, screen, userEvent",
      "Mocking fetch/API calls and snapshot testing",
      "Testing strategies: small, isolated, and maintainable tests",
    ],
  },
];

export const populars: { image: ImageSourcePropType; lesson: IData }[] = [
  {
    image: require("../assets/tech1.png"),
    lesson: basic[0],
  },
  {
    image: require("../assets/tech2.png"),
    lesson: basic[1],
  },
  {
    image: require("../assets/tech3.png"),
    lesson: intermediate[0],
  },
  {
    image: require("../assets/tech4.png"),
    lesson: intermediate[1],
  },
  {
    image: require("../assets/tech5.png"),
    lesson: advanced[1],
  },
];

export const headerSlideData: MemberImageProps[] = [
  {
    name: "slideimg",
    image: basic[0].image,
    lesson: basic[0],
  },
  {
    name: "slideimg",
    image: intermediate[0].image,
    lesson: intermediate[0],
  },
  {
    name: "slideimg",
    image: advanced[0].image,
    lesson: advanced[0],
  },
];
