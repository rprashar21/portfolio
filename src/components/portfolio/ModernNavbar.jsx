import { useState, useEffect } from "react";
import {FaDownload, FaBars, FaTimes, FaEye} from 'react-icons/fa';

// Sample links array (you can use your own)
const links = [
    {id: 1, name: "Home", url: "#home"},
    {id: 2, name: "About", url: "#about"},
    {id: 3, name: "certifications", url: "#certifications"},
    {id: 4, name: "Contact", url: "#contact"}
];

const ModernNavbar = () => {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [scrolled]);

    // Close mobile menu when clicking on a link
    const handleLinkClick = (linkName) => {
        setActive(linkName);
        setIsOpen(false);
    };

    return (
        <nav
            className="sticky top-0 z-50 bg-emerald-400/80 backdrop-blur-sm text-white px-8 py-4 shadow-lg border-b border-emerald-600">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Logo/Name */}
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    <span className="text-gray-900">Rohit</span>
                    <span className="text-white"> Prashar</span>
                </h2>

                {/* Center/Right: Links */}
                <div className="flex space-x-2 md:space-x-6">
                    {links.map((link) => (
                        <a
                            className={`capitalize text-base md:text-lg px-3 py-1 rounded-lg transition 
                ${active === link.name
                  ? "bg-white/30 text-gray-900 font-bold shadow"
                  : "hover:bg-white/20 hover:text-gray-900"}
              `}
                            key={link.id}
                            href={link.url}
                            onClick={() => setActive(link.name)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
                {/* Resume Download Button */}
                <div className="flex gap-4">
                    {/* Download Button */}
                    <a
                        href="/resume.pdf"
                        download
                        className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-medium rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-emerald-700/50"
                    >
                        <FaDownload className="text-sm"/>
                        <span className="hidden sm:inline">Resume</span>
                    </a>

                    {/* Preview Button */}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors shadow-lg hover:shadow-blue-700/50"
                    >
                        <FaEye className="text-sm"/>
                        <span className="hidden sm:inline">Preview</span>
                    </a>
                </div>


            </div>
        </nav>
    );
};

export default ModernNavbar;
