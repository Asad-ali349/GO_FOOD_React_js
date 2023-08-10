import React from 'react'

export default function MobileApp() {
    return (
        <section className='feature-section'>
            <div className='container-fluid'>

                <div className='row d-flex flex-row-reverse'>
                    <div className='col-md-12 application-text'>
                            <h1>Get More With<span className='primay-color'> Our Application</span></h1>
                    </div>
                    <div className='col-md-6 d-flex justify-content-end'>
                        <img src={process.env.PUBLIC_URL+"assets/images/mobile-app.png"} width="100%"></img>
                    </div>
                    <div className='col-md-6 application-text'>
                        <div>
                            <p className='mobile-description'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt</p>
                            <div className='row mt-5'>
                                <div className='col-md-12'>
                                    <h4 className='application-bullets'>01</h4> 
                                    <h4 className='application-bullets-text'>Follow Delivery Status</h4>
                                    
                                </div>
                                <div className='col-md-12'>
                                    <h4 className='application-bullets'>02</h4> 
                                    <h4 className='application-bullets-text'>Order From Any Location</h4>
                                    
                                </div>
                                <div className='col-md-12'>
                                    <h4 className='application-bullets'>03</h4> 
                                    <h4 className='application-bullets-text'>Get Important Notices</h4>
                                    
                                </div>
                                
                            </div>
                            <a className='btn btn-dark  mt-5'>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <i className='fab fa-google-play' style={{color:'white',fontSize:'25px',marginTop:'15px'}}></i>
                                    <div>
                                        Download From<br/><b>Google Play</b>
                                    </div>
                                </div>
                                
                            </a>
                            <a className='btn btn-dark  mt-5'>
                                <div style={{display:'flex',justifyContent:'center'}}>
                                    <i className='fab fa-app-store' style={{color:'white',fontSize:'35px',marginTop:'15px'}}></i>
                                    <div >
                                        Download From<br/><b>App Store</b>
                                    </div>
                                </div>
                                
                            </a>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
      )
}
