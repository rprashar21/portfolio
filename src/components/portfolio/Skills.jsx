import SectionTitle from "./SectionTitle.jsx";
import {skills} from "../../data/data.jsx";
import SkillsCard from "./SkillsCard.jsx";

const Skills = () => {
    return (
        <>
            <SectionTitle/>
            <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skill) => {
                    const {id, name, icon, url, text} = skill;
                    return (
                        // <article className="flex flex-col items-center gap-y-4" key={id}>
                        //     <a href={url} target="_blank" rel="noopener noreferrer">
                        //         {icon}
                        //     </a>
                        //     <h3 className="text-2xl font-bold">{name}</h3>
                        //     <p className="text-center">{text}</p>
                        // </article>
                        <SkillsCard key={id} {...skill}/>
                    )
                })
                }
            </div>
        </>
    )
}

export default Skills;