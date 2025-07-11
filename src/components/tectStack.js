
export default function TechStack() {

    const technologies = [
        {
            category: 'Frontend',
            skills: [
                { tech: 'React', knowledge: 60 },
                { tech: 'Angular', knowledge: 50 },
                { tech: 'Typescript', knowledge: 60 },
                { tech: 'GraphQL', knowledge: 30 },
            ],
          },
        {
            category: 'Backend',
            skills: [
                { tech: 'MongoDB', knowledge: 50 },
                { tech: 'Java', knowledge: 60 },
                { tech: 'NodeJS', knowledge: 50 },
            ],
        }
    ]
    return(
      <section className="p-3 lg:p-6 text-white">
            <h2 className="text-3xl font-bold lg:py-[40px]">
                <span className="text-green-500">Cor</span>e tech stack
            </h2>
        <div className=" mt-3 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-3 lg:p-6">
  {technologies.map((i, index) => (
    <div key={index} className="p-4 rounded shadow">
      <p className="text-xl font-bold mb-2">{i.category}</p>
      {i.skills.map((s, skillIndex) => (
        <div key={skillIndex} className="mb-2">
          <p className="text-sm">{s.tech}</p>
          <progress
            className="progress progress-success w-full"
            value={s.knowledge}
            max="100"
          ></progress>
        </div>
      ))}
    </div>
  ))}
</div>
        </section>
    )
}