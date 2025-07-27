import React, { useState } from 'react'
import Navbar from "../Navbar/Navbar"
import FantaB from "../Hero/FantaB.png"
import pepsi1 from "../Hero/pepsi1.png"
import sprite from "../Hero/sprite.png"
import cokeB from "../Hero/cokeB.png"
import { UpdateFollower } from 'react-mouse-follower';
import { motion,AnimatePresence,easeInOut, animate, delay } from 'framer-motion';
import spritelogo from "../Hero/spritelogo.png"
import logoPepsi from "../Hero/logoPepsi.png"
import Logo from "../Hero/Logo.png"
import CokeLogo from "../Hero/CokeLogo.png"

const SlideRigth =(delay)=>{
  return{
    initial:{
      x:100,
      opacity:0
    },
    animate:{
      x:0,
      opacity:1,
      transition:{
        delay:delay,
        duration:0.5,
        ease: easeInOut,
      }
    },
    exit:{
      x:-50,
      opacity:0,
      transition:{
        duration:0.2,
        ease:easeInOut
      }
    }
  }
  
}
const contente = [
  {
    id: 1,
    name: "Orange Fanta",
    subtitle: "Bold citrus flavor with a fizzy twist.",
    order: "Order Now",
    bgColor: "#cf4f00", // orange
    price: "$10",
    modal: "Orange",
    image: FantaB,
    img:Logo,
    
  },
  {
    id: 2,
    name: "Pepsi",
    subtitle: "Smooth, classic refreshment in every sip.",
    order: "Order Now",
    bgColor: "#1e40af", // blue
    price: "$10",
    modal: "Blue",
    image: pepsi1,
     img:logoPepsi,
  },
  {
    id: 3,
    name: "Sprite",
    subtitle: "Cool lemon-lime taste, crisp and clean.",
    order: "Order Now",
    bgColor: "#22c55e", // green
    price: "$10",
    modal: "Green",
    image: sprite,
    img:spritelogo
  },
  {
    id: 4,
    name: "Coke",
    subtitle: "Timeless taste, endless refreshment.",
    order: "Order Now",
    bgColor: "#dc2626", // red
    price: "$10",
    modal: "Red",
    image: cokeB,
    img:CokeLogo,
    
  }
];


function Hero() {
    const [colors,setColor]= useState(contente[0]);
    const handleChanage=(data)=>{
        setColor(data)
    }

  return (
    <motion.div
    initial={{backgroundColor: colors.bgColor}}
    animate={{backgroundColor: colors.bgColor}}
    transition={{duration:0.8,}}
    className=' space-x-10'>
      <Navbar logo={colors.img} />
      <div className="container grid grid-cols-1 md:grid-cols-2 iphone:  gap-20">
        <div className='py-14 flex flex-col order-2 md:order-1  px-1 justify-center items-center md:items-start mr-[20px]'>
        
          <AnimatePresence mode='wait'>
          <UpdateFollower
            
            mouseOptions={{
              backgroundColor: 'white',
              zIndex: 10,
              scale: 10,
              followSpeed: 0.5,
               mixBlendMode: 'difference',
            }}
             >
          <motion.h1 
          key={colors.id}
          variants={SlideRigth(0.2)}
          initial="initial"
          animate="animate"
          exit="exit"
          className='font-bold  text-3xl lg:text-6xl xl:text-7xl text-white font-handwriting text-shadow mr-[20px]'>{colors.name}</motion.h1>
          
          </UpdateFollower>
          </AnimatePresence>


        

          <AnimatePresence mode='wait'>
            <UpdateFollower
      className="sample"
      mouseOptions={{
        backgroundColor: 'white',
        zIndex: 2,
        followSpeed: 1.5,
      }}
    >
      <motion.p 
                variants={SlideRigth(0.4)}
                initial="initial"
                animate="animate"
                exit="exit"
                className='text-gray-300 leading-loose mt-5'>{colors.subtitle}</motion.p> 
         
      
    </UpdateFollower>
               </AnimatePresence>

          <AnimatePresence>
             <UpdateFollower
                mouseOptions={{
                  backgroundColor: colors.bgColor,
                  zIndex: 9999,
                  scale:6,
                  rotate:-720,
                  followSpeed: 1.5,
                  //  mixBlendMode: 'difference',
                              backgroundElement: (
                              <div style={{ width: '100%' }}>
                                <img src={colors.image} alt="..." />
                              </div>
                            ),
                }}
              >
             <motion.button 
              variants={SlideRigth(0.6)}
              initial="initial"
              animate="animate"
              exit="exit"
              className='inline-block text-[#cf4f00] bg-white text-xl p-2 rounded mt-7 font-normal w-[150px]'>{colors.order}</motion.button>  
          
    </UpdateFollower>  
          </AnimatePresence>
           
                <UpdateFollower
            className="sample"
            mouseOptions={{
              backgroundColor: 'white',
              zIndex: 2,
              followSpeed: 1.5,
            }}
          >
      <motion.div 
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            delay:0.5,
            duration:0.2
          }}
          className='flex items-center gap-4 justify-center mr-[10px] md:justify-start  '>
            <div className='md:w-[120px] md:h-[2px] w-[50px] h-[1px] text-gray-300 bg-white '></div>          
            <h5 className='uppercase font-semibold py-10 text-white'>Top recommendation</h5>
           <div className='md:w-[120px] md:h-[2px]  w-[50px] h-[1px] bg-white'></div>
          </motion.div>
    </UpdateFollower>
          
      
       <motion.div 
           initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{
            delay:0.5,
            duration:0.2,
            ease:"easeInOut"
          }}
            className=''
           >
            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-10 gap-20 items-center justify-start max-w-[300px] md:max-w-[500px] md:mr-[150px] mr-[20px]'>
              {
                contente.map((data)=>(
                      <UpdateFollower
                       key={data.id}
      mouseOptions={{
        backgroundColor: data.bgColor,
        zIndex: 5,
        scale:6,
        textColor: 'white',
        textFontSize: '3px',
        followSpeed: 1.5,
        text: 'view details',
      }}
    >
                  <div  key={data.id} onClick={()=> handleChnage(data)} className='flex flex-col items-center hover:scale-105 transition-all duration-200 '>
                    <img src={data.image} alt="" className = {`w-[70px] img-shadow ${colors.image === data.image? "opacity-100 scale-100":"opacity-50"}`} />
                    <p className='text-gray-100 text-[14px] mt-5 line-through'>{data.price}</p>
                    <p className='font-bold mt-1 text-white'>{data.price}</p>
                  </div>
                  </UpdateFollower>
                ))
              }

            </div>
            
           </motion.div>
    
          
        </div>
        
        <div className='order-1 md:order-2'>
          <motion.div
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          transition={{delay:0.2,
            duration:0.5,
            damping:10,
            stiffness:100,
            ease:"easeInOut"
          }}
          >
              <div className='iphone:px-[40px] px-[130px] order-1 md:order-2 flex flex-col md:justify-end iphone:justify-start iphone:mx-auto img-shadow'>
                <h1 className={`font-bold text-[300px] absolute -top-[250px] -left-[250px] w-full text-white/5 font-extrabold z-[-1]`}>{colors.modal}</h1>
                    <img src={colors.image} className='md:w-[320px] iphone:w-[200px] hover:-rotate-45 duration-300' alt="" />
              </div>
          
          </motion.div>
        </div>
        

      </div>
    </motion.div>
  )
}

export default Hero