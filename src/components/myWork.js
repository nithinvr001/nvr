import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function MyWorks() {
  const myWorks = [
    {
      title: 'Crypto Dashing',
      description: 'A modern dashboard to track crypto metrics in real-time.',
      github: 'https://nithinvr001.github.io/CryptoDashing/',
      img: '/projects/bitcoi.jpg'
    },
    {
      title: 'Macawood Interiors',
      description: 'A website for Interior and Exterior (Freelance Project)',
      github: 'https://macawoodinteriorss.netlify.app/',
      img: '/projects/inter.jpg'
    },
    {
      title: 'Typex',
      description: 'Check your typing speed with this interactive typing test application.',
      github: 'https://checkyourspeedtypin.netlify.app/',
      img: '/projects/typex.jpg'
    }
  ];

  return (
    <section className="p-4 sm:p-5 lg:p-6 text-white">
      <h2 className="text-2xl sm:text-3xl font-bold py-6 sm:py-8 lg:py-[40px]">
        <span className="text-green-500">My</span> Projects
      </h2>

      <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        {myWorks.map((work, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl shadow-2xl hover:shadow-green-300/60 transition-all duration-300 overflow-hidden flex flex-col h-full active:scale-[0.98] lg:hover:scale-[1.02]"
          >
            <div className="relative h-44 sm:h-48 w-full overflow-hidden">
              <img
                src={work.img}
                alt={work.title}
                className="h-full w-full object-cover transition-transform duration-300 lg:hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-5 flex flex-col flex-grow">
              <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2 sm:mb-3">{work.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 flex-grow leading-relaxed">{work.description}</p>
              <div className="mt-auto pt-2">
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:text-green-300 active:text-green-400 transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  <FaExternalLinkAlt className="text-xs sm:text-sm" /> View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
