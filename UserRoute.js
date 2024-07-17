import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import About from "./About"
import Contact from "./Contact";
import Navbar from "./Navbar";
import Home from "./Home";
import Register from "./Register";
import Login from "./Login";
import BikeBook from "./BikeBook"
import Vehicle from "./Vehicle";
import Bike from "./Bike"
import Service from "./Service";
import Car from "./Car"
import CarBook from "./CarBook"
import Truck from "./Truck"
import TruckBook from "./TruckBook"
import Bus from "./Bus";
import BusBook from "./BusBook"
import Profile from "./Profile"
import Footer from "./Footer"
import BookData from "./BookData";
import Feedback from "./Feedback";
import EditUser from "./EditUser";
import Payment from "./Payment";
import StripeContainer from "./StripeContainer";


const UserRoute = () => {
  return <div>
    <Routes>
      <Route exact path="/stripte" element={<StripeContainer />} ></Route>
      <Route exact path="/service" element={<Service />} ></Route>
      <Route exact path="/" element={<Home />} ></Route>
      <Route exact path="/bikebook" element={<BikeBook />} ></Route>
      <Route exact path="/carbook" element={<CarBook />} ></Route>
      <Route exact path="/vehicle" element={<Vehicle />} ></Route>
      <Route exact path="/register" element={<Register />} ></Route>
      <Route exact path="/login" element={<Login />} ></Route>
      <Route exact path="/about" element={<About />} ></Route>
      <Route exact path="/contact" element={<Contact />} ></Route>
      <Route exact path="/bike" element={<Bike />} ></Route>
      <Route exact path="/car" element={<Car />} ></Route>
      <Route exact path="/bus" element={<Bus />} ></Route>
      <Route exact path="/truck" element={<Truck />} ></Route>
      <Route exact path="/about" element={<About />} ></Route>
      <Route exact path="/profile" element={<Profile />} ></Route>
      <Route exact path="/footer" element={<Footer />} ></Route>
      <Route exact path="/bookdata" element={<BookData />} ></Route>
      <Route exact path="/feedback" element={<Feedback />} ></Route>
      <Route exact path="/payment" element={<Payment />} ></Route>
      <Route exact path="/edituser" element={<EditUser />} ></Route>
      <Route exact path='/bikebook/:id' element={<BikeBook />}></Route>
      <Route exact path='/bikebook/:id' element={<BikeBook />}></Route>
      <Route exact path='/carbook/:id' element={<CarBook />}></Route>
      <Route exact path='/busbook/:id' element={<BusBook />}></Route>
      <Route exact path='/truckbook/:id' element={<TruckBook />}></Route>
      <Route exact path='/register/:id' element={<Register />}></Route>
      <Route exact path='/bookdata/:id' element={<BookData />}></Route>
      <Route exact path='/feedback/:id' element={<Feedback />}></Route>
      <Route exact path='/edituser/:id' element={<EditUser />}></Route>
      <Route exact path='/stripte/:id' element={<StripeContainer />}></Route>
    </Routes>
  </div>;
};

export default UserRoute;
