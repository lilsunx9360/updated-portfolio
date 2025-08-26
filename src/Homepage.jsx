import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import img from "./assets/photo.png";
import img1 from "./assets/img2.png"; 
import img3 from "./assets/img-1.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div className="w-full min-h-screen text-white bg-black">
      {/* ===== Section 1: Hero ===== */}
     <section className="relative grid grid-cols-1 md:grid-cols-2 min-h-screen">
   {/* Fullscreen Parallax Background */}
{/* Responsive Parallax Background */}
<div
  className="hidden  lg:block w-full h-screen bg-center bg-cover"
  style={{
    backgroundImage: `url(${img})`,
    backgroundPosition: "center",
    backgroundAttachment: "fixed", // parallax effect on desktop
  }}
></div>


  {/* Right Side Content */}
  {/* Right Side Content */}
<div className="flex flex-col justify-center items-center md:items-start px-4 md:px-12 py-12 space-y-4 bg-black/80 overflow-x-hidden">
  {/* Mobile-only Image with Parallax on Desktop */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: false, amount: 0.3 }}
    className="w-full h-[50vh] block md:hidden bg-center bg-cover"
    style={{
      backgroundImage: `url(${img3})`,
      backgroundPosition: "center",
    }}
  ></motion.div>

  {/* Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: false, amount: 0.3 }}
    className="text-[2rem] sm:text-[3rem] md:text-[4.5rem] font-bold uppercase select-none pointer-events-none text-center sm:text-left"
    style={{ fontFamily: "'Inter', sans-serif" }}
  >
    <span>I’m </span>
    <span
      className="p-2"
      style={{
        backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      SHANMUGAM
    </span>
  </motion.h1>

  {/* Subheading */}
  <motion.h2
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.2 }}
    viewport={{ once: false, amount: 0.3 }}
    className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center sm:text-left"
  >
    MERN Stack Developer
  </motion.h2>

  {/* Paragraph */}
  <motion.p
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    viewport={{ once: false, amount: 0.3 }}
    className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl text-center sm:text-left"
  >
    A MERN Stack Developer creates full-stack web applications using
    MongoDB, Express.js, React, and Node.js.
  </motion.p>

  {/* Buttons */}
  <div className="flex gap-4 flex-wrap ">
    <a href="#Contact">
      <button
        className="text-white text-sm sm:text-base px-6 py-2.5 rounded-md transition-all duration-300"
        style={{
          backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)",
        }}
      >
        Hire Me
      </button>
    </a>
    <button
      onClick={() => {
        setShowIcons(true);
        setTimeout(() => setShowIcons(false), 4000);
      }}
      className="text-white text-sm sm:text-base px-6 py-2.5 rounded-md transition-all duration-300"
      style={{
        backgroundImage: "linear-gradient(to right, #00FFFB, #C800FF)",
      }}
    >
      Let’s Talk
    </button>
  </div>
</div>

</section>


      {/* ===== Section 2: Gallery (Parallax Background) ===== */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative bg-black/70 p-10 rounded-xl  max-w-5xl">
          <div className="inset-0 flex items-start justify-center pt-10">
            <h1
              className="text-[4rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] font-bold uppercase opacity-25 select-none pointer-events-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ABOUT
            </h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            className="relative text-sm sm:text-base md:text-lg lg:text-xl text-gray-300"
          >
            I’m a MERN Stack Developer skilled in building efficient, scalable,
            and user-friendly web applications. I use n8n to automate daily tasks
            and streamline workflows, making processes faster and smarter. I’m
            also familiar with WordPress development and customization. With a
            growing interest in AI technologies, I’m eager to learn and apply them
            to create innovative, real-world solutions.
          </motion.p>
        </div>
      </section>

   
      {/* ===== Floating Social Icons ===== */}
      { (
       <div className="absolute bottom-10 right-10 hidden lg:flex gap-4 z-50">
  <a
    href="https://www.linkedin.com/in/shanmugam-devaraj-9a14b2255/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin className="text-white text-3xl hover:text-cyan-400 transition duration-300" />
  </a>
  <a href="https://github.com/lilsunx9360" target="_blank" rel="noopener noreferrer">
    <FaGithub className="text-white text-3xl hover:text-gray-400 transition duration-300" />
  </a>
  <a
    href="https://www.instagram.com/sanzzzsandy/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="text-white text-3xl hover:text-pink-400 transition duration-300" />
  </a>
</div>

      )}
    </div>
  );
};

export default Home;