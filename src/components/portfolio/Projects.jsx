import {projects} from "../../data/data.jsx"
import ProjectsCard from "./ProjectsCard"

const Projects = () => {
    return (
        <>
            <section id="projects" className="bg-emerald-50 py-12">
                <div className="py-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => {
                        const {id} = project
                        return (
                            <ProjectsCard key={id} {...project}/>
                        )
                    })
                    }
                </div>
            </section>
        </>
    )
}
export default Projects