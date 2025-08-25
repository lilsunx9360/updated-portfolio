import { useRef } from 'react';
import pro1 from './assets/project-1.png';
import pro2 from './assets/pro2.png';
import pro3 from './assets/pro-3.png';
import pro4 from './assets/pro-4.png';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: '',
    image: pro1,
    live: 'https://front-end-c433.vercel.app/',
    description:
      'This MERN-based web scraping tool automates lead generation with BullMQ for scalable processing and Firebase Authentication for security. Users upload Excel sheets, and Puppeteer extracts emails, phones, and ZIPs. Data is stored in MongoDB and displayed in a React dashboard with export options—streamlining prospecting and outreach.'
  },
  {
    id: 2,
    title: 'Email-Automation',
    image: pro2,
    live: '',
    description: 'This n8n workflow sends emails using sender accounts listed in Google Sheets. It picks one sender in a round-robin order, then randomly selects a subject and pitch. The workflow sends the email via SMTP using the chosen sender, ensuring balanced distribution and varied personalized outreach.',
  },
  {
    id: 3,
    title: 'Image Generation',
    image: pro3,
    live: '',
    description: 'I built an n8n workflow that automates AI image generation, uploads the output to the GoHighLevel media library, and then triggers an email notification with the generated image link. This seamless process combines automation, storage, and communication, making image creation and sharing faster, smarter, and fully integrated.',
  },
  {
    id: 4,
    title: 'Social Media Automation',
    image: pro4,
    live: '',
    description: 'I built an n8n automation that connects Google Sheets, GoHighLevel, and social media. When a post idea is marked “Approve” in the sheet, the workflow triggers and automatically publishes the content through GHL social media accounts. This saves time by turning approvals into instant, scheduled social posts.',
  },
];

const Project = () => {
  const scrollRef = useRef(null);

  return (
    <section 
      className="relative min-h-[60vh] sm:min-h-screen bg-black text-white overflow-hidden px-4 py-6 sm:py-10" 
      id="project"
    >
      {/* Top Center "PROJECT" heading */}
      <div className="w-full text-center">
        <h1
          className="text-[3rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold uppercase opacity-25 leading-none tracking-tight select-none pointer-events-none"
        >
          PROJECT
        </h1>
      </div>

      {/* Content Slider */}
      <div className="flex justify-center items-center relative">
        <motion.div 
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          className="w-full max-w-6xl mt-5 overflow-x-auto no-scrollbar" 
          ref={scrollRef}
        >
          <div className="flex">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="flex-none w-[300px] h-[450px]  md:w-[350px] md:h-[500] mx-2 rounded-2xl overflow-hidden shadow-lg cursor-pointer group relative"
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
                  className="h-full bg-contain bg-center bg-no-repeat"
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