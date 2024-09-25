const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "https://bekathunder215.github.io/mywebsite/",
  title: "JS.",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Ioannis Bekiaris",
  role: "Aspiring Software Developer",
  description:
    "I’m a physics graduate with a specialization in computer science and programming, currently aspiring to be a software engineer. I have hands-on experience in various programming languages and technologies, including JavaScript, HTML5, Python, C, C++, and React. I enjoy tackling challenging problems and building innovative projects. A small fun fact about me is that I geek out with IoT and all kinds of things that are possible with coding and embedded programming.",
  resume: "",
  social: {
    linkedin: "https://linkedin.com/in/ioannis-bekiaris-737894277/",
    github: "https://github.com/Bekathunder215",
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Full Stack Contacts App",
    description:
      "An introductory application designed to demonstrate CRUD operations by creating an API with a database and using it with React.",
    stack: [
      "Node.js",
      "Express.js",
      "React",
      "SQLite",
      "CSS",
      "HTML",
      "JavaScript",
      "Python",
    ],
    sourceCode: "https://github.com/Bekathunder215/FullStackContactApp",
    livePreview: "",
  },
  {
    name: "Machine Learning",
    description:
      "This repository includes small scripts focused on learning and correctly applying machine learning concepts using Pytorch. The projects range from basic linear and logistic regression to more advanced topics like transfer learning and custom datasets, implementations of fully connected linear neural networks and convolutional neural networks.",
    stack: ["Pytorch", "Torchvision", "Numpy", "Pandas", "ssl"],
    sourceCode:
      "https://github.com/Bekathunder215/Pytorch-and-ML-mini-projects",
    livePreview: "",
  },
  {
    name: "JavaScript",
    description:
      "This repository includes various small projects implemented in JavaScript. The focus is on demonstrating core concepts and basic programming skills through interactive web applications and games.",
    stack: ["HTML", "JavaScript", "CSS"],
    sourceCode: "https://github.com/Bekathunder215/Javascript",
    livePreview: "",
  },
  {
    name: "C and Cpp",
    description:
      "This repository includes various small projects implemented in C and C++. The focus is on demonstrating core concepts and basic programming skills essential for an embedded software engineering role.",
    stack: ["C", "Cpp"],
    sourceCode: "https://github.com/Bekathunder215/C-and-Cpp",
    livePreview: "",
  },
  {
    name: "Python",
    description:
      "This repository is a compilation of various Python projects aimed at practicing and enhancing Python programming skills. Each project focuses on different aspects of Python, ranging from basic algorithms to more complex applications.",
    stack: ["Python", "OpenCV", "Pygame", "various std libraries"],
    sourceCode: "https://github.com/Bekathunder215/python",
    livePreview: "",
  },
  {
    name: "React",
    description:
      "This repository is a compilation of various small React projects aimed at practicing and enhancing React development skills. Each project focuses on different aspects of React, ranging from basic components to more complex applications.",
    stack: ["React", "JavaScript", "CSS", "HTML"],
    sourceCode: "https://github.com/Bekathunder215/React",
    livePreview: "",
  },
  {
    name: "Predictive Maintenance with ML",
    description:
      "Naval vessels rely on complex engines that require timely maintenance to ensure optimal performance. This project implements a neural network model to predict the decay state coefficients of key engine components based on various sensor readings. The project also includes data cleaning, heatmap visualizations, and a PyTorch-based model to make predictions.",
    stack: [
      "Pytorch",
      "Scikit-learn",
      "Numpy",
      "Pandas",
      "Seaborn",
      "Matplotlib",
    ],
    sourceCode:
      "https://github.com/Bekathunder215/vessel-predictive-maintenance-ml",
    livePreview: "",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Python",
  "Flask",
  "Material UI",
  "C",
  "Cpp",
  "Machine Learning",
  "Large Language Models",
  "Git",
  "CI/CD",
  "Matlab",
  "Node.js",
  "Arduino",
  "Office Pack",
  "Troubleshooting",
  "Communication",
  "Build Strong Relationships",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "johnbekiaris13@gmail.com",
  sms: "+4593956980",
};

export { about, contact, header, projects, skills };
