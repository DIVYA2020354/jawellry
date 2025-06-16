import React from 'react'
import { motion } from  "framer-motion" 
import { toast } from 'react-toastify';


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0b9d47b4-df43-425b-91b6-9a0080eb4cb7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message)
      setResult("");
    }
  };

  return (
    <motion.div
    
        initial={{opacity:0,x:-200}}
      transition={{duration:1}}
      whileInView={{opacity:1,x:0}}
      viewport={{once:true}}
      
     className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
     <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center text-yellow-500'>Get<span className='underline underline-offset-4 decoration-black under font-light ml-3 text-black'>in Touch</span></h1>
    <p className='text-center text-gray-500 mb-12 w-90 mx-auto'>Have questions about our jewelry or need assistance? We're here to help.

</p>
 <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-8 '>

    <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left text-black'>
            Your name
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2 ' type='text' name='Name' placeholder='Your Name' required/>
        </div>
        <div className='w-full md:w-1/2 text-left md:pl-4 text-black'>
            Your Email
            <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2  ' type='Email' name='Email' placeholder='Your Email' required/>
        </div>
    </div>
    <div className='my-6 text-left text-black'>
        Message
        <textarea className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none ' name='Message' placeholder='Message' required></textarea>
    </div>
    <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded'>{result ? result:"send message"}</button>
 </form>
      
    </motion.div>
  )
}

export default Contact
