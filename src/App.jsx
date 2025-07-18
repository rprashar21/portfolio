import './index.css'
import './App.css'
import Navbar from "./components/portfolio/Navbar.jsx";
import Hero from "./components/portfolio/Hero.jsx";
import ModernNavbar from "./components/portfolio/ModernNavbar.jsx";
import Skills from "./components/portfolio/Skills.jsx";


function App() {

    return (
        <>
            {/*<Navbar/>*/}
            <ModernNavbar/>
            <Hero/>
            <Skills/>
        </>
    )
}

export default App
