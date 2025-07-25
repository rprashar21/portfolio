import coder from "../../assets/coder.jpg"
import {FaGithubSquare, FaLinkedin, FaMedium} from "react-icons/fa"

const Hero = () => {
    return (
        <>
            <div className="bg-emerald-100 py-8">
                <div
                    className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
                    <article>
                        <div className="flex gap-x-4 mt-4">
                            <h7 className="text-2xl font-bold tracking-wider">Full Stack Web
                                Developer</h7>
                        </div>
                        <article className="hidden md:block mt-4">
                            <img className="w-1/2  border-b-emerald-100 rounded-xl" src={coder}
                                 alt="coder"/>
                        </article>
                        <div className="flex gap-x-6 mt-4">


                            <a href="https://github.com/rohitprashar" target="_blank"
                               rel="noopener noreferrer"><FaGithubSquare
                                className="text-2xl"/></a>
                            <a href="https://www.linkedin.com/in/rohit-prashar-3a9b18234/"
                               target="_blank" rel="noopener noreferrer"><FaLinkedin
                                className="text-2xl"/></a>
                            <a href="https://medium.com/@rohitprashar712" target="_blank"
                               rel="noopener noreferrer">
                                <FaMedium className="text-2xl"/></a>

                        </div>
                    </article>

                </div>
            </div>

        </>
    );
};

export default Hero