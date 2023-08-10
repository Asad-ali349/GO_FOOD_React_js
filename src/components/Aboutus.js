import React from 'react'

export default function Aboutus() {
  return (
    <section className='aboutus-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mt-5'>
                    <center><img src={process.env.PUBLIC_URL+"/assets/images/title.png"}></img>
                    <h1>About Our <span className='primay-color'>Food</span> & <span className='primay-color'>Restaurant</span></h1>
                    <p className='about-subheading'>It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem</p></center>
                </div>
                <div className='col-md-12 mt-5'>
                    <div className='row d-flex flex-row-reverse'>
                        <div className='col-md-6 mb-4'>
                            <div className='aboutus-image-section'>
                                <img src={process.env.PUBLIC_URL+"/assets/images/about-img.jpg"} className="aboutus-image"/>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='aboutus-text'>
                                <h3>
                                    Best Food
                                </h3>
                                <p className='aboute-description'>
                                
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscureContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    </section>
  )
}
