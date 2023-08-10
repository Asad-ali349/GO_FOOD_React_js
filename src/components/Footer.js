import React from 'react'

export default function Footer() {
  return (
    <footer className='footer'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12 text-center'>
                    <div>
                        <img src={process.env.PUBLIC_URL+"/logo/logo.png"} className='footer_logo'></img>
                        <h5>Call Us to make order</h5>
                        <h5 className='mt-2 footer-phone'>+92 316 7429529</h5>
                        <i className="fab fa-facebook-f footer-icon"></i>
                        <i className="fab fa-instagram footer-icon"></i>
                        <i className="fab fa-twitter footer-icon"></i>
                    </div>
                </div>
                <div className="footer-border-bottom">

                </div>
            </div>
        </div>
    </footer>
  )
}
