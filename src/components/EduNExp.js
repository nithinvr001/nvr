export default function EduNExp() {
    const timelineData = [
        {
            duration: "2018-2022",
            Place: "University of Origin",
            Place: "University of Origin",
            title: "BSc Computer Science",
            description: "Graduated from XYZ University with a 3.8 GPA",
        },
        {
            duration: "2018-2022",
            Place: "University of Origin",
            title: "Frontend Intern @ ABC Corp",
            description: "Built internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and Tailwind",
        },
        {
            duration: "2018-2022",
            Place: "University of Origin",
            title: "Junior Developer @ DEF Ltd.",
            description: "Worked on client-side architecture and testing",
        },
        {
            duration: "2018-2022",
            Place: "University of Origin",
            title: "Next Opportunity",
            description: "Looking to grow in full-stack development",
        },
    ];

    const EdutimelineData = [
        {
            duration: "2018-2022",
            Place: "University of Origin",
            Place: "University of Origin",
            title: "BSc Computer Science",
            description: "Graduated from XYZ University with a 3.8 GPA",
        },
        {
            duration: "2018-2022",
            Place: "University of Origin",
            title: "Frontend Intern @ ABC Corp",
            description: "Built internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and TailwindBuilt internal tools with React and Tailwind",
        },
        {
            duration: "2018-2022",
            Place: "University of Origin",
            title: "Junior Developer @ DEF Ltd.",
            description: "Worked on client-side architecture and testing",
        },
        {
            duration: "2018-2022",
            Place: "University of Origin",
            title: "Next Opportunity",
            description: "Looking to grow in full-stack development",
        },
    ];

    return (
        <section className="text-white p-3 lg:p-6">
            <div className="lg:flex lg:space-x-10 p-3 lg:p-6">
                <div>
                    <h2 className="text-3xl font-bold py-[40px]">
                        <span className="text-green-500">Exp</span>erince
                    </h2>
                    <ol className="  mt-3 lg:mt-0 relative border-s border-gray-200 dark:border-gray-700 ">
                {timelineData.map((item, index) => (
                    <div>
                        <li key={index} className="ms-4 mb-10">

                            <div className="absolute text-sm -start-3 p-1 border rounded-full  dark:border-green-700 ">{item.duration}</div>


                            <time className="ml-[60px] text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                {item.Place}
                            </time>


                            <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                                {item.title}
                            </h3>


                            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                {item.description}
                            </p>


                            {index === timelineData.length - 1 && (
                                <style>{`
                                ol > li:last-child {
                                    margin-bottom: 0;
                                }
                            `}</style>
                            )}
                        </li>
                        {index === timelineData.length - 1 ? '' : <hr className="border-s border-gray-200 dark:border-gray-700 mb-3" />}
                    </div>
                ))}

                    </ol>
                </div>
                <div>
                    <h2 className="text-3xl font-bold py-[40px]">
                        <span className="text-green-500">Edu</span>cation
                    </h2>
                    <ol className="  mt-3 lg:mt-0 relative border-s border-gray-200 dark:border-gray-700 ">
                        {EdutimelineData.map((item, index) => (
                            <div>
                                <li key={index} className="ms-4 mb-10">

                                    <div className="absolute text-sm -start-3 p-1 border rounded-full  dark:border-green-700 ">{item.duration}</div>


                                    <time className="ml-[60px] text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                        {item.Place}
                                    </time>


                                    <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>


                                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                        {item.description}
                                    </p>


                                    {index === timelineData.length - 1 && (
                                        <style>{`
                                ol > li:last-child {
                                    margin-bottom: 0;
                                    
                                }
                                
                            `}</style>
                                    )}
                                </li>
                                {index === EdutimelineData.length - 1 ? '' : <hr className="border-s border-gray-200 dark:border-gray-700 mb-3" />}
                            </div>
                        ))}
                    </ol>
                </div>
            </div>

        </section>
    );
}
