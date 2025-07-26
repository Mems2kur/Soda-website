import React from 'react'
import splash from "../banner/splash.png"
import cup from "../banner/cup.png"
import { motion,AnimatePresence,easeInOut, animate, delay } from 'framer-motion';
const sligeLeft =(delay)=>{
    return{
        hidden:{
            x:-100,
            opacity:0,
            
        },
        show:{
            x:0,
            opacity:1,
            transition:{
                delay:delay,
                duration:0.5,
            }
        }
    }
}
function Banner() {
  return (
    <div className='container grid md:grid-cols-2 grid-cols-1  items-center jusity-center mt-[50px] py-20 space-y-8 gap-20'>
            <div className='images relative basis-1/2'>
               <motion.div 
               
               initial={{x:-100,
            opacity:0,
            rotate: -180,}}
               whileInView={{x:0,
            opacity:1,
            rotate:0,
            transition:{
                delay:0.5,
                duration:0.5,
            }}}
               className='image-back z-0 relative top-[95px]'>
                <img src={splash} alt="" className='w-[500px] ' />
                </motion.div> 
                <motion.div
                variants={sligeLeft(1)}
               initial="hidden"
               whileInView="show"
                className=''>
                    <img src={cup} alt="" className='image-front w-[320px] z-10 md:w-[400px] absolute -top-[100px] md:left-[50px]'/>
                </motion.div>    
            </div>

            <div className='content md:text-start text-center py-10'>
                <h1 className='font-bold text-4xl py-5'>Refreshment Starts Here</h1>
                <motion.p
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    delay:0.5,
                    duration:0.5
                }}
                className='text-gray-600 leading-loose'>Step into a world of bold bubbles and irresistible flavors.  Whether it's the juicy burst of Fanta, the crisp coolness of Sprite, the timeless fizz of Coca-Cola, or the smooth kick of Pepsi, our collection of iconic sodas brings refreshment to life. <br />Each bottle delivers its own unique taste, made to lift your mood, spark your senses, and fuel your moments — from chill hangouts to epic adventures.No matter your vibe, there’s a soda here to match.</motion.p>
                <motion.button 
                initial={{opacity:0, y:100}}
                whileInView={{opacity:1, y:0}}
                transition={{
                    delay:0.8,
                    duration:0.5
                }}
                className='mt-5 py-2 border-2 px-4 rounded font-normal text-[#cf4f00] border-[#cf4f00] hover:bg-orange-500 hover:text-white hover:duration-300 focus:outline-none transition ease-in-out'>Buy Now</motion.button>
            </div>
    </div>
  )
}

export default Banner