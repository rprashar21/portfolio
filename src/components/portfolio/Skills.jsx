import {skills} from "../../data/data.jsx";
import SkillsCard from "./SkillsCard.jsx";

const Skills = () => {
    return (
        <>
            <section id="skills" className="bg-emerald-50 py-12">
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