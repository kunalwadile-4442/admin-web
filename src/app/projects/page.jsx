"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A fully functional online store with payments and authentication.",
    fullDescription: "This project includes authentication, payments, and scalable product management.",
    images: ["/ecommerce1.jpg", "/ecommerce2.jpg", "/ecommerce3.jpg"],
    github: "https://github.com/yourrepo/ecommerce",
  },
  {
    id: 2,
    title: "Admin ERP Dashboard",
    description: "A role-based ERP system with analytics and user management.",
    fullDescription: "This ERP system provides powerful analytics and role-based access for enterprise management.",
    images: ["/erp1.jpg", "/erp2.jpg", "/erp3.jpg"],
    github: "https://github.com/yourrepo/erp-dashboard",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "A fully functional online store with payments and authentication.",
    fullDescription: "This project includes authentication, payments, and scalable product management.",
    images: ["/ecommerce1.jpg", "/ecommerce2.jpg", "/ecommerce3.jpg"],
    github: "https://github.com/yourrepo/ecommerce",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description: "A fully functional online store with payments and authentication.",
    fullDescription: "This project includes authentication, payments, and scalable product management.",
    images: ["/ecommerce1.jpg", "/ecommerce2.jpg", "/ecommerce3.jpg"],
    github: "https://github.com/yourrepo/ecommerce",
  },
  {
    id: 5,
    title: "E-Commerce Website",
    description: "A fully functional online store with payments and authentication.",
    fullDescription: "This project includes authentication, payments, and scalable product management.",
    images: ["/ecommerce1.jpg", "/ecommerce2.jpg", "/ecommerce3.jpg"],
    github: "https://github.com/yourrepo/ecommerce",
  },
  {
    id: 6,
    title: "E-Commerce Website",
    description: "A fully functional online store with payments and authentication.",
    fullDescription: "This project includes authentication, payments, and scalable product management.",
    images: ["/ecommerce1.jpg", "/ecommerce2.jpg", "/ecommerce3.jpg"],
    github: "https://github.com/yourrepo/ecommerce",
  },
];

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center px-6 pt-20 pb-12">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeOut", type: "spring", stiffness: 150 }}
      >
        My Projects
      </motion.h1>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </motion.div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
}
