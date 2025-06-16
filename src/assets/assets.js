import logo from './logo.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
// import header_img from './header_img.png'
import brand_img from './brand_img.jpg'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,
    star_icon,
    // header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Diamond Eternity Ring",
      price: "$4,950",
      image: project_img_1
    },
    {
      title: "Gold Pearl Necklace",
      price: "$2,800",
      image: project_img_2
    },
    {
      title: "Sapphire Earrings",
      price: "$2,50,000",
      image: project_img_3
    },
    {
      title: "Jewels Essence",
      price: "$2,50,000",
      image: project_img_4
    },
    {
      title: "Eternal Shine",
      price: "$2,50,000",
      image: project_img_5
    },
    {
      title: "Luxe Collection",
      price: "$2,50,000",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Luxury Jewelry Consultant",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "Brand Partner – Elite Jewels",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Founder, Oberoi Jewels",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];


export const products = [
  { id: 1, category: 'Rings', name: 'Gold Ring', price: 2500, discount: 10, description: 'Elegant gold ring', reviews: [5,4,4] },
  { id: 2, category: 'Necklaces', name: 'Pearl Necklace', price: 5000, discount: 5, description: 'Classic pearl necklace', reviews: [5,5,4,3] },
  { id: 3, category: 'Bracelets', name: 'Silver Bracelet', price: 3000, discount: 15, description: 'Stylish silver bracelet', reviews: [4,4,5] },
  // add more products
];

export const blogs = [
  { id: 1, title: 'Jewellery Care Tips', content: 'Keep your jewellery clean by...' },
  { id: 2, title: 'Latest Jewellery Trends 2025', content: 'This year, bold colors...' },
  // more blogs
];
