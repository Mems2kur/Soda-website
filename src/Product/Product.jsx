import React from 'react'
import FantaB from "../Hero/FantaB.png"
import pepsiB from "../Hero/pepsiB.png"
import sprite from "../Hero/sprite.png"
import cokeB from "../Hero/cokeB.png"
import { UpdateFollower } from 'react-mouse-follower';
import { motion,AnimatePresence,easeInOut, animate, delay } from 'framer-motion';

const SlideUp=()=>{
   return{
     hidden:{
        opacity:0,
        y:0,
    },
    show:{
        opacity:1,
        y:-100,
        transition:{
            duration:0.5,
            delay:0.5,
            
        }
    }
   }

}
const cards=[
    {
        id:1,
        title:"Orange Fanta",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus.",
        order:"Buy Now",
          image: FantaB,
    },
      {
        id:2,
        title:"Pepsi",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus.",
        order:"Buy Now",
        image: pepsiB,
    },
      {
        id:3,
        title:"Sprite",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus.",
        order:"Buy Now",
        image:sprite,
    },
      {
        id:4,
        title:"Coke",
        subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, voluptatibus.",
        order:"Buy Now",
        image: cokeB
    }
]
function Product() {
  return (
    <div className='product bg-gray-100'>
            <motion.div 
            
            className="container py-14">
                <motion.h1 
                variants={SlideUp()}
            initial="hidden"
            whileInView="show"
                className='font-semibold text-[40px] items-center text-center py-14 mt-[60px] space-y-8'>Our Product</motion.h1>
                <div className='grid lg:grid-cols-4 sm:grid-cols-2  grid-cols-2 gap-10 items-center '>
                    {
                        cards.map((data,id)=>{ return(
                            <UpdateFollower
                               key={data.id}
                              mouseOptions={{
                                backgroundColor: 'white',
                                zIndex: 2,
                                scale: 1,
                                followSpeed: 0.5,
                               
                                }}>
                                <motion.div
                                variants={SlideUp()}
                                initial="hidden"
                                whileInView="show"
                                className='max-w-sm bg-white rounded-xl shadow-lg overflow-hidden p-5 flex  flex-col items-center justify-center mx-w-[300px] mx-auto'>
                                <img src={data.image} alt=""  className='w-[100px] hover:rotate-12 hover:scale-110 duration-300'/>
                                <div className='text-center'>
                                <h1 className='font-semibold py-2'>{data.title}</h1>
                                <p className='text-gray-600 py-2 mb-2 text-center'>{data.subtitle}</p>
                                <button className='hover:outline-white py-2 border-2 px-4 rounded font-normal text-[#cf4f00] border-[#cf4f00] hover:bg-orange-500 hover:text-white hover:duration-300 focus:outline-none transition ease-in-out'>{data.order}</button>
                            
                                </div>
                               </motion.div>
                            </UpdateFollower>
                            
                        )})
                    }
                </div>
            </motion.div>
    </div>
  )
}

export default Product