"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ProjectCard({ project, onClick }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered, project.images.length]);

  return (
    <motion.div
      className="relative bg-white shadow-lg rounded-lg p-6 border border-gray-200 cursor-pointer group overflow-hidden"
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } }
      }}
      whileHover={{
        scale: 1.07,
        rotate: 1,
        boxShadow: "0px 6px 15px rgba(0, 0, 255, 0.25)",
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setImageIndex(0); // Reset image index when mouse leaves
      }}
    >
      {/* Image Carousel (Only Slides When Hovered) */}
      <motion.img
        src={project.images[imageIndex]}
        alt={project.title}
        className="w-full h-40 object-cover rounded-lg transition-opacity duration-500"
        key={imageIndex} // Ensures re-render when index changes
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      />

      {/* Title & Description */}
      <h2 className="text-2xl text-gray-700 font-semibold mt-4">{project.title}</h2>
      <p className="text-gray-600 mt-2 cursor-pointer hover:text-blue-500" onClick={onClick}>
        {project.description}
      </p>

      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block mt-4 text-blue-600 font-medium hover:underline"
      >
        View on GitHub
      </a>
    </motion.div>
  );
}
