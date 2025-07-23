
import deskImage from '../assets/deskup.jpg'; // replace with your image
import { FaGithub, FaLinkedin} from "react-icons/fa6";
import { ReactTyped } from 'react-typed';

export default function Hero() {
  return (
    <div>
        <h1 className='text-white !font-serif ml-[20px] pt-[20px] my-[50px] text-5xl'>NITHIN V R</h1>
      <div className='lg:flex'>
          <img
            src={deskImage}
            alt="Desk Setup"
          className="lg:w-[600px] lg:h-[500px] lg:rounded-tr-[30px] lg:rounded-br-[30px]"
          />
        <div className="bg-gray-900 p-3 lg:p-6 rounded-xl mx-auto lg:mx-0 shadow-xl w-[90%] lg:w-full lg:h-[430px]  lg:ml-[-5%] lg:mt-[50px] lg:mr-[20px]">
          <p className="text-green-500 mb-2">
            &lt;code&gt;I build{' '}
            <span className="text-white font-bold">
              <ReactTyped
                strings={[
                  'web applications',
                  'beautiful UIs',
                  'responsive websites',
                  'React projects',
                  'frontend experiences',
                ]}
                typeSpeed={50}

                backSpeed={30}
                loop
              />{' '}
            </span>
            |&lt;/code&gt;
          </p>
            <h1 className="text-2xl font-bold mb-2">Nithin</h1>
            <div className="flex gap-3 text-lg mb-4">

             <div className="flex gap-3 text-lg mb-4">
                <a
                  href="http://github.com/nithinvr001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  <FaGithub className="cursor-pointer" />
                </a>

                <a
                  href="http://linkedin.com/in/nithinvramesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-colors duration-300"
                >
                  <FaLinkedin className="cursor-pointer" />
                </a>
              </div>
            </div>
            <p className="text-gray-300">
              I'm a Bengaluru-based <strong>Frontend Software Engineer</strong>, currently  <strong>Freelancing</strong> helping build a modern, site builder and actively looking for Job Opportunities.
            </p>
            <p className="mt-3 text-gray-400">
<<<<<<< Updated upstream
              In my free time, you can catch me playing <strong>Badminton </strong>,<strong> Billiards</strong>, learning <strong>New technologies and on how to trade </strong> or exploring beautiful <strong>Bengaluru city</strong>.
=======
              In my free time, you can catch me playing <strong> Badminton</strong>,<strong> Billiards</strong>, learning <strong>New technologies </strong> and  <strong> Exploring / Travelling</strong>.
>>>>>>> Stashed changes
            </p>
            {/* <div className="mt-4 flex gap-4">
              <button className="bg-accent text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400">Resume</button>
              <button className="border border-accent text-accent px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white">Contact</button>
            </div> */}
            <div className="mt-4 flex gap-4">
                <a
                  href="https://drive.google.com/file/d/1ZpkTMmteDxfM0opR_h2OmlSDpAIyxZk3/view?usp=sharing"
                  download
                  className="bg-accent text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400"
                >
                  Resume
                </a>
                <a
                  href="#contact"
                  className="border border-accent text-accent px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white"
                >
                  Contact
                </a>
              </div>

          </div>
        </div>
      </div>
  );
}
