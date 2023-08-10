import React from 'react'
import Categories from '../components/Categories';
import Features from '../components/Features';
import Resturants from '../components/Resturants';
import ChooseUs from '../components/ChooseUs';
import NewsLetter from '../components/NewsLetter';
import MobileApp from '../components/MobileApp';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
export default function Home() {
  return (
    <>
        <Hero/>
        <Categories/>
        <Features/>
        <Resturants/>
        <ChooseUs/>
        <MobileApp/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}
