import {React,useState} from 'react'
import FoodCard from './FoodCard'
import Slider from "react-slick";
export default function Categories() {
    
    let slide=4;
    let width=window.innerWidth;
    if(width<768){
        slide=1
    }
    window.addEventListener('resize', ()=>{
        width=window.innerWidth;
        if(width>768){
            if(width=='768'){   
                slide=1  
            }else{
                slide=4 
            }
        }
        
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slide,
        slidesToScroll: 1
      };
    
  return (
    <section >
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <center><h2>Our Popular <span style={{'color':'#E73D61'}}>Categories</span></h2></center>
                </div>
                <div className='col-md-3 col-sm-6 col-6 p-3'>
                    <div className='categories-card'>
                    <img src={process.env.PUBLIC_URL+"/assets/images/burger.svg"}/>&nbsp;&nbsp;&nbsp;Burger
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-6 p-3'>
                    <div className='categories-card'>
                        <img src={process.env.PUBLIC_URL+"/assets/images/pizza.svg"}/>&nbsp;&nbsp;&nbsp;Pizza
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-6 p-3'>
                    <div className='categories-card'>
                        <img src={process.env.PUBLIC_URL+"/assets/images/dish.svg"}/>&nbsp;&nbsp;&nbsp;Set Menu
                    </div>
                </div>
                <div className='col-md-3 col-sm-6 col-6 p-3'>
                    <div className='categories-card'>
                        <img src={process.env.PUBLIC_URL+"/assets/images/fast-food.svg"}/>&nbsp;&nbsp;&nbsp;Combo Meal
                    </div>
                </div>
            </div>
            <div className='row'>
                <Slider {...settings}>
                    <div>
                        <FoodCard img="/assets/images/burger.jpg" cardheading='Chese Burger' price="$50.23"/>
                    </div>
                    <div>
                        <FoodCard img="/assets/images/burger.jpg" cardheading='Chese Burger' price="$150.23"/>
                    </div>
                    <div>
                        <FoodCard img="/assets/images/burger.jpg" cardheading='Chese Burger' price="$250.23"/>
                    </div>
                    <div>
                        <FoodCard img="/assets/images/burger.jpg" cardheading='Chese Burger' price="$40.23"/>
                    </div>
                    <div>
                        <FoodCard img="/assets/images/burger.jpg" cardheading='Chese Burger' price="$50.23"/>
                    </div>
                   
                </Slider>
            </div>
           

        </div>
        
    </section>
  )
}
