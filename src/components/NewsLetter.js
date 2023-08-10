import React from 'react'

export default function NewsLetter() {
  return (
    <section>
      <div className='container newsletter mb-5' >
        <div className='row'>
            <div className='col-md-6 '>
                <p className='text-white'>Get the latest news and offers</p>
                <h1 className='text-white newsletter-heading'>Subscribe To Our Newsletter</h1>
            </div>
            <div className='col-md-6'>
                <div className="input-group mb-3">
                    <input type="text" className="form-control news-input" placeholder="Enter Your Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary btn-news" type="button">Button</button>
                    </div>
                </div>
            </div>

        </div>
      </div>
   
    </section>
  )
}
