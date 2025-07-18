import {skills} from "../../data/data.jsx";
import SkillsCard from "./SkillsCard.jsx";

const Skills = () => {
    return (
        <>

            <section id="skills" className="line-clamp-2 bg-emerald-50 py-6">
                <span className="text-3xl font-bold text-emerald-700 mb-6">Skills</span>

                <div className="py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill) => {
                        const {id} = skill
                        return (
                            <SkillsCard key={id} {...skill}/>
                        )
                    })
                    }
                </div>
            </section>

        </>
    )
}

export default Skills;