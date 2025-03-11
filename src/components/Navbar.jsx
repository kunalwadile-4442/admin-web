import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on outside click
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !event.target.closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50 text-black p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between lg:justify-center items-center px-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-pink-600 lg:mr-auto">
          MyPortfolio
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 text-lg">
          <li><Link href="/about" className="hover:text-pink-600">About</Link></li>
          <li><Link href="/projects" className="hover:text-pink-600">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-pink-600">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Menu */}
      <motion.div
        className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-gray-50 shadow-lg p-6 mobile-menu z-50"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close Menu"
            className="focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>
        <ul className="space-y-5 text-lg">
          <li><Link href="/about" className="block hover:text-pink-600" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/projects" className="block hover:text-pink-600" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link href="/contact" className="block hover:text-pink-600" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </motion.div>
    </nav>
  );
}
