import { useState } from 'react'
import Hero from './Hero/Hero'
import './App.css'
import Product from './Product/Product';
import { MouseFollower } from 'react-mouse-follower';
import Banner from './banner/Banner';
import Flavor from './Flavor/Flavor';
import Blogs from './Blogs/Blogs';
import Questions from './Questions/Questions';
import Footer from './footer/Footer';
function App() {
  

  return (
    <div className="app overflow-x-hidden">
      <MouseFollower />
        <Hero/>
        <Product />
        <Banner />
        <Flavor />
        <Blogs/>
        <Questions />
        <Footer />
    </div>
  )
}

export default App
