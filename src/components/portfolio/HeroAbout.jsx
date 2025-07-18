import {FaGithubSquare, FaLinkedin, FaMedium} from "react-icons/fa";
import coder from '../../assets/coder.jpg'; // update with your path
import about from '../../assets/about.jpg'

const HeroAbout = () => (
    <section className="bg-emerald-100 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-stretch">
            {/* HERO CARD */}
            <div className=" p-8 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-2 text-emerald-700">Full Stack Web
                    Developer</h2>
                <img src={coder} alt="coder"
                     className="w-40 md:w-56 rounded-xl border-b-4 border-emerald-200 shadow mb-4"/>
                <div className="flex gap-6 mt-4">
                    <a href="https://github.com/rohitprashar" target="_blank"
                       rel="noopener noreferrer">
                        <FaGithubSquare className="text-3xl hover:text-emerald-800 transition"/>
                    </a>
                    <a href="https://www.linkedin.com/in/rohit-prashar-3a9b18234/" target="_blank"
                       rel="noopener noreferrer">
                        <FaLinkedin className="text-3xl hover:text-emerald-800 transition"/>
                    </a>
                    <a href="https://medium.com/@rohitprashar712" target="_blank"
                       rel="noopener noreferrer">
                        <FaMedium className="text-3xl hover:text-emerald-800 transition"/>
                    </a>
                </div>
            </div>

            {/* ABOUT CARD */}
            <div className=" p-8 flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-2 text-emerald-700">I'm Rohit Prashar</h2>
                <img src={about} alt="coder"
                     className="w-40 md:w-75 rounded-xl border-b-4 border-emerald-200 shadow mb-4"/>
                <p className="text-lg text-gray-700 mb-4">
                    I'm a practical engineer who simplifies complex problems with clear, logical
                    solutions and efficient execution.
                </p>
            </div>
        </div>
    </section>
);

export default HeroAbout;
