import './index.css'
import './App.css'
import Navbar from "./components/portfolio/Navbar.jsx";
import Hero from "./components/portfolio/Hero.jsx";
import ModernNavbar from "./components/portfolio/ModernNavbar.jsx";
import Skills from "./components/portfolio/Skills.jsx";
import About from "./components/portfolio/About.jsx";
import Contact from "./components/portfolio/Contact.jsx";
import HeroAbout from "./components/portfolio/HeroAbout.jsx";
import React from "react";


function App() {

    return (
        <>
            {/*<Navbar/>*/}
            <ModernNavbar/>
            <HeroAbout/>
            {/*<Hero/>*/}
            <Skills/>
            {/*<About/>*/}
            <Contact/>
        </>
    )
}

export default App
