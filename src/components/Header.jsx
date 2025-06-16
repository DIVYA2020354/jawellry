import React from 'react'
import Navbar from './Navbar';
import "../components/head.css"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div
      className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden relative'
      style={{
        height: "300px",
backgroundImage:"url('/header_img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
      id='Header'
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
      ></div>

      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-3 text-white relative z-10'>
        <h2 className='text-3xl sm:text-6xl md:text-[82px] inline-block  font-semibold pt-20'>
Exquisite      <span className='text-yellow-300' >Luxury</span>   Jewelry
        </h2>

        <div className='space-x-6 mt-16'>
         
          <a href='#Design' className='text-black text-lg font-bold bg-yellow-500 px-20 py-4 rounded hover:bg-yellow-600 hover:text-white transition' id='main'>Design
          </a>
        </div>

        <p className="mt-10 text-lg max-w-xl mx-auto">
          Our jewellery collection includes rings, necklaces, earrings, and more.
          Browse by price, type, and material — find the perfect piece for every occasion.
        </p>
      </motion.div>
    </div>
  )
}

export default Header;
