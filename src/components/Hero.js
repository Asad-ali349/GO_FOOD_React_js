import React from 'react'

export default function Hero() {
    return (  
        <section className='hero-section'>
            <div className='container-fluid'>
                <div className='row hero'>
                        <div className='col-md-6'><img className='hero_img' src={process.env.PUBLIC_URL+"/assets/images/hero_img.png"}/></div>
                        <div className='col-md-6 '>
                                <div className='hero_text'>
                                    <h1 className='hero_heading'>Experience the<br/> fastest food <span style={{'color':'#E73D61'}}>Delivery</span></h1>
                                    <p className='mt-2'>GoFood, The first and only homegrown food delivery app and website run by restaurant owners, is now live and available for download on iOS and Android platforms
                                    </p>
                                    <div className='mt-4'>
                                        <button className='btn btn-primary btn_order'>Order Now</button>
                                        <button className='btn btn-link'>Download App</button>
                                    </div>
                                </div>
                            
                        </div>
                </div>
            </div>    
        </section>
        
    )
}
