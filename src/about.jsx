import React from 'react';
import { motion } from 'framer-motion';
const experiences = [
  {
    title: 'Machine Learning Intern',
    tech: 'Indian Servers Private Limited, Vijayawada',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    date: '06-Jun-2023 to 10-Aug-2023',
    points: [
      'Completed an 8-week internship as a Trainee in Machine Learning.',
      'Worked on NLP tasks including text preprocessing and chatbot development.',
      'Explored OpenAI, HuggingFace, and BERT APIs.',
      'Gained understanding in fine-tuning state-of-the-art models.',
      'Demonstrated good contributions in real-time projects using NLP.',
      'Certificate UID: INDSER2023ML762'
    ],
  },
  {
    title: 'Web Development Intern',
    tech: 'NovaTech',
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
    date: 'February 2024',
    points: [
      'Successfully completed internship focused on Web Development.',
      'Demonstrated strong application of concepts to real-world projects.',
      'Contributed to multiple live development tasks with high dedication.',
      'Recognized for technical proficiency and team collaboration.',
      'Certificate No: NT2024FEB215113'
    ],
  },
  {
    title: 'Data Engineering Intern',
    tech: 'Eesan IT Solutions',
    icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006555.png',
    date: '17-Feb-2025 to 18-Apr-2025',
    points: [
      'Completed industrial internship under Eesan IT Solutions.',
      'Worked collaboratively with a team on a Data Engineering project.',
      'Applied concepts like ETL pipelines, data processing, and analytics.',
      'Demonstrated leadership, discipline, and problem-solving throughout the project.',
      'Endorsed for professionalism and technical contribution by the company.'
    ],
  },
];

const Cube = () => {
  return (
    <div className="relative flex justify-center">
      <style>
        {`
          .cube-container {
            width: 120px; /* Base size for mobile */
            height: 120px;
            position: relative;
            top:40px;
          
            left: -1%;
            transform-style: preserve-3d;
            animation: rotate 10s infinite ease-in-out;
            margin-bottom: 20px; /* Space for the glow effect */
          }

          /* Responsive sizes for larger screens */
          @media (min-width: 640px) {
            .cube-container {
              width: 160px; /* Small screens */
              height: 160px;
            }
          }

          @media (min-width: 768px) {
            .cube-container {
              width: 180px; /* Medium screens */
              height: 180px;
            }
          }

          @media (min-width: 1024px) {
            .cube-container {
              width: 200px; /* Large screens */
              height: 200px;
            }
          }

          .cube-container::after {
            content: '';
            position: absolute;
            bottom: -90px; /* Base position for mobile */
            left: 50%;
            transform: translateX(-50%);
            width: 90px; /* Base size for mobile */
            height: 30px;
            background: radial-gradient(circle, rgba(128, 0, 128, 0.5) 0%, rgba(0, 128, 0, 0.5) 50%, transparent 100%);
            filter: blur(20px);
            z-index: -1;
            
          }

          /* Responsive glow effect */
          @media (min-width: 640px) {
            .cube-container::after {
              bottom: -40px;
              width: 120px;
              height: 40px;
             }
          }

          @media (min-width: 768px) {
            .cube-container::after {
              bottom: -45px;
              width: 135px;
              height: 45px;
            
            }
          }

          @media (min-width: 1024px) {
            .cube-container::after {
              bottom: -50px;
              width: 150px;
              height: 50px;
            }
          }

          .cube {
            position: absolute;
            width: 100%;
            height: 100%;
            
            transform-style: preserve-3d;
          }

          .cube-face {
            position: absolute;
            width: 120px; /* Base size for mobile: 120px - 2*30px border */
            height: 120px;
            display: flex;
            padding: 20px; /* Padding for the face */
          
            justify-content: center;
            align-items: center;
         
          }

          /* Responsive face sizes */
          @media (min-width: 640px) {
            .cube-face {
              width: 200px; /* 160px - 2*30px */
              height: 200px;
            }
          }

          @media (min-width: 768px) {
            .cube-face {
              width: 200px; /* 180px - 2*30px */
              height: 200px;
            }
          }

          @media (min-width: 1024px) {
            .cube-face {
              width: 200px; /* 200px - 2*30px */
              height: 200px;
            }
          }

          .front  { transform: translateZ(60px); } /* Base transform for mobile */
          .back   { transform: translateZ(-60px) rotateY(180deg); }
          .right  { transform: translateX(60px) rotateY(90deg); }
          .left   { transform: translateX(-60px) rotateY(-90deg); }
          .top    { transform: translateY(-60px) rotateX(90deg); }
          .bottom { transform: translateY(60px) rotateX(-90deg); }

          /* Responsive transforms */
          @media (min-width: 640px) {
            .front  { transform: translateZ(80px); }
            .back   { transform: translateZ(-80px) rotateY(180deg); }
            .right  { transform: translateX(80px) rotateY(90deg); }
            .left   { transform: translateX(-80px) rotateY(-90deg); }
            .top    { transform: translateY(-80px) rotateX(90deg); }
            .bottom { transform: translateY(80px) rotateX(-90deg); }
          }

          @media (min-width: 768px) {
            .front  { transform: translateZ(90px); }
            .back   { transform: translateZ(-90px) rotateY(180deg); }
            .right  { transform: translateX(90px) rotateY(90deg); }
            .left   { transform: translateX(-90px) rotateY(-90deg); }
            .top    { transform: translateY(-90px) rotateX(90deg); }
            .bottom { transform: translateY(90px) rotateX(-90deg); }
          }

          @media (min-width: 1024px) {
            .front  { transform: translateZ(100px); }
            .back   { transform: translateZ(-100px) rotateY(180deg); }
            .right  { transform: translateX(100px) rotateY(90deg); }
            .left   { transform: translateX(-100px) rotateY(-90deg); }
            .top    { transform: translateY(-100px) rotateX(90deg); }
            .bottom { transform: translateY(100px) rotateX(-90deg); }
          }

          @keyframes rotate {
            from { transform: rotateX(0deg) rotateY(0deg); }
            to { transform: rotateX(360deg) rotateY(360deg); }
          }
        `}
      </style>
         
      <div className="cube-container">
        <div className="cube">
         
          <div className="cube-face front p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://www.w3.org/html/logo/badge/html5-badge-h-solo.png" alt="HTML Logo" className="w-full h-full" />
          </div>
          <div className="cube-face back p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="CSS Logo" className="w-full h-full" />
          </div>
          <div className="cube-face right p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Logo" className="w-full h-full" />
          </div>
          <div className="cube-face left p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" className="w-full h-full" />
          </div>
          <div className="cube-face top p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://www.mongodb.com/assets/images/global/leaf.png" alt="MongoDB Logo" className="w-full h-full" />
          </div>
          <div className="cube-face bottom p-[5px] m-[20px] border-[15px] sm:border-[20px] md:border-[25px] lg:border-[30px] border-transparent">
            <img src="https://git-scm.com/images/logos/logomark-orange@2x.png" alt="Git Logo" className="w-full h-full" />
          </div>
         
        </div>
         
      </div>
      
    </div>
      

  );
  
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceTimeline = () => (
  <div className="relative mt-36 px-4 ">
    <h1 className="text-4xl mb-10 text-center">Work Experience</h1>
    <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:left-1/2 before:transform before:-translate-x-1/2 before:h-full before:w-1 before:bg-white">
      {experiences.map((exp, index) => {
        const isLeft = index % 2 === 0;
        return (
          <motion.div
            key={index}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative w-full md:w-1/2 px-4 py-6 mb-12 ${isLeft ? 'md:pr-12 md:pl-0 md:left-0 md:flex md:justify-end md:items-center md:text-left' : 'md:pl-12 md:pr-0 md:left-1/2 md:flex md:justify-start md:items-center md:text-left'}`}
          >
            <div className="relative bg-[#1c1c2b] text-white rounded-md p-6 shadow-lg">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white rounded-full border-4 border-black flex items-center justify-center z-10">
                <img src={exp.icon} alt="icon" className="h-6 w-6" />
              </div>
              <h2 className="text-xl font-semibold mb-2">{exp.title}</h2>
              <p className="text-gray-400 text-sm mb-1">{exp.tech}</p>
              <p className="text-sm text-indigo-300 mb-3">{exp.date}</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                {exp.points.map((point, idx) => <li key={idx}>{point}</li>)}
              </ul>
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
  
);

const skills = [
  { name: "Frontend", level: 80 },
  { name: "Backend", level: 75 },
  { name: "Database", level: 75 },
  { name: "n8n Automation", level: 85 },
  { name: "WordPress", level: 85 },
  { name: "AI Tools", level: 90 },
];

  
const ShanmugamBackground = () => {
  return (
    <div className="relative min-h-screen dark-gradient text-white overflow-hidden px-4 pt-10 pb-20" id="about">
      <div className="absolute inset-0 flex items-start justify-center pt-10">
        <h1
          className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold uppercase opacity-25 select-none pointer-events-none"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          ABOUT
        </h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mt-24 md:mt-40">
        <motion.p 
         initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 md:p-10 p-3 md:mb-8">
          I’m a MERN Stack Developer skilled in building efficient, scalable,
          and user-friendly web applications. I use n8n to automate daily tasks
          and streamline workflows, making processes faster and smarter. I’m
          also familiar with WordPress development and customization. With a
          growing interest in AI technologies, I’m eager to learn and apply them
          to create innovative, real-world solutions.
        </motion.p>

        <div className="flex justify-center md:p-8 p-3 md:mb-8">
          <Cube />
        </div>

        <h1 className="text-3xl m-3 md:pl-9 md:mt-20 mt-16">Skills</h1>

        {/* Circle Skills Static */}
        <div className="flex flex-wrap justify-center gap-12 mt-20">
          {skills.map((skill, index) => {
            const radius = 50;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (skill.level / 100) * circumference;

            return (
            <div key={index} className="flex flex-col items-center">
  <svg
    width="140"
    height="140"
    viewBox="0 0 140 140"
  >
    {/* Background Circle */}
    <circle
      cx="70"
      cy="70"
      r={radius}
      stroke="#333"
      strokeWidth="10"
      fill="transparent"
    />

    {/* Progress Circle with animation */}
    <motion.circle
      cx="70"
      cy="70"
      r={radius}
      stroke="url(#grad)"
      strokeWidth="10"
      fill="transparent"
      strokeDasharray={circumference}
      strokeLinecap="round"
      initial={{ strokeDashoffset: circumference }}   // start empty
      whileInView={{ strokeDashoffset: offset }}     // animate to skill %
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.3 }}
    />

    {/* Skill % text inside circle */}
    <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dy=".3em"
      className="fill-white text-lg font-semibold"
    >
      {skill.level}%
    </text>

    {/* Gradient */}
    <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00FFFB" />
        <stop offset="100%" stopColor="#C800FF" />
      </linearGradient>
    </defs>
  </svg>

  <p className="text-sm md:text-base mt-2 text-gray-300">
    {skill.name}
  </p>
</div>

            );
          })}
        </div>

        <ExperienceTimeline />
      </div>
    </div>
  );
};

export default ShanmugamBackground;