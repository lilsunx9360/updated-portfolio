import React from 'react';
import { motion } from 'framer-motion';
import Cube from './qube.jsx';
import n8n from './assets/n8n.png';

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

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ExperienceTimeline = () => (
  <div className="relative mt-20 px-4">
    <h1 className="text-4xl mb-10 text-center font-bold">Work Experience</h1>
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
    <div className="relative min-h-screen dark-gradient text-white overflow-hidden" id="about">
      <div className="relative z-10 max-w-6xl mx-auto mt-10 md:mt-15">
        <h1
          className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold uppercase opacity-25 select-none pointer-events-none text-center"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Skills
        </h1>
        <div
          className="relative flex justify-center items-center py-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${n8n})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          <section>
            <div className="relative z-10">
              <Cube backgroundColor="transparent" />
            </div>
          </section>
        </div>
        <div className="flex flex-wrap justify-center gap-12 mt-20">
          {skills.map((skill, index) => {
            const radius = 50;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (skill.level / 100) * circumference;

            return (
              <div key={index} className="flex flex-col items-center">
                <svg width="140" height="140" viewBox="0 0 140 140">
                  <circle
                    cx="70"
                    cy="70"
                    r={radius}
                    stroke="#333"
                    strokeWidth="10"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="70"
                    cy="70"
                    r={radius}
                    stroke="url(#grad)"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeLinecap="round"
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                  />
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dy=".3em"
                    className="fill-white text-lg font-semibold"
                  >
                    {skill.level}%
                  </text>
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00FFFB" />
                      <stop offset="100%" stopColor="#C800FF" />
                    </linearGradient>
                  </defs>
                </svg>
                <p className="text-sm md:text-base mt-2 text-gray-300">{skill.name}</p>
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