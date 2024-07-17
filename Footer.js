import React from 'react'
import { NavLink } from 'react-bootstrap';
import "../Users_style/Footer.css";
const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="row footer">
                        <div className='col-12 col-lg-10 mx-auto cl'>
                            <div className="row">
                                <div className="col-6 col-lg-3">
                                    <ul>
                                        <h6>ABOUT US</h6>
                                        <li className='abt'><i className="fas fa-location"> Address :</i>
                                            <address className='add'>
                                                419-420, Angel Business Center 1,abc Circle, Mota Varachha, Surat, Gujarat 394101,
                                            </address>
                                        </li>
                                        <li className='abt'>
                                            <i className="fa fa-envelope">  Have any questions:</i>
                                            <NavLink className='email' href="https://mail.google.com/mail/u/0/#search/pratikshasheliya%40gmail.com">
                                                pratikshasheliya@gmail.com
                                            </NavLink> </li>
                                        <li className='abt'><i className="fa fa-phone"> Call</i>
                                            <address className='fotercall'>
                                                7778077120
                                            </address>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <ul>
                                        <h6>QUICK LINKS</h6>
                                        <li >   <NavLink className='ser' href="/home"><i className="fas fa-arrow-right"></i> Home
                                        </NavLink></li>
                                        <li > <NavLink className='ser' href="/vehicle"><i className="fas fa-arrow-right"></i>  Vehicle Models
                                        </NavLink></li>
                                        <li >  <NavLink className='ser' href="/service"> <i className="fas fa-arrow-right"></i> Service
                                        </NavLink></li>
                                        <li >  <NavLink className='ser' href="/contact"> <i className="fas fa-arrow-right"></i> Contact Us
                                        </NavLink></li>
                                        <li >  <NavLink className='ser' href="/about"> <i className="fas fa-arrow-right"></i> About
                                        </NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <ul className='alv'>
                                        <h6>ALL VEHICLES</h6>
                                        <li> <NavLink className='ser' href="/bike">
                                            <i className="fa fa-bicycle"> Bikes</i>
                                        </NavLink></li>
                                        <li> <NavLink className='ser' href="/car"> <i className="fa fa-car"> Cars</i>
                                        </NavLink></li> <li> <NavLink className='ser' href="/truck"><i className="fa fa-truck"> Trucks </i>
                                        </NavLink ></li> <li> <NavLink className='ser' href="/bus"><i className="fa fa-bus"> Buses </i>
                                        </NavLink></li>
                                    </ul>
                                </div>
                                <div className="col-6 col-lg-3">
                                    <h6>Follow Us</h6>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <NavLink href="https://www.facebook.com/">
                                                <i className='fab fa-facebook-f fontawesome-style'></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink href="https://www.instagram.com/">
                                                <i className='fab fa-instagram fontawesome-style'></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink href="https://www.youtube.com/">
                                                <i className='fab fa-youtube fontawesome-style'></i>
                                            </NavLink>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <NavLink href="https://www.twitter.com/">
                                                <i className='fab fa-twitter fontawesome-style'></i>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className='main-hero-para frt text-center w-100'>
                                    Copyright <i className="fa fa-copyright" aria-hidden="true">2022 vehicle. All rights reserved.</i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer