import {nanoid} from "nanoid";

export const links = [
    {id: nanoid(), name: "Home", url: "/"},
    {id: nanoid(), name: "About", url: "/about"},
    {id: nanoid(), name: "Projects", url: "/projects"},
    {id: nanoid(), name: "Contact", url: "/contact"},
];

export const certificates = [
    {id: nanoid(), name: "Github", url: "https://github.com/rohitprashar"},
    {id: nanoid(), name: "Linkedin", url: "https://www.linkedin.com/in/rohitprashar"},
    {id: nanoid(), name: "medium", url: "https://twitter.com/rohitprashar"},
];

export const projects = [
    {id: nanoid(), name: "Project 1", url: "https://github.com/rohitprashar"},
    {id: nanoid(), name: "Project 2", url: "https://github.com/rohitprashar"},
    {id: nanoid(), name: "Project 3", url: "https://github.com/rohitprashar"},
    {id: nanoid(), name: "Project 4", url: "https://github.com/rohitprashar"},
];

export const skills = [
    {
        id: nanoid(),
        name: "Java",
        icon: <faJava className="text-2xl text-emerald-600"/>,
        url: "https://github.com/rohitprashar",
        text: "With 11 years of experience in Java and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
    {
        id: nanoid(),
        name: "React",
        icon: <faReact className="text-2xl text-emerald-600"/>,
        url: "https://github.com/rohitprashar",
        text: "With some years of experience in React and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
    {
        id: nanoid(),
        name: "CI/CD",
        icon: <faKubernetes className="text-2xl text-emerald-600"/>,
        url: "https://github.com/rohitprashar",
        text: "With some years of experience in React and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
    {
        id: nanoid(),
        name: "Cloud Technologies",
        icon: <faAzure className="text-2xl text-emerald-600"/>,
        url: "https://github.com/rohitprashar",
        text: "With some years of experience in React and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
    {
        id: nanoid(),
        name: "Data",
        icon: <faDatabricks className="text-2xl text-emerald-600"/>,
        url: "https://github.com/rohitprashar",
        text: "With some years of experience in React and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
];