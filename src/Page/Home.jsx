import React, { useEffect } from 'react'
import Hero from '../component/Hero'
import Women from '../component/Women'
import LastPage from '../component/LastPage'
import Electronic from '../component/Electronic'
import Footer from '../Layouts/Footer'
import Jewelry from '../component/Jewelry'


const Home = () => {
    useEffect(()=>{
        document.title = 'Home | Page'
    })
  return (
    <div className='container'>
       <Hero />
      <Electronic  />      
      <Women />
      <Jewelry />
      <LastPage />
     
      {/* <Hero cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart}/>
      <Electronic  cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart}/>      
      <Women cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart}/>
      <Jewelry cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart}/>
      <LastPage cart={cart} handleAddToCart={handleAddToCart}  setCart={setCart}/>
       */}
    </div>
    
  )
}

export default Home