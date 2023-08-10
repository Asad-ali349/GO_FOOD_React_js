import React from 'react'
import '../App.css'
export default function ContactForm() {

  return (
    <div className='container'>
      <div className='row mt-4 '>
        <div className='col-md-12 mb-4'>
          <h2>Contact Us</h2>
        </div>
        <div className='col-md-12 '>
          <div className='row d-flex  flex-row-reverse'>
            <div className='col-md-4'>
              <img src={process.env.PUBLIC_URL+"/assets/images/contactus.png"} className="contactus-img"/>
            </div>
            <div className='col-md-8'>
              <div className='row contactus-form p-1'>
                <div className='col-md-4 contact-information'>
                  <div className='row'>
                    <div className='col-md-12 mt-4'>
                      <h6>Contact Information</h6>
                    </div>
                    <div className='col-md-12 d-flex mt-4'>
                      <div className="contact_icon">
                        <i class='fas fa-envelope' style={{fontSize:'20px'}}></i>
                      </div>
                      <div>
                          <div >
                            <span className="f-15">Email</span>
                          </div>
                          <div>
                            <span className='f-20'>hello@gmail.com</span>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-12 d-flex mt-4'>
                      <div className="contact_icon">
                        <i class='fas fa-phone-alt' style={{fontSize:'20px'}}></i>
                      </div>
                      <div>
                          <div >
                            <span className="f-15">Phone</span>
                          </div>
                          <div>
                            <span className='f-20'>+92-316-7429529</span>
                          </div>
                      </div>
                    </div>
                    <div className='col-md-12 d-flex mt-4'>
                      <div className="contact_icon">
                        <i class='fas fa-map-marker-alt' style={{fontSize:'20px'}}></i>
                      </div>
                      <div>
                          <div >
                            <span className="f-15">Address</span>
                          </div>
                          <div>
                            <span className='f-20'>844 Moris Park avenue</span>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-8'>

                  <div className='row'>
                      <div className='col-md-12 mt-4 px-4'>
                        <h5>Get in touch</h5>
                      </div>
                  </div>
                  <form>
                    <div className='row p-4'>
                      <div className='col-md-6'>
                        <label>Your Name</label>
                        <input type="text" className='form-control' placeholder='Your Name'></input>
                      </div>
                      <div className='col-md-6'>
                        <label>Your Email *</label>
                        <input type="text" className='form-control' placeholder='Your Email'></input>
                      </div>
                      <div className='col-md-12'>
                        <label>Subject *</label>
                        <input type="text" className='form-control' placeholder='Subject'></input>
                      </div>
                      <div className='col-md-12'>
                        <label>Your Message</label>
                        <textarea type="text" className='form-control' rows="5" placeholder='Your Message'></textarea>
                      </div>
                      <div className='col-md-12 d-flex justify-content-end mt-4'>
                        <button className='btn btn-primary' type="button">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
