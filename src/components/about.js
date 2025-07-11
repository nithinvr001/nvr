
import deskImage from '../assets/mypic.jpg'; 
import { FaMapMarkerAlt, FaFlag, FaUniversity, FaBirthdayCake, FaTools, FaBriefcase } from 'react-icons/fa';

export default function About() {
  return (
    <section className=" text-white p-3 lg:p-6">
      <h2 className="text-3xl font-bold lg:py-[40px] p-3 lg:p-6">
        <span className="text-green-500">Ab</span>out me
      </h2>

      <div className=' mt-3 lg:mt-0 lg:flex'>

        <div className="bg-gray-900 p-3 lg:p-6 rounded-xl shadow-xl lg:w-[1200px] lg:h-[450px] ">
          <div className='lg:max-w-[800px]'>
            <p className="text-gray-290">
             I'm a <strong>frontend developer</strong> with a builder's mindset - driven by curiosity, fueled by creativity, and committed to crafting
             meaningful digital experiences. What began as an interest in web technologies has evolved into a focused pursuit of technical mastery and purposeful design. Over the past year, I've worked across freelance projects and team
             collaborations, delivering responsive, performance-driven websites for real-world use. I specialize in modern frameworks like <strong>React and Angular </strong> and I'm particularly drawn to translating complex ideas into clean, usable interfaces that feel intuitive across devices.
            </p>
            <p className="mt-3 text-gray-300">
             My <strong>entrepreneurial spirit </strong> has taught me more than just initiative - it's refined my communication, sharpened my adaptability,
             and shaped me into a team player who thrives in fast-paced environments. Whether I'm debugging a tricky Ul issue or
             brainstorming product features, I bring a mix of precision and problem-solving to everything I do. Now, I'm actively seeking an
             opportunity to row Within a company that values Innovation, learning, and collaboration - Where I can not only contribute but evolve.

            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 mt-6">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-green-500" /> <strong>Location:</strong> Bengaluru. KA
            </div>
            <div className="flex items-center gap-2">
              <FaBirthdayCake className="text-green-500" /> <strong>Age:</strong> 25
            </div>
            <div className="flex items-center gap-2">
              <FaFlag className="text-green-500" /> <strong>Nationality:</strong> Indian
            </div>
            <div className="flex items-center gap-2">
              <FaTools className="text-green-500" /> <strong>Interests:</strong> Snooker ,Gokarting, Listening to Podcasts
            </div>
            <div className="flex items-center gap-2">
              <FaUniversity className="text-green-500" /> <strong>Study:</strong> Acharya Institute of technology
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase className="text-green-500" /> <strong>Employment:</strong> Currently Freelancing, Web developer
            </div>
          </div>
          </div>
        </div>
        <img
          src={deskImage}
          style={{ objectFit: 'cover' }}
          alt="Desk Setup"
          className="lg:w-[500px] lg:h-[350px] lg:rounded-xl lg:mr-9 lg:ml-[-5%]  lg:mt-[50px]  "
        />
      </div>
    </section>
  );
}
