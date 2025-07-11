export default function EduNExp() {
    const timelineData = [
        {
            duration: "June23-Nov23",
            Place: "Saveo",
            title: "Frontend Developer",
            description: "Spearheaded API integration efforts, optimizing data flow and enhancing overall system efficiency for a more responsive and dynamic user interface .Engineered a critical dashboard for the pharmacy business, providing real-time insights into key metrics and facilitating streamlined operations for enhanced decision-making .Innovatively designed and implemented an HR Management dashboard, revolutionizing the job application process, portfolio management, and opening new avenues for efficient recruitment strategies  ",
        },
        {
            duration: "2018-2022",
            Place: "Digi Add Technologies",
            title: "Intern Project-work Trainee",
            description: "Developed and Accomplished as a Frontend Web developer intern in one of the major projects where we mainly Blood Bank management systems for NGO’s in Karnataka .Led the team for the design and implementation of the project",
        },
        {
            duration: "NOV22-DEC22",
            Place: "MACAWOOD INTERIORS",
            title: "Freelance Web Developer",
            description: "Developed seamless Front-End experiences and ensured images are properly compressed and load fast.Used Magnific-Popup front-end template for developing the preview of the images.Developed a Custom Image-preview with filtering pics of different interior designs Website built using HTML5, CSS, Bootstrap5and Javascript frameworks .Standardised the website with Responsive Web design .",
        },
    ];

    const EdutimelineData = [
        {
            duration: "2018-2022",
            Place: "Acharya Institute of Technology",
            title: "Bachelor of Engineering majored in Information Science",
            description: "Won Best Project of the Year for Machine Learning project. Selected for the Incubation Program at Spiders Training Program",
        },
        {
            duration: "2016-2018",
            Place: "Soundarya Composite Pre-University",
            title: "Pre-University majored in Physics, Chemistry, Math & Computer Science",
            description: "Technical Head and Event Organiser in a inter-college fest. Got Featured in the Bangalore Mirror newspaper for the application created  against the pollution .Won First Prize for the Mobile Application in inter-college competition ",
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
