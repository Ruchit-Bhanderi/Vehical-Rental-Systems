import React, { useState, useEffect } from "react";
import "../Users_style/Register.css";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import regimg from '../images/regimg.webp'

toast.configure();

const Register = () => {
  let navigate = useNavigate();
  const [isEdit, setisEdit] = useState(false);
  //use to usestate
  const [err, seterr] = useState({});
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    emailid: "",
    contact_number: "",
    city: "",
    password: "",
    cpassword: "",
  });
  const handlechange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    console.log(e);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const validation = () => {
    const err = {};
    let isValid = true;
    if (!user.first_name) {
      err.name = "Fill the information";
      isValid = false;
    } else if (typeof user.first_name !== "undefined") {
      if (!user.first_name.match(/^[a-zA-Z]+$/)) {
        err.name = "Only letters";
        isValid = false;
      }
    } else {
      console.log("no data");
    }
    //lastname
    if (!user.last_name) {
      err.lname = "Fill the informations";
      isValid = false;
    } else if (typeof user.last_name !== "undefined") {
      if (!user.last_name.match(/^[a-zA-Z]+$/)) {
        err.lname = "Only letters";
        isValid = false;
      }
    } else {
      console.log("no data");
    }
    //email
    if (!user.emailid) {
      err.ename = "Fill the informations";
      isValid = false;
    } else if (typeof user.emailid !== "undefined") {
      if (!user.emailid.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
        err.ename = "Valid Email";
        isValid = false;
      }
    } else {
      console.log("no data");
    }
    //contact
    if (!user.contact_number) {
      err.cname = "Fill the informations";
      isValid = false;
    } else if (typeof user.contact_number !== "undefined") {
      if (!user.contact_number.match(/^\d{10}$/)) {
        err.cname = "enter 10 digit";
        isValid = false;
      }
    } else {
      console.log("no data");
    }

    //city
    if (!user.city) {
      err.ciname = "Fill the informations";
      isValid = false;
    } else {
      console.log("no data");
    }

    //pass
    if (!user.password) {
      err.pname = "Fill the informations";
      isValid = false;
    } else if (typeof user.password !== "undefined") {
      if (!user.password.match(/^[A-Za-z]\w{7,14}$/)) {
        err.pname = "Strong password like : Abc1234";
        isValid = false;
      }
    } else {
      console.log("no data");
    }
    //cpass
    if (!user.cpassword) {
      err.cpname = "Fill the informations";
      isValid = false;
    } else if (typeof user.cpassword !== "undefined") {
      if (!(user.password === user.cpassword)) {
        err.cpname = "Do not match password";
        isValid = false;
      }
    } else {
      console.log("no data");
    }
    seterr(err);
    return isValid;
  };
  const register = async (e) => {
    const isValid = validation();
    if (isValid) {
      console.log("first res");
      const { first_name, last_name, emailid, contact_number, city, password, cpassword, } = user;
      const registerData = {
        first_name, last_name, emailid, contact_number, city, password, cpassword,
      };
      Axios.post("http://localhost:8000/register", registerData)
        .then((res) => {
          if (res.status === 200) {
            toast.success("Register Successfully..", { autoClose: 1000 }
              , {
                position: "top-center",
              })
            navigate("/login");
            // window.location.reload();
          }
        })
        .catch((error) => {
          console.log("error.messages", error.response.data.error);
          toast.error("Email already exits!", {
            position: "top-center",
          });
        });
    } else {
      console.log("Error!!!");
    }
  };
  return (
    <div>
      <Navbar />

      <div className="container-fuild ">
        <div className="row">
          <div className="col-xl-12">
            <div className="regimgg">
              <img
                className="regimg"
                src={regimg} />

              <div className="col-12 col-lg-9 col-xl-7 rgs ">
                {/* <h3>Register</h3> */}
                <div className="row ">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label regfrmlbl">First name</label>
                      <input
                        type="text"
                        className="form-control frmcontrls"
                        placeholder="First Name"
                        name="first_name"
                        value={user.first_name}
                        onChange={handlechange}
                      />
                      {
                        <span style={{ color: "red" }}>
                          {err["name"]}
                        </span>
                      }
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label regfrmlbl">Last name</label>
                      <input
                        type="text"
                        className="form-control frmcontrls"
                        placeholder="Last Name"
                        name="last_name"
                        value={user.last_name}
                        onChange={handlechange}
                      />
                      {<span style={{ color: "red" }}>{err["lname"]} </span>}
                    </div>
                  </div>
                </div>
                {/* <!-- Email input --> */}
                <div className="form-outline mb-2">
                  <label className="form-label regfrmlbl">Email Id</label>
                  <input
                    type="email"
                    className="form-control frmcontrls "
                    placeholder="Emailid"
                    name="emailid"
                    value={user.emailid}
                    onChange={handlechange}
                  />
                  {<span style={{ color: "red" }}>{err["ename"]}</span>}
                </div>
                {/* <!-- Password input --> co and li num*/}
                <div className="row mb-2">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label regfrmlbl">Contact Number</label>
                      <input
                        type="number"
                        className="form-control frmcontrls "
                        placeholder="Contact Number"
                        name="contact_number"
                        maxLength={10}
                        value={user.contact_number}
                        onChange={handlechange}
                      />
                      {<span style={{ color: "red" }}>{err["cname"]}</span>}
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label regfrmlbl">City</label>
                      <input
                        type="text"
                        className="form-control frmcontrls"
                        placeholder="City"
                        name="city"
                        value={user.city}
                        onChange={handlechange}
                      />
                      {<span style={{ color: "red" }}>{err["ciname"]}</span>}
                    </div>
                  </div>
                </div>
                <div className="row mb-2">
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label regfrmlbl">Password</label>
                      <input
                        type="password"
                        className="form-control frmcontrls"
                        placeholder="Password"
                        name="password"
                        value={user.password}
                        onChange={handlechange}
                      />
                      {<span style={{ color: "red" }}> {err["pname"]}</span>}
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-outline">
                      <label className="form-label regfrmlbl">
                        Comfirm Password
                      </label>
                      <input
                        type="password"
                        className="form-control frmcontrls "
                        placeholder="Comfirm Password"
                        name="cpassword"
                        value={user.cpassword}
                        onChange={handlechange}
                      />
                      {<span style={{ color: "red" }}>{err["cpname"]}</span>}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-block regbtnbutton"
                  name="btn"
                  onClick={() => register()}
                >
                  Register
                </button>
                <div className="text-center rgt">
                  <p className="form-label frmcontrlss">
                    Already Register..?Login Now{" "}
                    <a href="/login">Login</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Register;
