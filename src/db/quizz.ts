import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image?: ImageSourcePropType;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      ques: "What is website deployment?",
      choose: [
        "a) Writing code",
        "b) Saving locally",
        "c) Publishing online",
        "d) Designing UI",
      ],
      ans: 2,
    },
    {
      ques: "Which is NOT a free hosting platform?",
      choose: ["a) GitHub Pages", "b) Vercel", "c) Wix", "d) Netlify"],
      ans: 2,
    },
    {
      ques: "What does HTTPS mean?",
      choose: [
        "a) HyperText Transfer Protocol Secure",
        "b) High Text Transfer Page System",
        "c) Host Type Transfer Program System",
        "d) HyperText Tagging Protocol Secure",
      ],
      ans: 0,
    },
    {
      ques: "Why is SSL important?",
      choose: [
        "a) Speed",
        "b) Data encryption",
        "c) Animations",
        "d) SEO only",
      ],
      ans: 1,
    },
    {
      ques: "What is a domain name?",
      choose: [
        "a) Plugin",
        "b) Language",
        "c) Website address",
        "d) Local file",
      ],
      ans: 2,
    },
    {
      ques: "Which is NOT a purpose of deployment?",
      choose: [
        "a) Testing locally",
        "b) Online access",
        "c) Hosting files",
        "d) Live URL",
      ],
      ans: 0,
    },
    {
      ques: "Which file contains page structure?",
      choose: ["a) index.html", "b) style.css", "c) app.js", "d) package.json"],
      ans: 0,
    },
    {
      ques: "Which language styles websites?",
      choose: ["a) HTML", "b) CSS", "c) JS", "d) SQL"],
      ans: 1,
    },
    {
      ques: "Which tag loads CSS?",
      choose: ["a) <link>", "b) <style>", "c) <script>", "d) <css>"],
      ans: 0,
    },
    {
      ques: "Which tag loads JavaScript?",
      choose: ["a) <link>", "b) <script>", "c) <js>", "d) <style>"],
      ans: 1,
    },
    {
      ques: "Which company created JavaScript?",
      choose: ["a) Google", "b) Netscape", "c) Microsoft", "d) Apple"],
      ans: 1,
    },
    {
      ques: "What is console.log used for?",
      choose: [
        "a) Show text in console",
        "b) Write file",
        "c) Create HTML",
        "d) Upload GitHub",
      ],
      ans: 0,
    },
    {
      ques: "Which symbol starts a comment in JS?",
      choose: ["a) //", "b) <!--", "c) **", "d) #"],
      ans: 0,
    },
    {
      ques: "Which of these is NOT a JS data type?",
      choose: ["a) String", "b) Boolean", "c) Integer", "d) Object"],
      ans: 2,
    },
    {
      ques: "Which keyword declares a variable?",
      choose: ["a) var", "b) let", "c) const", "d) All of them"],
      ans: 3,
    },
    {
      ques: "What is 2 + '2' in JS?",
      choose: ["a) 4", "b) '22'", "c) NaN", "d) Error"],
      ans: 1,
    },
    {
      ques: "Which tag is largest heading?",
      choose: ["a) <h6>", "b) <heading>", "c) <h1>", "d) <title>"],
      ans: 2,
    },
    {
      ques: "Which CSS property sets text color?",
      choose: ["a) font-color", "b) color", "c) text-style", "d) background"],
      ans: 1,
    },
    {
      ques: "Which tag creates a link?",
      choose: ["a) <a>", "b) <link>", "c) <href>", "d) <url>"],
      ans: 0,
    },
    {
      ques: "Which CSS unit is relative to font size?",
      choose: ["a) px", "b) em", "c) cm", "d) pt"],
      ans: 1,
    },
  ],

  medium: [
    {
      ques: "What is Git?",
      choose: [
        "a) Hosting",
        "b) Editor",
        "c) Version control system",
        "d) Design tool",
      ],
      ans: 2,
    },
    {
      ques: "What does GitHub do?",
      choose: [
        "a) Hosts servers",
        "b) Stores code & history",
        "c) Builds sites",
        "d) Email lists",
      ],
      ans: 1,
    },
    {
      ques: "What command initializes a repo?",
      choose: ["a) git start", "b) git create", "c) git init", "d) git new"],
      ans: 2,
    },
    {
      ques: "What command stages all changes?",
      choose: [
        "a) git commit -m",
        "b) git push",
        "c) git stage",
        "d) git add .",
      ],
      ans: 3,
    },
    {
      ques: "Which uploads code to GitHub?",
      choose: ["a) git fetch", "b) git pull", "c) git push", "d) git upload"],
      ans: 2,
    },
    {
      ques: "What is a repository?",
      choose: [
        "a) Builder",
        "b) Code storage with history",
        "c) Tag list",
        "d) Protocol",
      ],
      ans: 1,
    },
    {
      ques: "Where enable GitHub Pages?",
      choose: ["a) Issues", "b) README", "c) Settings", "d) Commits log"],
      ans: 2,
    },
    {
      ques: "Default branch for Pages?",
      choose: ["a) test", "b) main", "c) private", "d) develop"],
      ans: 1,
    },
    {
      ques: "GitHub Pages supports what type?",
      choose: [
        "a) PHP + MySQL",
        "b) Static frontend",
        "c) Node.js APIs",
        "d) React Native",
      ],
      ans: 1,
    },
    {
      ques: "Which is a GitHub Pages URL?",
      choose: [
        "a) https://username.github.io/project",
        "b) http://localhost:3000",
        "c) https://myhost.dev",
        "d) http://ftp.server.com",
      ],
      ans: 0,
    },
    {
      ques: "What does git clone do?",
      choose: [
        "a) Deletes repo",
        "b) Copies repo to local machine",
        "c) Creates a branch",
        "d) Commits code",
      ],
      ans: 1,
    },
    {
      ques: "What is the difference between git pull and fetch?",
      choose: [
        "a) Same thing",
        "b) Pull downloads & merges, fetch only downloads",
        "c) Pull deletes code",
        "d) Fetch merges automatically",
      ],
      ans: 1,
    },
    {
      ques: "Which command shows commit history?",
      choose: [
        "a) git status",
        "b) git history",
        "c) git log",
        "d) git commits",
      ],
      ans: 2,
    },
    {
      ques: "What is a branch in Git?",
      choose: [
        "a) Backup file",
        "b) A separate line of development",
        "c) A commit",
        "d) An issue",
      ],
      ans: 1,
    },
    {
      ques: "Which merges changes into another branch?",
      choose: ["a) git pull", "b) git merge", "c) git clone", "d) git init"],
      ans: 1,
    },
    {
      ques: "Which file ignores files in Git?",
      choose: [
        "a) .gitignore",
        "b) git.config",
        "c) ignore.json",
        "d) config.yml",
      ],
      ans: 0,
    },
    {
      ques: "Which describes npm?",
      choose: [
        "a) Node Package Manager for JS libraries",
        "b) CSS framework",
        "c) Git tool",
        "d) Web server",
      ],
      ans: 0,
    },
    {
      ques: "Which command starts a React app?",
      choose: [
        "a) npm run dev",
        "b) npm start",
        "c) node app.js",
        "d) react run",
      ],
      ans: 1,
    },
    {
      ques: "Which React hook manages state?",
      choose: ["a) useFetch", "b) useData", "c) useState", "d) useEffect"],
      ans: 2,
    },
    {
      ques: "Which function selects element by ID?",
      choose: [
        "a) document.querySelector('#id')",
        "b) document.getElementsByClass",
        "c) document.id",
        "d) document.find",
      ],
      ans: 0,
    },
  ],

  hard: [
    {
      ques: "What is Netlify used for?",
      choose: [
        "a) Writing JS",
        "b) Storing CSS",
        "c) Hosting/deploying frontend",
        "d) Running SQL",
      ],
      ans: 2,
    },
    {
      ques: "To connect GitHub repo to Netlify you must...",
      choose: [
        "a) Add script tag",
        "b) Install CLI only",
        "c) Authorize GitHub",
        "d) Use FTP",
      ],
      ans: 2,
    },
    {
      ques: "What does continuous deployment mean?",
      choose: [
        "a) Redeploy after every push",
        "b) Code never stops",
        "c) Publish manually",
        "d) Refresh continuously",
      ],
      ans: 0,
    },
    {
      ques: "Which folder deploy for React?",
      choose: ["a) src/", "b) public/", "c) build/", "d) node_modules/"],
      ans: 2,
    },
    {
      ques: "Reason site shows blank screen?",
      choose: [
        "a) Too much CSS",
        "b) Wrong build folder/script path",
        "c) Used HTML5",
        "d) Blocked IP",
      ],
      ans: 1,
    },
    {
      ques: "First check if GitHub Pages shows 404?",
      choose: [
        "a) JS syntax",
        "b) index.html location",
        "c) Color scheme",
        "d) favicon.ico",
      ],
      ans: 1,
    },
    {
      ques: "Best way to test deployed site?",
      choose: [
        "a) Only laptop",
        "b) Only mobile",
        "c) Multiple devices/browsers",
        "d) Ask a friend",
      ],
      ans: 2,
    },
    {
      ques: "Improve performance of site?",
      choose: [
        "a) Add music",
        "b) Larger images",
        "c) Minify CSS/JS & optimize images",
        "d) Inline styles",
      ],
      ans: 2,
    },
    {
      ques: "Why live site beneficial?",
      choose: [
        "a) Copy easier",
        "b) Show work to employers",
        "c) Faster coding",
        "d) Typing speed",
      ],
      ans: 1,
    },
    {
      ques: "Tool tracking code changes?",
      choose: ["a) VS Code", "b) Git", "c) Chrome", "d) Netlify"],
      ans: 1,
    },
    {
      ques: "How organize frontend project?",
      choose: [
        "a) One file",
        "b) Build dir + separate assets",
        "c) Only .txt files",
        "d) Random",
      ],
      ans: 1,
    },
    {
      ques: "NOT required for GitHub Pages?",
      choose: [
        "a) GitHub account",
        "b) HTML/CSS project",
        "c) Node.js backend",
        "d) Repo",
      ],
      ans: 2,
    },
    {
      ques: "Homepage file usually?",
      choose: ["a) main.css", "b) index.html", "c) readme.md", "d) script.js"],
      ans: 1,
    },
    {
      ques: "Benefit of custom domain?",
      choose: [
        "a) Faster",
        "b) Easier/professional",
        "c) Saves space",
        "d) Helps JS",
      ],
      ans: 1,
    },
    {
      ques: "What is a build tool like Webpack/Vite used for?",
      choose: [
        "a) Minify/bundle code",
        "b) Host websites",
        "c) Edit images",
        "d) Manage databases",
      ],
      ans: 0,
    },
    {
      ques: "What is an environment variable?",
      choose: [
        "a) CSS variable",
        "b) Config value stored outside code",
        "c) Database column",
        "d) Git branch",
      ],
      ans: 1,
    },
    {
      ques: "What is a closure in JS?",
      choose: [
        "a) Function inside another with access to parent scope",
        "b) End of program",
        "c) A bug",
        "d) Git command",
      ],
      ans: 0,
    },
    {
      ques: "What is the event loop in JS?",
      choose: [
        "a) For loop",
        "b) Mechanism handling async tasks/callbacks",
        "c) Infinite recursion",
        "d) While loop",
      ],
      ans: 1,
    },
    {
      ques: "What is Docker used for?",
      choose: [
        "a) Virtualized containers for apps",
        "b) HTML layout",
        "c) Image hosting",
        "d) Code editor",
      ],
      ans: 0,
    },
    {
      ques: "What is CI/CD pipeline?",
      choose: [
        "a) Automated build, test, deploy process",
        "b) A CSS framework",
        "c) Git command",
        "d) Hosting server",
      ],
      ans: 0,
    },
  ],
};
