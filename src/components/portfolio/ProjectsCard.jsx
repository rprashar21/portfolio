import { FaLaptopCode } from "react-icons/fa";

const ProjectsCard = ({name, url, description}) => {
    return (
        <>
            <article className="flex flex-col items-center gap-y-4">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={url} alt={name}
                         className="w-40 md:w-56 rounded-xl border-b-4 border-emerald-200 shadow mb-4"/>
                </a>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-center">{description}</p>
            </article>
        </>
    )
}

export default ProjectsCard