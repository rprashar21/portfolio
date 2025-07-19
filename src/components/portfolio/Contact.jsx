import {
    FaDatabase,
    FaGithubSquare,
    FaLinkedin,
    FaMedium,
    FaMicrosoft,
    FaRobot
} from "react-icons/fa";

const Contact = () => (
    <section className="bg-emerald-50 py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 items-start">
            {/* Certifications Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8 h-[500px]" id="certifications">
                <h2 className="text-3xl font-bold text-emerald-700 mb-4">Certifications</h2>
                <a
                    href="https://learn.microsoft.com/en-gb/users/ron21-8395/credentials/570462d11e244571?ref=https%3A%2F%2Fwww.linkedin.com%2F"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-emerald-50 rounded-lg shadow hover:shadow-emerald-200 p-4 transition"
                >
                    <FaMicrosoft className="text-3xl text-emerald-700"/>
                    <div>
                        <div className="font-semibold text-lg text-emerald-900">
                            Microsoft Certified: Azure Developer Associate
                        </div>
                        <div className="text-gray-500 text-sm">Microsoft</div>
                    </div>
                </a>
                <a
                    href="https://credentials.databricks.com/5ff6d398-ba2a-4b63-aab5-9237e18285c8#acc.ZqFEHNR3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-emerald-50 rounded-lg shadow hover:shadow-emerald-200 p-4 transition"
                >
                    <FaDatabase className="text-3xl text-emerald-700"/>
                    <div>
                        <div className="font-semibold text-lg text-emerald-900">
                            Databricks Certified Data Engineer Associate
                        </div>
                        <div className="text-gray-500 text-sm">Databricks</div>
                    </div>
                </a>
                <a
                    href="https://certificates.platform.qa.com/31aa3d590abdc80e82c7809f1d52e92c40b3b256.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 bg-emerald-50 rounded-lg shadow hover:shadow-emerald-200 p-4 transition"
                >
                    <FaRobot className="text-3xl text-emerald-700"/>
                    <div>
                        <div className="font-semibold text-lg text-emerald-900">
                            Using Generative AI in Azure and Microsoft Power Platform
                        </div>
                        <div className="text-gray-500 text-sm">Microsoft</div>
                    </div>
                </a>
            </div>
            {/* Contact Card */}
            <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-8 h-[500px]" id="contact">
                <h2 className="text-3xl font-bold text-emerald-700 mb-4">Contact Me</h2>
                {/* Phone */}
                <div>
                    <p className="text-2xl text-gray-900 font-semibold mb-2">Phone:</p>
                    <a href="tel:+4407467070189"
                       className="text-lg font-semibold text-emerald-600 hover:underline block">
                        +44 074670 70189
                    </a>
                </div>
                {/* Email */}
                <div>
                    <p className="text-2xl text-gray-900 font-semibold mb-2">Email:</p>
                    <a href="mailto:rohitprashar712@gmail.com"
                       className="text-lg font-semibold text-emerald-600 hover:underline block">
                        rohitprashar712@gmail.com
                    </a>
                </div>
                {/* Social Icons */}
                <div>
                    <p className="text-2xl text-gray-900 font-semibold mb-2">Connect:</p>
                    <div className="flex gap-x-4 justify-center">
                        <a href="https://github.com/rohitprashar" target="_blank"
                           rel="noopener noreferrer">
                            <FaGithubSquare className="text-3xl hover:text-emerald-800 transition"/>
                        </a>
                        <a href="https://www.linkedin.com/in/rohitprashar/"
                           target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-3xl hover:text-emerald-800 transition"/>
                        </a>
                        <a href="https://medium.com/@rohitprashar712" target="_blank"
                           rel="noopener noreferrer">
                            <FaMedium className="text-3xl hover:text-emerald-800 transition"/>
                        </a>
                    </div>
                </div>
            </div>


        </div>
    </section>
);

export default Contact;

