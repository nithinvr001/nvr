import { FaGithub } from 'react-icons/fa';

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
      description: 'A website for Interior and Exterior(Freelance Project)',
      github: 'https://macawoodinteriorss.netlify.app/',
      img: '/projects/inter.jpg'
    },
    {
      title: 'Typex',
      description: 'Check your Typing speed',
      github: 'https://checkyourspeedtypin.netlify.app/',
      img: '/projects/typex.jpg'
    }
  ];

  return (
    <section className="p-3 lg:p-6 text-white">
      <h2 className="text-3xl font-bold lg:py-[40px]">
        <span className="text-green-500">My</span> Projects
      </h2>

      <div className="mt-6 flex space-x-6 overflow-x-auto no-scrollbar">
        {myWorks.map((work, index) => (
          <div
            key={index}
            className="min-w-80 bg-gray-900 rounded-xl shadow-2xl hover:shadow-green-300/60 transition-shadow duration-300"
          >
            <img
              src={work.img}
              alt={work.title}
              className="h-48 w-full object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-green-400">{work.title}</h3>
              <p className="text-gray-300 mt-2 text-sm">{work.description}</p>
              <div className="mt-4">
                <a
                  href={work.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-500 hover:text-green-300 transition"
                >
                  <FaGithub /> View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
