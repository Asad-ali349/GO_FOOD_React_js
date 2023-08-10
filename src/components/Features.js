import React from 'react'

export default function Features() {
  return (
    <section className='feature-section'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-6 text-center'>
                    <img src={process.env.PUBLIC_URL+"assets/images/location.png"} width="80%"></img>
                </div>
                <div className='col-md-6 feater-text'>
                    <div>
                        <h1><span className='primay-color'>Sit</span> at Home</h1>
                        <h1>We Will <span className='primay-color'>Take Care</span></h1>
                        <p className='feature-description'>You just order your favourite food and rest at your place we will deliver it in time. No delay no time lose and no frustration. Chill and relax and enjoy the food at time</p>
                        <div className='row mt-5'>
                            <div className='col-md-2 text-center'>
                                <img src={process.env.PUBLIC_URL+"assets/images/fast_delivery.png"}></img>
                                <h6 className='primay-color mt-3'>Fast Delivery in 1 hour</h6>
                            </div>
                            <div className='col-md-2 text-center'>
                                <img src={process.env.PUBLIC_URL+"assets/images/bike.png"}></img>
                                <h6 className='primay-color mt-3' >150+ Delivery Man</h6>
                            </div>
                            <div className='col-md-2 text-center'>
                                <img src={process.env.PUBLIC_URL+"assets/images/baker.png"}></img>
                                <h6 className='primay-color mt-3'>200+ Resturant and Cafe</h6>
                            </div>
                            <div className='col-md-2 text-center'>
                                <img src={process.env.PUBLIC_URL+"assets/images/location-icon.png"}></img>
                                <h6 className='primay-color mt-3' >More Area Coverage</h6>
                            </div>
                        </div>
                        <button className='btn btn-primary btn_order mt-5'>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
