import React from 'react';
import '../App.css'
import FoodCard from './FoodCard'
import Slider from "react-slick";

export default function Categories() {
    // let slide=4;
    // let width=window.innerWidth;
    // console.log(width);
    // if(width<768){
    //     slide=1
    // }
    // window.addEventListener('resize', ()=>{
    //     width=window.innerWidth;
    //     if(width>768){
    //         if(width=='768'){   
    //             slide=1  
    //         }else{
    //             slide=4 
    //         }
    //     }
        
    // })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
    
  return (
    <div className='container '  id='category'>
        <div className='row'>
            <div className='col-md-12'>
                <center><h2>Our Popular <span style={{'color':'#E73D61'}}>Categories</span></h2></center>
            </div>
            <div className='col-md-12 mt-5'>
                <ul className="nav nav-primary" id="pills-warningtab" role="tablist">
                    <li className="nav-item tab-style"><a className="nav-link tab-link active" id="pills-warninghome-tab" data-bs-toggle="pill" href="#pills-warninghome" role="tab" aria-controls="pills-warninghome" aria-selected="true"><center><i className="fas fa-hamburger"></i>&nbsp;&nbsp;&nbsp;Burger</center></a></li>
                    <li className="nav-item tab-style"><a className="nav-link tab-link" id="pills-warningprofile-tab" data-bs-toggle="pill" href="#pills-warningprofile" role="tab" aria-controls="pills-warningprofile" aria-selected="false"><center><i className='fas fa-pizza-slice'></i>&nbsp;&nbsp;&nbsp;Pizza</center></a></li>
                    <li className="nav-item tab-style"><a className="nav-link tab-link" id="pills-warningcontact-tab" data-bs-toggle="pill" href="#pills-warningcontact" role="tab" aria-controls="pills-warningcontact" aria-selected="false"><center><img src={process.env.PUBLIC_URL+"/assets/images/dish.svg"} className="tab-icon"/>&nbsp;&nbsp;&nbsp;Set Menu</center></a></li>
                    <li className="nav-item tab-style"><a className="nav-link tab-link" id="pills-warningcombo-tab" data-bs-toggle="pill" href="#pills-warningcombo" role="tab" aria-controls="pills-warningcombo" aria-selected="false"><center><img src={process.env.PUBLIC_URL+"/assets/images/fast-food.svg"} className="tab-icon"/>&nbsp;&nbsp;&nbsp;Combo Meal</center></a></li>
                </ul>
                <div className="tab-content" id="pills-warningtabContent">
                    <div className="tab-pane fade show active" id="pills-warninghome" role="tabpanel" aria-labelledby="pills-warninghome-tab">
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
                    <div className="tab-pane fade" id="pills-warningprofile" role="tabpanel" aria-labelledby="pills-warningprofile-tab">
                        <div className='row'>
                            <Slider {...settings}>
                                <div>
                                    <FoodCard img="/assets/images/pizza.jpg" cardheading='Chicken Chese Pizza' price="$50.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/pizza.jpg" cardheading='Chicken Chese Pizza' price="$150.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/pizza.jpg" cardheading='Chicken Chese Pizza' price="$250.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/pizza.jpg" cardheading='Chicken Chese Pizza' price="$40.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/pizza.jpg" cardheading='Chicken Chese Pizza' price="$50.23"/>
                                </div>
                            
                            </Slider>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-warningcontact" role="tabpanel" aria-labelledby="pills-warningcontact-tab">
                        <div className='row'>
                            <Slider {...settings}>
                                <div>
                                    <FoodCard img="/assets/images/setmenu.jpg" cardheading='Desi Food' price="$50.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/setmenu.jpg" cardheading='Desi Food' price="$150.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/setmenu.jpg" cardheading='Desi Food' price="$250.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/setmenu.jpg" cardheading='Desi Food' price="$40.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/setmenu.jpg" cardheading='Desi Food' price="$50.23"/>
                                </div>
                            
                            </Slider>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="pills-warningcombo" role="tabpanel" aria-labelledby="pills-warningcombo-tab">
                        <div className='row'>
                            <Slider {...settings}>
                                <div>
                                    <FoodCard img="/assets/images/combo.jpg" cardheading='Combo Meal' price="$50.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/combo.jpg" cardheading='Combo Meal' price="$150.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/combo.jpg" cardheading='Combo Meal' price="$250.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/combo.jpg" cardheading='Combo Meal' price="$40.23"/>
                                </div>
                                <div>
                                    <FoodCard img="/assets/images/combo.jpg" cardheading='Combo Meal' price="$50.23"/>
                                </div>
                            
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
