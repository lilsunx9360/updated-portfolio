import { useRef } from 'react';
import { FaExternalLinkAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import pro1 from './assets/pro1.png';
import { motion } from 'framer-motion';
const projects = [
  {
    id: 1,
    title: 'construction website',
    image: pro1,
    live: 'vite-react-sigma-ashen.vercel.app',
    description:
      'I developed a responsive construction website using React.js and Tailwind CSS, showcasing services, projects, contact forms, and modern UI components.',
  },
  {
    id: 2,
    title: 'Green Project',
    image: 'https://via.placeholder.com/300x200/00ff00/ffffff',
    live: 'https://liveproject2.com',
    description: 'A green-themed admin dashboard using MERN stack.',
  },
  {
    id: 3,
    title: 'Red Project',
    image: 'https://via.placeholder.com/300x200/ff0000/ffffff',
    live: 'https://liveproject1.com',
    description: 'This is a project about red-themed UI built using React.',
  },
  {
    id: 4,
    title: 'Green Project',
    image: 'https://via.placeholder.com/300x200/00ff00/ffffff',
    live: 'https://liveproject2.com',
    description: 'A green-themed admin dashboard using MERN stack.',
  },
];

const Project = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 400; // Adjust scroll distance as needed
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
    className="relative min-h-[60vh] sm:min-h-screen bg-black text-white  overflow-hidden px-4 py-6 sm:py-10" id="project">
      {/* Top Center "PROJECT" heading */}
      <div className="w-full text-center  ">
        <h1
      
        className="text-[3rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold uppercase opacity-25 leading-none tracking-tight select-none pointer-events-none">
          PROJECT
        </h1>
      </div>

      {/* Content Slider */}
      <div className="flex justify-center items-center relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-20 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Scroll Left"
        >
          <FaArrowLeft className="text-lg sm:text-2xl" />
        </button>

        <motion.div 
         initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
        className="w-full max-w-6xl mt-5 overflow-x-auto no-scrollbar" ref={scrollRef}>
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-none w-80 sm:w-96 mx-2 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-700 cursor-pointer group relative"
                onClick={() => window.open(project.live, '_blank', 'noopener,noreferrer')}
              >
                {/* Project Title at Top Center */}
                <div className="absolute top-3 left-1/2 transform -translate-x-1/2 z-10 bg-black/60 px-4 py-1 rounded text-white text-sm font-semibold">
                  {project.title}
                </div>

                {/* Project Number Badge */}
                <span className="absolute top-3 left-3 text-m font-bold text-white bg-black/50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  {String(index + 1).padStart(2, '0')}
                </span>

                {/* Background image */}
                <div
                  className="h-60 sm:h-72 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>

                {/* Icon */}
                <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <FaExternalLinkAlt className="text-xl hover:text-white" />
                  </a>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 text-white flex flex-col justify-center items-center text-center p-4 transition-opacity duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-20 bg-black/50 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Scroll Right"
        >
          <FaArrowRight className="text-lg sm:text-2xl" />
        </button>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Project;