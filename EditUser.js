import React, { useState, useEffect } from "react";
import "../Users_style/Register.css";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import PopUp from "./PopUp";
import Footer from "./Footer";
toast.configure();

const EditUser = () => {
  let navigate = useNavigate();
  const [isEdit, setisEdit] = useState(false);
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        emailid: "",
        contact_number: "",
        city: "",
        
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
      const url = window.location.href;
      var id = url.substring(url.lastIndexOf("/") + 1);
      useEffect(() => {
        if (id) {
          Axios.get(`http://localhost:8000/updateprofiledata/${id}`).then((res) => {
            setUser(res.data.profiledata);
            console.log("setUser",user);
            setisEdit(!isEdit);
          });
        }
      }, []);
      const UpdateData = (e) => {
        const { first_name, last_name, emailid, contact_number, city } = user;
        const userData = { first_name, last_name, emailid, contact_number, city };
        Axios.put(`http://localhost:8000/updateprofile/${id}`, userData).then(
          (res) => {
            if (res.status === 200) {
              toast.success("Update Successfully..", {
                position: "top-center",
              });
            }
          }
        );
        navigate("/profile").catch((error) => {
          toast.error("failed to update data", {
            position: "top-center",
          });
        });
      };
  return (
    <div>
        <Navbar/>
          <div className="container">
          <div className="main-body">
            <div className="row gutters-sm profile">
              <div className="col-xl-3 mb-3">
                <PopUp />
              </div>
              <div className="col-xl-9 bd">
                <div className="card mb-3">
                  <div className="card-body pcard">
                      <div className="row mb-2 mt-4">
                        <div className="col-xl-6">
                          <div className="form-outline">
                            <label className="form-label">First name</label>
                            <input
                              type="text"
                              className="form-control  "
                              placeholder="First Name"
                              name="first_name"
                              value={user.first_name}
                              onChange={handlechange}
                            />
                          </div>
                        </div>
                        <div className="col-xl-6">
                          <div className="form-outline">
                            <label className="form-label">Last name</label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="Last Name"
                              name="last_name"
                              value={user.last_name}
                              onChange={handlechange}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <!-- Email input --> */}
                      <div className="form-outline mb-2">
                        <label className="form-label">Email Id</label>
                        <input
                          type="email"
                          className="form-control  "
                          placeholder="Emailid"
                          name="emailid"
                          value={user.emailid}
                          onChange={handlechange}
                        />
                      </div>
                      {/* <!-- Password input --> co and li num*/}
                      <div className="row mb-2">
                        <div className="col">
                          <div className="form-outline">
                            <label className="form-label">Contact Number</label>
                            <input
                              type="number"
                              className="form-control  "
                              placeholder="Contact Number"
                              name="contact_number"
                              maxLength={10}
                              value={user.contact_number}
                              onChange={handlechange}
                            />
                           
                          </div>
                        </div>
                        <div className="col">
                          <div className="form-outline">
                            <label className="form-label">City</label>
                            <input
                              type="text"
                              className="form-control "
                              placeholder="City"
                              name="city"
                              value={user.city}
                              onChange={handlechange}
                            />
                           
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        name="btn"
                        className="btn abutton"
                        onClick={() => UpdateData()}
                      >
                        Edit
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default EditUser