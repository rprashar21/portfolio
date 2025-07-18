const SkillsCard =({name,icon,url,text})=>{
    return(
        <>
            <article className="flex flex-col items-center gap-y-4">
                <a href={url} target="_blank" rel="noopener noreferrer">
                    {icon}
                </a>
                <h3 className="text-2xl font-bold">{name}</h3>
                <p className="text-center">{text}</p>
            </article>
        </>
    )
}

export default SkillsCard