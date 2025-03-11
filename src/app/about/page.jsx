"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-20 pb-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl text-center"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
      >
        Welcome to my portfolio! I’m passionate about developing modern, user-friendly applications.
        With expertise in **React.js, Next.js, Redux, Firebase, and WebSockets**, I build robust, 
        high-performance solutions that enhance user experience.  
        <br />
        <br />
        Feel free to explore my **projects** and **contact me** if you'd like to collaborate!
      </motion.p>
    </div>
  );
};

export default AboutPage;
