import React from 'react'
import blog1 from "../Blogs/blog1.jpg"
import blog2 from "../Blogs/blog2.jpg"
import blog3 from "../Blogs/blog3.jpg"
import blog4 from "../Blogs/blog4.jpg"
import { UpdateFollower } from 'react-mouse-follower'
const cardContent = [
  {
    id: 1,
    title: "Fanta",
    para: "A blast of fruity fun! Fanta delivers bold citrus flavor with every bubbly sip.",
     image: blog4,
  },
  {
    id: 2,
    title: "Pepsi",
    para: "Smooth, refreshing, and iconic — Pepsi is the ultimate drink to spark up any moment.",
    image: blog2
  },
  {
    id: 3,
    title: "Sprite",
    para: "Crisp and clear, Sprite offers a lemon-lime punch that's perfect for any thirst.",
    image: blog3
  },
  {
    id: 4,
    title: "Coca-Cola",
    para: "The classic soda you know and love — Coca-Cola brings timeless taste and joyful refreshment.",
   
     image: blog1
  },

]
function Blogs() {
  return (
    <div className='bg-gray-200/40'>
        <div className="container flex flex-col items-center justify-center">
            <div className="card grid md:grid-cols-2 lg:grid-cols-4 grid-col-1 w-[400px] md:w-full gap-10 mb-10 py-14 place-items-center ">
                {
                    cardContent.map((item,id)=>(
                      <UpdateFollower
                      key={item.id}
                      mouseOptions={{
                                backgroundColor: 'black',
                               zIndex: 5,
                                scale:6,
                                textColor: 'white',
                                textFontSize: '2.5px',
                                followSpeed: 1.5,
                                text: 'read more'
                               
                                }}
                      >
                          <div key={id} className='bg-white hover:-translate-y-2 mx-auto duration-200 transition ease-in flex flex-col items-center p-6 rounded-md shadow-lg '>
                           <img src={item.image}  className="w-[200px] h-[200px]  mb-4" />
                            <h3 className="font-bold text-xl">{item.title}</h3>
                            <p className="text-gray-600 mt-2">{item.para}</p>
                           </div>
                      </UpdateFollower>

                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Blogs