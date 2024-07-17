import React, { useState, useEffect } from "react";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../Users_style/Bike.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Bus = () => {
  let navigate = useNavigate();
  const [filterdata, setFilterData] = useState([]);
  const [data, SetData] = useState([]);

  const [filter, setFilter] = useState({
    rent: 0,
    brand: ''
  })
  useEffect(() => {
    Axios.get("http://localhost:8000/vehicledata").then((res) => {
      SetData(res.data.filterbus);
    });
  }, []);
  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });

  };

  const handleClick = (e) => {

    if (filter.rent && filter.brand) {
      let filters = data.filter((i) => {
        return i.companyname.includes(filter.brand) && i.amount <= filter.rent;
      })
      setFilterData(filters);
      console.log("filterdata", filterdata)
    }
    else if (filter.rent) {
      let filters = data.filter((i) => {
        console.log("i.bikeamount <= e.target.value", i.amount <= filter.rent)
        return i.amount <= filter.rent;
      })
      setFilterData(filters);
      console.log("filterdata", filterdata)
    }
    else {
      let filters = data.filter((i) => {
        console.log("i.companyname.include(filter.brand)", i.companyname.includes(filter.brand))
        return i.companyname.includes(filter.brand);
      })
      setFilterData(filters);
      console.log("filterdata", filterdata)
    }
  }
  return (
    <>
      <div>
        <div className="navbar bikes-navbars">
          <label className="comlbl">Company Name : </label>
          <select
            name="brand"
            className="dropdownn cmpselcet optionns"
            onChange={handleChange}
          >
            <option value="" className="optionns" disabled selected hidden>--Select--</option>
            <option className="optionns">Mahindra</option>
            <option className="optionns">Ashok Leyland</option>
            <option className="optionns">Bhart Benz</option>
          </select>
          <label className="rentlbl">Rent : </label>
          <select
            name="rent"
            className="dropdownn  drpselcet "
            onChange={handleChange}
          >
            <option value="" className="drppppd" disabled selected hidden>--Select--</option>
            <option>1500</option>
            <option>2500</option>
            <option>3000</option>
          </select>
          <button onClick={handleClick} className="modify"> Search</button>
          <div className="dropdown drpp-down">
            <button className="drop-btn">
              <i className="fa fa-bars iconbars"></i>
            </button>
            <div className="drpp-down-content">
              <a href="/">Home</a>
              <a href="/vehicle">Vehicle</a>
              <a href="/service">Service</a>
              <a href="/contact">Contact</a>
              <a href="/about">About</a>
            </div>
          </div>
        </div>
      </div>
      <div className="maindivv">
        <div className="bikees" style={{ marginBottom: "50px" }}>
          <div className="container  ">
            <div className="row bikerows">
              {filterdata.map((bus) => (
                <div className="col-xl-6 col-12  ">
                  <div className="bikee hoverbike">
                    <div className="container ">
                      <div className="row ">
                        <div className="headbikes">
                          <h5 className="card-title text-center">
                            {bus.companyname}
                          </h5>
                        </div>
                        <div className="col-xl-4 col-12 iiimmmmg">
                          <img className="iiimges" src={bus.vehicleimage} />
                        </div>
                        <div className="col-xl-4 col-12  ">
                          <div className="card-body crrdbody">
                            <div className="">
                              <p className="card-text text-center">
                                {bus.name}<br/>
                              </p>
                              <p className="card-text text-center  ">
                                <i className="fa fa-rupee"></i>
                                {bus.amount}
                              </p>
                              <p className="card-text text-center">
                                <small className="text-muted">
                                  {bus.description}
                                </small>
                              </p>
                            </div>
                          </div>
                          <div className="bikebookbbtn">
                            <NavLink
                              exact
                              className="nav-link "
                              to={{ pathname: `/busbook/${bus._id}` }}
                            >
                              <button className="btn regbutton">
                                Book Now
                              </button>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>

  );
};

export default Bus;