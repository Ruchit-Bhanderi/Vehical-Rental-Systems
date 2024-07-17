import React from "react";
import "../Users_style/Service.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import sideimg from '../images/CarRentalShortage1.png';
const Service = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fuild">
        <div className="row">
          <div className="col-xl-5 service-head ">
            <h1 className="sectionser-title"> RELAXED JOURNEY EVER</h1>
            <div className="borderr"></div>
            <ul className="ulservice">
              <p>
                <i className="fa fa-check-square-o liservice"> MONTHLY</i>
              </p>
              <p>
                <i className="fa fa-check-square-o liservice"> YEARLY</i>
              </p>
              <p>
                <i className="fa fa-check-square-o liservice"> TRANSPORTATION</i>
              </p>
              <p>
                <i className="fa fa-check-square-o liservice"> MAKE TRIP</i>
              </p>
              <p> </p>
            </ul>
          </div>
          <div className="col-xl-7 serviceimg">
            <img
              className="serimg"
              src={sideimg} />
          </div>
        </div>
      </div>
      <div className="services-section">
        <h1 className="headser">What Services we offer to our clients</h1>
        <div className="border"></div>
        <div className="inner-width">
          <div className="services-container">
            <div className="row">
              <div className="col-xl-4 col-12">
                <div className="service-box">
                  <div className="service-icon">
                    <i class="fa fa-star"> </i>
                  </div>
                  <div className="service-title">Unlimited Mileage</div>
                  <div className="service-desc">
                    <p className="serviceparag">
                      If you choose an unlimited mileage rental vehicle, the
                      price you pay for driving 10 miles or 1,000 miles is the
                      same - you won't have to risk paying your mileage
                      allowance or more. This makes sense for long-distance
                      travel.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <div className="service-box">
                  <div className="service-icon">
                    <i class="fa fa-map-marker"> </i>
                  </div>
                  <div className="service-title"> GPS On Every Vehicles</div>
                  <div className="service-desc">
                    <p className="serviceparag">
                      GPS devices can be integrated into a rental vehicle for
                      fleet management. It helps the rental operator to have
                      full control over his vehicle. It helps in planning
                      maintenance, seeing the exact route and position of the
                      vehicle, locating the vehicle and updating the distance
                      from anywhere.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <div className="service-box">
                  <div className="service-icon">
                    <i class="fas fa-globe-asia"> </i>
                  </div>
                  <div className="service-title"> Make Trip</div>
                  <div className="service-desc">
                    <p className="serviceparag">
                      A road trip is a way for the whole family to spend time
                      together and annoy each other in interesting and new
                      places.Because the greatest part of a road trip isn’t
                      arriving at your destination. It’s all the wild stuff that
                      happens along the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-12">
                <div className="service-box">
                  <div className="service-icon">
                    <i class="fas fa-rupee-sign"> </i>
                  </div>
                  <div className="service-title"> Secure Payment</div>
                  <div className="service-desc">
                    <p className="serviceparag">
                      We provide offline payment. It is a transparent payment
                      method as both the giver and the receiver are aware of the
                      transaction at the time of transaction. It is a
                      traditional and easy way of payment and is therefore the
                      most reliable payment method.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <div className="service-box">
                  <div className="service-icon">
                    <i class="fas fa-tools"> </i>
                  </div>
                  <div className="service-title">Outstanding Services</div>
                  <div className="service-desc">
                    <p className="serviceparag">
                      We offer excellent customer service for customer
                      satisfaction. Good service is achieved when customer
                      expectations are met. We expect our customers to be
                      friendly so that we too can be friendly and serve well.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-12">
                <div className="service-box">
                  <div className="service-icon">
                    <i class="fas fa-comment-check"></i>
                  </div>
                  <div className="service-title">24 Hours Support</div>
                  <div className="service-desc">
                    <p className="serviceparag">
                      The 24/7 support we provide is a customer service strategy
                      that includes providing support 24 hours a day, 7 days a
                      week. In other words, the 24/7 support model ensures that
                      we are able to solve customer problems, regardless of the
                      day or time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default Service;