import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import ReactStars from 'react-stars'
import "../Users_style/Home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import bikehome from '../images/home/bikehome.jpeg'
import carhome from '../images/home/carhome.webp'
import truckhome from '../images/home/truckhome.jpeg'
import bushome from '../images/home/bushome.jpeg'
import manhome from '../images/home/manhome.jpeg';
import mainhome from '../images/home/mainhome.jpeg'
import herologo from '../images/home/herologo.jpg'
import suzukilogo from '../images/home/suzukilogo.png'
import royallogo from '../images/home/royallogo.jpg'
import tvslogo from '../images/home/tvslogo.jpg'
import hondalogo from '../images/home/hondalogo.jpg'
import hyundailogo from '../images/home/hyundailogo.png'
import volvologo from '../images/home/volvologo.jpg'
import toyotalogo from '../images/home/toyotalogo.png'
import kialogo from '../images/home/kialogo.png'
import tatalogo from '../images/home/tatalogo.jpg'
import mahindralogo from '../images/home/mahindralogo.png'
import eicherlogo from '../images/home/eicherlogo.gif'
import ashoklaylogo from '../images/home/ashoklaylogo.png'
import bharatlogo from '../images/home/bharatlogo.jpg'
import scanialogo from '../images/home/scanialogo.png'
import homeprofile from '../images/home/homeprofile.png'

const Home = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:8000/feedbackdata`)
      .then((res) => {
        setFeedback(res.data.feedbackdata)
        console.log("setfeedback", res.data.feedbackdata);
      })
  }, [])
  return (
    <>
      <div>
        <Navbar />
        <div className="container-fuild ">
          <div className="row">
            <div className="col-xl-12 im1">
              <img className="d-block bimg " src={mainhome} />
              <div>
                <div className="hero-text ">
                  <h1 className="hh1">
                    <span className="ar">Rent a vehicle at </span>
                    <span className="ar" style={{ color: "red" }}>
                      low prices!
                    </span>
                  </h1>
                  <p className="homeep">
                    “Life is not about waiting for the storms to pass: it’s
                    about learning how to ride in the rain!”
                  </p>
                  <NavLink exact to="/register">
                    <button
                      type="button"
                      className="btn btn-outline-success  regbuttonns">
                      Register
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="maincontainner">
          <div className="container-fuild vehiclstype  ">
            <div className="row clarow">
              <p className="vehicletitle">
                 Choose The Vehicle You Want To Rent
              </p>
              <div className="col-xl-3 col-12 ">
                <div className="homediv">
                  <NavLink exact to="/bike">
                    <img className="homimg" src={bikehome} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-3 col-12 ">
                <div className="homediv">
                  <NavLink exact to="/car">
                    <img className="homimg" src={carhome} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-3 col-12 ">
                <div className="homediv">
                  <NavLink exact to="/truck">
                    <img className="homimg" src={truckhome} alt="" />
                  </NavLink>
                </div>
              </div>
              <div className="col-xl-3 col-12 ">
                <div className="homediv">
                  <NavLink exact to="/bus">
                    <img className="homimg" src={bushome} alt="" />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fuild">
          <div className="row homevehicle">
            <div className="col-xl-3 ">
              <div >
                <img className="manimg" src={manhome} alt="" />
              </div>
            </div>
            <div className="col-xl-6">
              <div className="">
                <p className="home-content">Not Sure, Which vehicle to Rent?</p>
                <p className="homes-content">
                  Let us help you find the dream vehicle
                </p>
              </div>
            </div>
            <div className="col-xl-3 ">
              <div>
                <a exact href="/vehicle">
                  <button type="button" className="btn home-button ">
                    All Vehicle
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="carouselmaindiv">
          <div className="container">
            <p className="popular">Our Brands</p>
            <div className="row ">
              <div className="col-sm-12">
                <div id="inam" className="carousel slide" data-ride="carousel">
                  <div className="carousel-inner ">
                    <div className="carousel-item   active  ">
                      <div className="container caritem">
                        <div className="row ">
                          <div className="col-xl-1"></div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={herologo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className=" ">
                              <img src={suzukilogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={royallogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={tvslogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={hondalogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-1"></div>
                          <div className="col-xl-12 col-12"></div>
                          <div className="col-xl-12 col-12"></div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item  ">
                      <div className="container caritem">
                        <div className="row ">
                          <div className="col-xl-1"></div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={hyundailogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={volvologo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={toyotalogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={kialogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={tatalogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-1"></div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item  ">
                      <div className="container caritem">
                        <div className="row ">
                          <div className="col-xl-1"></div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={mahindralogo} className="ssimg"></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={eicherlogo} className="ssimg" ></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={ashoklaylogo} className="ssimg" ></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div className="">
                              <img src={bharatlogo} className="ssimg" ></img>
                            </div>
                          </div>
                          <div className="col-xl-2">
                            <div>
                              <img src={scanialogo} className="ssimg" ></img>
                            </div>
                          </div>
                          <div className="col-xl-1"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#inam" className="carousel-control-prev" data-slide="prev" >
                    <span className="carousel-control-prev-icon"></span>
                  </a>
                  <a href="#inam" className="carousel-control-next" data-slide="next" >
                    <span className="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fuild sercontainer">
          <div className="row rowstp">
            <p className="popular">How to book a vehicle online</p>
            <div className="col-xl-3 col-12">
              <div className="stepdiv">
                <div className="stpdiv">
                  <i className="fas fa-search stepicon"> </i>
                </div>
                <p className="prgstep">step1</p>
                <p className="prgstepss">Search Vehicle</p>
                <p className="lowwerprg">search the vehicle you like</p>
              </div>
            </div>
            <div className="col-xl-3 col-12">
              <div className="stepdiv">
                <div className="stpdiv">
                  <i className="fa fa-book stepicon"></i>
                </div>
                <p className="prgstep">step2</p>
                <p className="prgstepss">Fill the information</p>
                <p className="lowwerprg">
                  Book the vehicle you like and fill in the information.
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-12">
              <div className="stepdiv">
                <div className="stpdiv">
                  <i className="fa fa-automobile stepicon"></i>
                </div>
                <p className="prgstep">step3</p>
                <p className="prgstepss">get Approved & Drive</p>
                <p className="lowwerprg">
                  Drive your vehicle after getting permission
                </p>
              </div>
            </div>
            <div className="col-xl-3 col-12">
              <div className="stepdiv">
                <div className="stpdiv">
                  <i className="fa fa-handshake-o stepicon"></i>
                </div>
                <p className="prgstep">step4</p>
                <p className="prgstepss">Return Vehicle</p>
                <p className="lowwerprg">
                  After enjoying your trip, return the vehicle to our location
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row homefeedback">
            <div>
              <i className="fas fa-solid fa-quote-left homepicon"></i>
              <h6 className="Testimonials">Testimonials</h6>
              <p className="line">___________________________</p>
              <h6 className="Testimonialss">Here is what our users are saying</h6>
              <AliceCarousel autoPlay={true} autoPlayInterval={1500} infinite={true} >
                {feedback.map((i) => (
                  <>
                    <div className="npmcc">
                      <div className="homedev">
                        <img src={homeprofile} alt="Admin" className="rounded-circle borderdev " width="100" />
                      </div>
                      <p className="homefeed">{i.feedback}</p>
                      <p className="homenamefeed">- {i.name}</p>
                    </div>
                    <div className="bookrate">
                      <ReactStars
                        edit={false}
                        count={5}
                        half={true}
                        value={i.rate}
                        size={35}
                        color2={'#ffd700'}
                      />
                    </div>
                  </>
                ))}
              </AliceCarousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
