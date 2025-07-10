
export default function TechStack() {

    const technologies = [
        {
            category: 'Frontend',
            skills: [
                { tech: 'React', knowledge: 50 },
                { tech: 'Vue', knowledge: 40 },
                { tech: 'Typescript', knowledge: 30 },
                { tech: 'GraphQL', knowledge: 30 },
            ],
          },
        {
            category: 'Backend',
            skills: [
                { tech: 'React', knowledge: 50 },
                { tech: 'Vue', knowledge: 40 },
                { tech: 'Svelte', knowledge: 30 },
            ],
        }, {
            category: 'Mobile',
            skills: [
                { tech: 'React', knowledge: 50 },
                { tech: 'Vue', knowledge: 40 },
                { tech: 'Svelte', knowledge: 30 },
            ],
        }, {
            category: 'Security',
            skills: [
                { tech: 'React', knowledge: 50 },
                { tech: 'Vue', knowledge: 40 },
                { tech: 'Svelte', knowledge: 30 },
            ],
          },
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