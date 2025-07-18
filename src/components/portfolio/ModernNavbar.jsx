import {useState} from "react";
// Sample links array (you can use your own)
const links = [
    {id: 1, name: "Home", url: "#"},
    {id: 2, name: "About", url: "#about"},
    {id: 3, name: "Projects", url: "#projects"},
    {id: 4, name: "Contact", url: "#contact"}
];

const ModernNavbar = () => {
    const [active, setActive] = useState("Home"); // Optional: Track active link

    return (
        <nav
            className="bg-emerald-400/80 backdrop-blur-sm text-white px-8 py-4 shadow-lg border-b border-emerald-600">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Left: Logo/Name */}
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    <span className="text-gray-900">Software</span>
                    <span className="text-white">Engineer</span>
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
            </div>
        </nav>
    );
};

export default ModernNavbar;
