"use client";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <motion.div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <motion.div className="bg-white rounded-lg p-6 max-w-lg w-full shadow-xl relative" onClick={(e) => e.stopPropagation()}>
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-800" onClick={onClose}>✖</button>
        <h2 className="text-2xl font-semibold">{project.title}</h2>
        <p className="text-gray-600 mt-2">{project.fullDescription}</p>
        <a href={project.github} target="_blank" className="text-blue-600 mt-4 block hover:underline">View on GitHub</a>
      </motion.div>
    </motion.div>
  );
}
