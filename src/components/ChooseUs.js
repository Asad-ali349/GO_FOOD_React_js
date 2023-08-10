import React from 'react'
import Slider from "react-slick"
export default function ChooseUs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
      };
  return (
    <section className='choose-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 text-center'>
                    <img src={process.env.PUBLIC_URL+"assets/images/chooseUs.png"} width="80%"></img>
                </div>
                <div className='col-md-6 feater-text'>
                    <div>
                        <h1>Why Our Clients</h1>
                        <h1><span className='primay-color'>Choose Us</span></h1>
                            
                        <p className='feature-description'><span className="primay-color" style={{fontSize:'30px'}}>"</span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt".
                         <span className="primay-color" style={{fontSize:'22px'}}>"</span> </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
