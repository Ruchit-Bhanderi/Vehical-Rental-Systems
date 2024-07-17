import React from "react";
import "../Users_style/About.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import aboutimg from '../images/about/aboutimg.jpeg'
import devangiimg from '../images/about/devangiimg.jpg'
import pratikshaimg from '../images/about/pratikshaimg.jpg'
import krishnaimg from '../images/about/krishnaimg.jpg'
import payalimg from '../images/about/payalimg.jpg'

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="abttmaindiv">
        <div className="container-fuild ">
          <div className="row abttuss">
            <div className="col-xl-5 mb-6">
              <img className="img1" src={aboutimg} alt="" />
            </div>
            <div className="col-xl-5 aboutcontentss">
              <div className="aboutcontent">
                <p className="aboutprrg">
                  Rent Adventure a vehicle has a new face.
                  we decided to give a fresher look to our brand and our services
                  with our fully renewed fleet of vehicles,
                  we are ready to meet all expectations and requirements.
                  If you want to book directly through a supplier,
                  and not through a broker – choose renaissance rent a vehicle.
                  this will give you better flexibility in terms of vehicle choices;
                  vehicle make and model will be confirmed, and not similar to those you selected;
                  you can directly negotiate some of the terms and conditions, payment options,
                  especially if you require unique or long term rental service;
                </p>
              </div>
            </div>
          </div>
          <p className="centered">About Us</p>
        </div>
      </div>
      <div className="container benifcont">
        <div className="row">
          <h1 className="profteam">OUR BENEFITS</h1>
          <div className="col-xl-4 col-12">
            <div className="abt-box">
              <div className="about-icon">
                <i className="fa fa-thumbs-up"></i>
              </div>
              <div className="service-title">
                Our Customers Always 100% Satisfied
              </div>
              <div className="abbt-desc">
                <p className="aboutpprg">
                  We hope that our customer will always be 100% satisfied with
                  our service. Because "excellent customer service is the number
                  one job in any company! It is the personality of the company
                  and the reason why customers come back."
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-12">
            <div className="abt-box">
              <div className="about-icon">
                <i className="fa fa-book"></i>
              </div>
              <div className="service-title">
                We Provide Easier & Faster Bookings
              </div>
              <div className="abbt-desc">
                <p className="aboutpprg">
                  We provide a simple and fast booking method to the customer
                  without any hassle, in which the customer can first register
                  and then login easily and choose the vehicle he/her likes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-12">
            <div className="abt-box">
              <div className="about-icon">
                <i className="fa fa-star"> </i>
              </div>
              <div className="abbt-title">The Lowest Rent</div>
              <div className="service-desc">
                <p className="aboutpprg">
                  We provide low cost vehicle to the customer so that the
                  customer does not face any problem related to money and they
                  can book any vehicle they like and enjoy their journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fuild profcont">
        <h1 className="profteams">Meet Our Team</h1>
        <div className="bordeer"></div>
        <div className="row">
          <div className="col-xl-3 col-12">
            <div className="card-container firstcontainercrd ">
              <div className="upper-container">
                <div className="image-container">
                  <img src={devangiimg} alt="" />
                </div>
              </div>
              <div className="lower-container">
                <div>
                  <h3>Gohil Devangi</h3>
                  <h5>Back-end Developer</h5>
                </div>
                <div>
                  <p>
                    Back-end developers are usually write the web services
                    and APIs used by front-end developers and mobile application developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-12  ">
            <div className="card-container secondcrdcontainer ">
              <div className="upper-container">
                <div className="image-container">
                  <img src={pratikshaimg} alt="" />
                </div>
              </div>
              <div className="lower-container">
                <div>
                  <h3>Pratiksha Sheliya</h3>
                  <h5>Back-end Developer</h5>
                </div>
                <div>
                  <p>
                    Back-end developers are usually write the web services
                    and APIs used by front-end developers and mobile application developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-12 ">
            <div className="card-container thirdcdrcontainer  ">
              <div className="upper-container">
                <div className="image-container">
                  <img src={krishnaimg} alt="" />
                </div>
              </div>
              <div className="lower-container">
                <div>
                  <h3>Vaviya Krishna</h3>
                  <h5>Front-end Developer</h5>
                </div>
                <div>
                  <p>
                    A front-end developer builds the front-end portion of websites
                    and web applications—that is, the part that users actually see and interact with.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-12 ">
            <div className="card-container fourcrdcontainer  ">
              <div className="upper-container">
                <div className="image-container">
                  <img src={payalimg} alt="" />
                </div>
              </div>
              <div className="lower-container">
                <div>
                  <h3>Payal Gohil</h3>
                  <h5>Front-end Developer</h5>
                </div>
                <div>
                  <p>
                    A front-end developer builds the front-end portion of websites
                    and web applications—that is, the part that users actually see and interact with.                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="aboutnot"> Thank you for the visit our website </p>
      <div className="rtf">
        <Footer />
      </div>
    </div>
  );
};
export default About;