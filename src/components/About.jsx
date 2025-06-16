import React from 'react';
import { motion } from "framer-motion";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const About = () => {

  const cardData = [
    {
      title: "Bridal Collection",
      desc: "Timeless pieces for your special day",
      img: "/public/m1.jpg",
      subdesc: "24 pieces"


    },
    {
      title: "Diamond Collection",
      desc: "Exquisite diamonds in perfect settings",
      img: "/image2.jpg",
        subdesc: "48 pieces"

    },
    {
      title: "Gold Classics",
      desc: "Timeless gold jewelry for every occasion",
      img: "/public/m2.jpg",
        subdesc: "36 pieces"

    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className='flex flex-col items-center justify-center mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' 
      id='About' 
      style={{ background: '#1a1a1a' }}
    >

      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-white'>
        Our <span className='underline underline-offset-4 decoration-yellow-300 font-light'>Collections</span>
      </h1>

      <p className='text-white max-w-90 text-center mb-10 mt-4'>
Explore our curated collections, each telling a unique story of craftsmanship and beauty.

      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <Card 
            key={index} 
            sx={{ width: 350, height: 450, position: 'relative', borderRadius: 3, overflow: 'hidden' }}
          >
            <CardMedia
              component="img"
              image={card.img}
              alt={card.title}
              sx={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
            {/* Overlay */}
            <Box 
              sx={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                height: '40%', 
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              
                p: 2
              }}
            >
              <Typography variant="h5" component="div" sx={{ fontWeight: 'bold', mb: 1 }}  className="sans-serif"    >
                {card.title}
              </Typography>
              <Typography variant="body2"sx={{ fontWeight: 'bold',mb:2, }}  >
                {card.desc}
              </Typography>
                 <Typography variant="body2"sx={{ fontWeight: 'bold', color: 'rgb(253, 224, 71)' }}  >
                {card.subdesc}
              </Typography>
            </Box>
          </Card>
        ))}
      </div>

    </motion.div>
  )
}

export default About;
