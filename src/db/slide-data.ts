import { ImageSourcePropType } from "react-native";
import { MemberImageProps } from "../screens/home/component/MemberImage";
import { IData } from "../types";

export const basic: IData[] = [
  {
    id: 1,
    image: require("../assets/tech1.png"),
    title: "Lesson 1: Introduction to Web Development",
    description:
      "Khám phá tổng quan về lập trình web, các vai trò front-end, back-end và full-stack. Hiểu cách trang web hoạt động qua mô hình client-server và làm quen với công cụ phát triển cơ bản.",
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
    title: "Lesson 2: Basic HTML - Advanced HTML",
    description:
      "Làm quen với HTML – ngôn ngữ xây dựng khung sườn website. Học cách tạo văn bản, liên kết, hình ảnh, biểu mẫu và dùng thẻ semantic để tăng tính rõ ràng, dễ tiếp cận.",
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
    title: "Lesson 3: Basic CSS - Advanced CSS",
    description:
      "Tìm hiểu cách dùng CSS để tạo phong cách cho trang web: màu sắc, font chữ, bố cục. Tiến tới kỹ thuật nâng cao như box model, grid, animation để tạo giao diện chuyên nghiệp.",
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
    title: "Lesson 4 : Flexbox & Responsive Design",
    description:
      "Học cách tạo layout linh hoạt bằng Flexbox và tối ưu giao diện cho mọi thiết bị với responsive design. Áp dụng media queries và mobile-first để xây dựng website hiện đại.",
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
    title: "Lesson 5: Overall Summary: Web Development Fundamentals",
    description:
      "Tổng hợp kiến thức từ HTML, CSS đến Flexbox & responsive design. Học viên nắm vững nền tảng để xây dựng website hoàn chỉnh và sẵn sàng bước sang JavaScript hoặc framework.",
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
];

export const intermediate: IData[] = [
  {
    id: 6,
    image: require("../assets/tech6.png"),
    title: "Lesson 6: JavaScript Basics",
    description:
      "In this lesson, you will be introduced to JavaScript, the programming language that adds interactivity and dynamic behavior to web pages. You’ll learn how to write and run simple scripts that respond to user actions and manipulate page content.",
    videoUrl: "https://youtu.be/DHjqpvDnNGE?si=rz07OhA_PjXJyqzB",
    content: [
      "What is JavaScript and how it works with HTML and CSS",
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
    title: "Lesson 7: Functions, Arrays, and Objects",
    description:
      "In this lesson, you will deepen your understanding of JavaScript by learning about key programming concepts that enable you to write more organized and efficient code. You’ll explore how to use functions to encapsulate reusable logic, manage collections of data with arrays, and structure complex data using objects.",
    videoUrl: "https://youtu.be/yQ1fz8LY354?si=NqwmNMDQrY82h3C4",
    content: [
      "Defining and invoking functions, including parameters and return values",
      "Understanding function scope and hoisting",
      "Working with arrays: creation, accessing elements, common methods (push, pop, shift, unshift, forEach, map)",
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
    title: "Lesson 8: DOM Manipulation & Events",
    description:
      "In this lesson, you’ll learn how to make your web pages truly interactive by using JavaScript to manipulate the Document Object Model (DOM) and respond to user events. You’ll gain hands-on experience selecting, modifying, and creating HTML elements dynamically, as well as handling events like clicks, key presses, and more.",
    videoUrl: "https://youtu.be/y17RuWkWdn8?si=QDvJZ0XAHqdvueuI",
    content: [
      "Understanding the DOM structure and how JavaScript interacts with it",
      "Selecting DOM elements using methods like getElementById, querySelector, and get ElementsByClassName",
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
    title: "Lesson 9: Advanced JavaScript",
    description:
      "This lesson takes your JavaScript skills to the next level by introducing advanced concepts and techniques that allow you to write more efficient, maintainable, and powerful code. You’ll explore modern JavaScript features and best practices used in real-world web development.",
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
    title: "Lesson 10: Overall Summary: JavaScript",
    description:
      "Starting wih Lesson 6: JavaScript Basics, you learn the foundational programming concepts including variables, data types, functions, conditionals, loops, and how to embed JavaScript into web pages to create interactivity. In Lesson 7: Functions, Arrays, and Objects, you expand your skills by mastering reusable functions, working with arrays to handle lists of data, and using objects to model complex data structures—key to writing organized and maintainable code. Lesson 8: DOM Manipulation & Events focuses on dynamically interacting with web pages. You’ll learn how to select, modify, and create HTML elements, as well as handle user events like clicks and key presses, making your sites responsive and interactive. Finally, Lesson 9: Advanced JavaScript introduces modern language features such as ES6+ syntax (arrow functions, destructuring), asynchronous programming with Promises and async/await, closures, prototypes, and modules. These concepts prepare you to write clean, efficient, and scalable JavaScript code suitable for real-world applications.",
    videoUrl: "https://youtu.be/lkIFF4maKMU?si=DIOXO9Dnd-Eezf-r",
  },
];
export const advanced: IData[] = [
  {
    id: 20,
    image: require("../assets/tech11.png"),
    title: "Lesson 11: Fetching Data from APIs",
    description:
      "In this lesson, you will learn how to use JavaScript to retrieve and work with data from external sources through APIs (Application Programming Interfaces). You’ll discover how to make network requests, handle asynchronous data, and dynamically update web pages with real-time information.",
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
    title: "Lesson 12: Form Handling & Validation",
    description:
      "In this lesson, you’ll learn how to create interactive and user-friendly web forms using JavaScript. You’ll explore techniques to capture user input, validate data before submission, and provide feedback to ensure accuracy and improve user experience.",
    videoUrl: "https://youtu.be/In0nB0ABaUk?si=EFdolpHIMkA9x81c",
    content: [
      "Understanding HTML forms and form elements",
      "Accessing form data using JavaScript",
      "Client-side validation techniques: required fields, input types, patterns",
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
    title: "Lesson 13: Deploying Your Website",
    description:
      "In this lesson, you will learn how to take your completed website live on the internet so that others can access it. You’ll explore different hosting options and understand the steps involved in deploying a website efficiently and securely.",
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
    title: "Lesson 14: Project: Personal Portfolio Website",
    description:
      "Create a responsive personal portfolio website that showcases your name, a short bio, your skills, and links to your social media or projects. The site will include:",
    videoUrl: "https://youtu.be/ifOJ0R5UQOc?si=XTQSubGRV9-y-_KV",
    content: [
      "A clean homepage with your name and bio",
      "A skills section displayed using Flexbox",
      "A contact form with validation",
      "A button to fetch and display a random quote from a public API (for interactivity)",
      "Responsive design that works well on mobile and desktop",
    ],
  },
];

export const populars: { image: ImageSourcePropType; lesson: IData }[] = [
  {
    image: require("../assets/popular-image1.png"),
    lesson: basic[0],
  },
  {
    image: require("../assets/popular-image2.png"),
    lesson: basic[1],
  },
  {
    image: require("../assets/popular-image3.png"),
    lesson: intermediate[0],
  },
  {
    image: require("../assets/popular-image4.png"),
    lesson: intermediate[1],
  },
  {
    image: require("../assets/popular-image5.png"),
    lesson: advanced[1],
  },
];

export const headerSlideData: MemberImageProps[] = [
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: basic[0],
  },
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: intermediate[0],
  },
  {
    name: "slideimg",
    image: require("../assets/slide1.png"),
    lesson: advanced[0],
  },
];
