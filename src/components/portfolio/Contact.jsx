import { FaGithubSquare, FaLinkedin, FaMedium } from "react-icons/fa";

const Contact = () => (
    <section id="contact" className="bg-emerald-50 py-12">
        <div className="max-w-lg mx-auto px-6 md:px-8">
            <h2 className="text-3xl font-bold text-emerald-700 mb-6">Contact Me</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6">
                {/* Phone and Email */}
                <div>
                    <p className="text-gray-700 mb-2">Phone:</p>
                    <a href="tel:+919876543210" className="text-lg font-semibold text-emerald-600 hover:underline block">
                        +44 074670 70189
                    </a>
                </div>
                <div>
                    <p className="text-gray-700 mb-2">Email:</p>
                    <a href="mailto:rohitprashar712@gmail.com" className="text-lg font-semibold text-emerald-600 hover:underline block">
                        rohitprashar712@gmail.com
                    </a>
                </div>
                {/* Social Icons */}
                <div>
                    <p className="text-gray-700 mb-2">Connect:</p>
                    <div className="mx-auto flex gap-x-4 justify-center">
                        <a href="https://github.com/rohitprashar" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare className="text-3xl hover:text-emerald-800 transition"/>
                        </a>
                        <a href="https://www.linkedin.com/in/rohit-prashar-3a9b18234/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl hover:text-emerald-800 transition"/>
                        </a>
                        <a href="https://medium.com/@rohitprashar712" target="_blank" rel="noopener noreferrer">
                            <FaMedium className="text-3xl hover:text-emerald-800 transition"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
