import React from 'react'
import { useState } from 'react'
const faqs = [
  {
    id: 1,
    question: "What is Fanta?",
    answer: "Fanta is a fruity carbonated soft drink known for its bold orange flavor and fun, bubbly personality.",
  },
  {
    id: 2,
    question: "Is Pepsi the same as Coke?",
    answer: "No. While both are cola-flavored sodas, they have different recipes and taste profiles.",
  },
  {
    id: 3,
    question: "Is Sprite caffeine-free?",
    answer: "Yes! Sprite is a caffeine-free lemon-lime soda with a crisp, clean taste.",
  },
];

function Questions() {
    const [active,setActive] = useState(null);
    const handleClick=(index)=>{
        setActive(active === index ? null:  index)
    }
  return (
    <div className='question container'>
        <div className='max-w-2xl mx-auto py-14'>
            <h1 className='font-semibold text-center text-3xl py-3 mb-2'>Frequently Asked Questions</h1>
            {faqs.map((faq,index)=>(
                <div key={faq.id} className='flex border-b border-gray-300 flex-col items-start py-4 text-start`   justify-start'>
                        <button className='w-full text-left p-2 font-semibold text-2xl text-start' onClick={()=>handleClick(index)}>{faq.question}</button>
                        {
                          active === index &&(
                             <div className="p-4 bg-gray-50 text-gray-700 border-t">{faq.answer}</div>
                          )
                        }
                </div>
            ))}
        </div>
    </div>
  )
}

export default Questions