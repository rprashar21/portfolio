import { nanoid } from "nanoid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faReact } from '@fortawesome/free-brands-svg-icons';
import { faServer, faCloud, faDatabase } from '@fortawesome/free-solid-svg-icons';

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
    {
        id: nanoid(),
        name: "AI Resume Tailor",
        url: "https://github.com/rohitprashar/ai-resume-tailor",
        description: "An AI-powered resume generator that takes a job description and creates a tailored resume, suggests a study plan, and highlights gaps—built with React, Spring Boot, and MongoDB. Solves the real-world hiring prep problem and showcases full-stack integration with intelligent features, ideal for companies valuing AI-enhanced productivity tools."
    },
    {
        id: nanoid(),
        name: "Distributed CQRS Event Store",
        url: "https://github.com/rohitprashar/cqrs-eventstore-simulator",
        description: "A backend simulator using Spring Boot to demonstrate CQRS + Event Sourcing architecture with in-memory event store, DLQ, retry mechanisms, and replay-debug endpoints. Designed for companies building scalable, fault-tolerant distributed systems and want clear auditability and resilience."
    },
    {
        id: nanoid(),
        name: "Real-Time Delivery Tracker",
        url: "https://github.com/rohitprashar/delivery-tracking",
        description: "A telemetry-based system for delivery drivers that stores and queries live location, package count, and item details into Azure Cosmos DB. Uses Azure Functions and Maps API, representing real-time event processing and cloud-native development that logistics or mobility companies demand."
    },
    {
        id: nanoid(),
        name: "Smart Poller for Integration Tests",
        url: "https://github.com/rohitprashar/smart-rest-poller",
        description: "A Java test utility using Fibonacci and exponential backoff polling strategies for async REST calls. Speeds up integration testing in microservices-based systems. Companies looking for CI/CD optimization and robust testing frameworks would benefit from this."
    },
    {
        id: nanoid(),
        name: "Login Dashboard App (React)",
        url: "https://github.com/rprashar21/login-dash",
        description: "Frontend app with secure login, token-based auth, and dashboard views. Built with React and Vite. Fits use cases like admin panels or SaaS dashboards."
    },
    {
        id: nanoid(),
        name: "CsvLoader",
        url: "https://github.com/rprashar21/login-dash",
        description: "Frontend app with secure login, token-based auth, and dashboard views. Built with React and Vite. Fits use cases like admin panels or SaaS dashboards."
    },



];


export const skills = [
    {
        id: nanoid(),
        name: "Java",
        icon: <FontAwesomeIcon icon={faJava} className="text-2xl text-emerald-600" />,
        url: "https://github.com/rohitprashar",
        text: "With 11 years of experience in Java and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
    {
        id: nanoid(),
        name: "React",
        icon: <FontAwesomeIcon icon={faReact} className="text-2xl text-emerald-600" />,
        url: "https://github.com/rohitprashar",
        text: "With some years of experience in React and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
    {
        id: nanoid(),
        name: "CI/CD",
        icon: <FontAwesomeIcon icon={faServer} className="text-2xl text-emerald-600" />,
        url: "https://github.com/rohitprashar",
        text: "With some years of experience in React and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
    {
        id: nanoid(),
        name: "Cloud Technologies",
        icon: <FontAwesomeIcon icon={faCloud} className="text-2xl text-emerald-600" />,
        url: "https://github.com/rohitprashar",
        text: "With some years of experience in React and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
    {
        id: nanoid(),
        name: "Data",
        icon: <FontAwesomeIcon icon={faDatabase} className="text-2xl text-emerald-600" />,
        url: "https://github.com/rohitprashar",
        text: "With some years of experience in React and 6 years of experience in SpringBoot, I have a deep understanding of the Java programming language and its frameworks."
    },
];