import Axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import "../Users_style/Vehicle.css";
import Navbar from "./Navbar";
import bikeimg from "../images/vehicle/bikeimg.jpeg"
import carimg from '../images/vehicle/carimg.jpg'
import truckimg from '../images/vehicle/truckimg.jpg'
import busimg from '../images/vehicle/busimg.jpg'

const Vehicle = () => {
  // let navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="firstbike">
        <div className="container-fuild fircont">
          <div className="row  ">
            <div className="col-xl-1 col-12"></div>
            <div className="col-xl-5 col-12">
              <div className="imgbox">
                <img className="card-img-top img-fluid vehicleimgg" src={bikeimg} alt="Card image cap" />
              </div>
            </div>
            <div className="col-xl-5 col-12 ">
              <div className="vehicle-bike">
                <p className="card-text prgt ">
                  <h2>Bikes</h2>
                  bike,  two-wheeled steerable machine that is pedaled by the
                  rider's feet. On a standard bicycle the wheels are mounted
                  in-line in a metal frame, with the front wheel held in a
                  rotatable fork.
                </p>
                <NavLink exact className="nav-link " to="/bike" role="button">
                  <Button className="vehiclebtn">View Details</Button>
                </NavLink>
              </div>
            </div>
            <div className="col-xl-1 col-12"></div>
          </div>
        </div>
      </div>
      <div className="container-fuild secondcont">
        <div className="row  ">
          <div className="col-xl-1 col-12"></div>
          <div className="col-xl-5 col-12 ">
            <div className="vehicle-bike">
              <p className="card-text prgt  ">
                <h2>Car</h2>
                A car is a wheeled motor vehicle used for transportation. Most
                definitions of cars say that they run primarily on roads, seat
                one to eight people, and mainly transport people rather than
                goods.
              </p>
              <NavLink exact className="nav-link " to="/car" role="button">
                <Button className="vehiclebtn">View Details </Button>
              </NavLink>
            </div>
          </div>
          <div className="col-xl-1 col-12"></div>
          <div className="col-xl-5 col-12 ">
            <div className="imgbox">
              <img className="card-img-top img-fluid vehicleimgg" src={carimg} alt="Card image cap"/>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fuild thcont">
        <div className="row  ">
          <div className="col-xl-1 col-12"></div>
          <div className="col-xl-5 col-12">
            <div className="imgbox">
              <img className="card-img-top img-fluid vehicleimgg" src={truckimg} alt="Card image cap"/>
            </div>
          </div>
          <div className="col-xl-5 col-12 ">
            <div className="vehicle-bike">
              <p className="card-text prgt ">
                <h2>Truck</h2>
                Truck, also called lorry, any motor vehicle designed to carry
                freight or goods or to perform special services such as fire
                fighting. The truck was derived from horse-driven wagon
                technology.
              </p>
              <NavLink exact className="nav-link " to="/truck" role="button">
                <Button className=" vehiclebtn">View Details</Button>
              </NavLink>
            </div>
          </div>
          <div className="col-xl-1 col-12"></div>
        </div>
      </div>
      <div className="container-fuild fourcont">
        <div className="row  ">
          <div className="col-xl-1 col-12"></div>
          <div className="col-xl-5 col-12 ">
            <div className="vehicle-bike">
              <p className="card-text prgt ">
                <h2>Bus</h2>
                A bus is a large wheeled vehicle meant to carry many
                passengers along with the driver.It is larger than a car. The
                name is a shortened version of omnibus, which means "for
                everyone" in Latin.
              </p>
              <NavLink exact className="nav-link " to="/bus" role="button">
                <Button className=" vehiclebtn">View Details</Button>
              </NavLink>
            </div>
          </div>
          <div className="col-xl-1 "></div>
          <div className="col-xl-5 col-12 ">
            <div className="imgbox">
              <img className="card-img-top img-fluid vehicleimgg" src={busimg} alt="Card image cap" />
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
export default Vehicle;