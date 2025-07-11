import { FaGithub, FaLinkedin} from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 rounded-t-2xl px-8 py-6 shadow-[0_-2px_10px_rgba(0,0,0,0.3)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Copyright */}
        <p className="text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Nithin Ramesh
        </p>

        {/* Right: Social Icons */}
        <div className="flex space-x-5 text-xl">
          <a href="http://github.com/nithinvr001" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="http://linkedin.com/in/nithinvramesh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
