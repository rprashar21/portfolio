import SectionTitle from "./SectionTitle.jsx";
import {skills} from "../../data/data.jsx";
import SkillsCard from "./SkillsCard.jsx";

const Skills = () => {
    return (
        <>
            <SectionTitle text="Skills"/>
            <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => {
                    const {id} = skill
                    return (
                        <SkillsCard key={id} {...skill}/>
                    )
                })
                }
            </div>
        </>
    )
}

export default Skills;