import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid px-5" >
                <a className="navbar-brand" href="#"><img src={process.env.PUBLIC_URL+"/logo/logo.png"} className="navLogo"/></a>
                <a className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" ></span>
                </a>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0" style={{'marginLeft':'auto'}}>
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/aboutUs">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contactUs">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " to="/Faq">FAQ's</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "><i className="fa fa-search"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link "><button className="btn btn-primary signUp_btn">Sign Up</button></a>
                        </li>
                    </ul>
                    <form>

                    </form>
                </div>
            </div>
        </nav>
    </div>
  )
}
