import React from 'react';
import { motion } from "framer-motion";

// products ko component ke bahar define karna best practice hai
const products = [
  {
    id: 1,
    image: '/public/image3.jpg',
    title: 'Classic Pearl Necklace',
    price: '$1,850',
  },
  {
    id: 2,
    image: '/public/j2.jpeg',
    title: 'Threaded Tennis Bracelet',
    price: '$3,200',
  },
  {
    id: 3,
    image: '/public/j3.jpeg',
    title: 'Sparkling Top Earrings',
    price: '$2,850',
  }
];

const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='container mx-auto py-10 lg:px-32 w-full overflow-hidden'
      id='Testimonials'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Best <span className='font-light text-yellow-600 ml-2'>Sellers</span>
      </h1>
      <p className='text-center text-gray-600 mb-12 max-w-100 mx-auto'>
        Our most beloved pieces, chosen by discerning customers worldwide.
      </p>

 <div className="flex justify-center gap-8 overflow-x-auto " style={{gap:"3%"}}>
  {products.slice(0, 3).map((product) => (
    <div key={product.id} className="w-[500px] border shadow-lg rounded p-4 " >
      <div className="relative">
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">#1 Best Seller</span>
        <img src={product.image} alt={product.title} className="w-full h-[250px] object-cover rounded" />
      </div>
      <div className="mt-4 text-left">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <div className="flex justify-between items-center mt-1">
          <p className="text-orange-500 font-bold text-lg mt-1">{product.price}</p>
          <button className="bg-yellow-300 text-black px-4 py-2 rounded mt-3">Add to cart</button>
        </div>
      </div>
    </div>
  ))}
</div>

    </motion.div>
  );
}

export default Testimonials;
