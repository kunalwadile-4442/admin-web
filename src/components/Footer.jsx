"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import InputField from "@/components/InputField";

export default function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    toast.success("Message sent successfully!", { duration: 3000 });
    reset();
  };

  return (
    <footer className="bg-gray-900 text-white">
      <Toaster position="top-right" reverseOrder={false} />
      
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        
        {/* Contact Form */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
            <InputField label="Name" type="text" id="name" register={register} errors={errors} placeholder="Enter your name" />
            <InputField label="Email" type="email" id="email" register={register} errors={errors} placeholder="Enter your email" />
            <InputField label="Message" type="text" id="message" register={register} errors={errors} placeholder="Write your message" />
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
              Send Message
            </button>
          </form>
        </div>

        {/* About & Links */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">We provide top-notch web solutions and prioritize customer satisfaction.</p>
          <div className="mt-4">
            <Link href="/privacy-policy" className="block text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms-of-service" className="block text-gray-400 hover:text-white">Terms of Service</Link>
            <Link href="/support" className="block text-gray-400 hover:text-white">Support</Link>
          </div>
        </div>

        {/* Social Media */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-blue-500 text-2xl"><FaFacebook /></Link>
            <Link href="#" className="text-gray-400 hover:text-blue-400 text-2xl"><FaTwitter /></Link>
            <Link href="#" className="text-gray-400 hover:text-pink-500 text-2xl"><FaInstagram /></Link>
            <Link href="#" className="text-gray-400 hover:text-blue-600 text-2xl"><FaLinkedin /></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 text-center py-4 text-gray-400">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </div>
    </footer>
  );
}
