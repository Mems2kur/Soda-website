import React from 'react'
import Logo from "../Hero/Logo.png"
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import CardImg from "../footer/CardImg/credit-cards.webp"
function Footer() {
  return (
    <div className='footer bg-orange-500 p-10 text-white'>
        <div className="container">
            <div className='grid md:grid-cols-3 sm:grid-cols-2 mb-4 gap-10 grid-cols-1'>
                    <div className='font-semibold'>
                        <img src={Logo} alt=""  className='w-[100px] mb-10'/>
                        <div className='text-xl'>
                        <p className='flex gap-4 mb-3'><FaPhoneAlt /> +234 812 345 6789</p>
                        <p className='flex gap-4'><MdLocationOn /> No. 15, Ikeja, Lagos</p>
                        </div>
                        </div>
                    <div className='second flex flex-col justify-center '>
                        <h1 className='font-bold text-3xl'>Quick Links</h1>
                        <div className='flex gap-20 py-2'>
                        <div className='py-6 list-none font-semibold text-white'>
                        <li className='p-2'>Home</li>
                        <li className='p-2'>About</li>
                        <li className='p-2'>Contact Us</li>
                        <li className='p-2'>Privacy policy</li>
                        </div>

                        <div className='py-6 font-semibold list-none text-white'>
                        <li className='p-2'>Home</li>
                        <li className='p-2'>About</li>
                        <li className='p-2'>Contact Us</li>
                        <li className='p-2'>Privacy policy</li>
                        </div>
                        </div>
                        
                        
                    </div>

                    <div className=' ml-10'>
                        <h1 className='font-bold text-3xl mb-4'>Follow us</h1>
                    <div className="flex gap-4 text-2xl text-white mb-4 mt-10">
                        <a href="https://facebook.com"><FaFacebookF /></a>
                        <a href="https://twitter.com"><FaTwitter /></a>
                        <a href="https://instagram.com"><FaInstagram /></a>
                        <a href="https://linkedin.com"><FaLinkedinIn /></a>
                        <a href="https://github.com"><FaGithub /></a>
                        </div>

                        <h3 className='font-bold text-2xl mb-6'>Payment Method</h3>
                        <div>
                            <img src={CardImg} alt="" />
                        </div>
                    </div>
                </div>
                {/* line  */}
                <div className='text-white bg-white/40 w-full h-[1px]'></div>
                <p className='mt-8 mx-auto text-center '>Copyright &copy; 2025. All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer