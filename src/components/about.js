
import deskImage from '../assets/desketup.jpg'; // replace with your image


export default function About() {
  return (
    <section className=" text-white p-3 lg:p-6">
      <h2 className="text-3xl font-bold lg:py-[40px] p-3 lg:p-6">
        <span className="text-green-500">Ab</span>out me
      </h2>

      <div className=' mt-3 lg:mt-0 lg:flex'>

        <div className="bg-gray-900 p-3 lg:p-6 rounded-xl shadow-xl lg:w-[1200px] lg:h-[400px] ">
          <div className='lg:max-w-[800px]'>
            <p className="text-green-500 mb-2">
              &lt;code&gt;I build <span className="font-bold text-white">web applications</span> |&lt;/code&gt;
            </p>
            <h1 className="text-2xl font-bold mb-2">Nithin</h1>
            {/* <div className="flex gap-3 text-lg mb-4">
      
                    <FaGithub className="hover:text-green-500 cursor-pointer" />
                    <FaLinkedin className="hover:text-green-500 cursor-pointer" />
                    <FaInstagram className="hover:text-green-500 cursor-pointer" />
                    <FaXTwitter className="hover:text-green-500 cursor-pointer" />
                  </div> */}
            <p className="text-gray-300">
              I'm a Bengaluru-based <strong>Frontend Software Engineer</strong>, currently working at <strong>Instant Domains</strong> helping build a modern, mobile-first domain registrar and site builder.
            </p>
            <p className="mt-3 text-gray-400">
              In my free time, you can catch me training in <strong>Muay Thai</strong>, plucking my <strong>banjo</strong>, or exploring beautiful <strong>Vancouver Island</strong>.
            </p>
            <div className="mt-4 flex gap-4">
              <button className="bg-accent text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-400">Resume</button>
              <button className="border border-accent text-accent px-4 py-2 rounded-lg font-semibold hover:bg-green-700 hover:text-white">Contact</button>
            </div>
          </div>
        </div>
        <img
          src={deskImage}
          style={{ objectFit: 'cover' }}
          alt="Desk Setup"
          className="lg:w-[300px] lg:h-[300px] lg:rounded-xl lg:mr-10 lg:ml-[-5%]  lg:mt-[50px]  "
        />
      </div>
    </section>
  );
}
