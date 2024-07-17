import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from "react-router-dom";
import "../Users_style/Contact.css"
import Navbar from './Navbar'
import Footer from './Footer';
toast.configure();
const Contact = () => {
  let navigate = useNavigate();
  const [err, seterr] = useState({});

  const [isEdit, setisEdit] = useState(" ")
  const [contact, setContact] = useState({
    name: "",
    emailid: "",
    contactnumber: "",
    subject: "",
    message: "",
  })
  const handlechange = (e) => {
    const { name, value } = e.target
    console.log(name, value);
    console.log(e);
    setContact({
      ...contact,
      [name]: value,
    })
  }
  const validation = () => {
    const err = {};
    let isValid = true;
    if (!contact.emailid) {
      err.ename = "Fill the informations";
      isValid = false;
    } else if (typeof contact.emailid !== "undefined") {
      if (!contact.emailid.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
        err.ename = "Valid Email";
        isValid = false;
      }
    }
    if (!contact.contactnumber) {
      err.cname = "Fill the informations";
      isValid = false;
    } else if (typeof contact.contactnumber !== "undefined") {
      if (!contact.contactnumber.match(/^\d{10}$/)) {
        err.cname = "enter 10 digit";
        isValid = false;
      }
    }
    seterr(err);
    return isValid;
  }
  const contacts = () => {
    const isValid = validation();
    if (isValid) {
      const { name, emailid, contactnumber, subject, message } = contact
      const registerData = {
        name, emailid, contactnumber, subject, message
      };
      Axios.post("http://localhost:8000/contact", registerData)
        .then((res) => {
          if (res.status === 200) {

            // navigate('/contact')
            // window.location.reload();
            setisEdit("show")
          }
        })
        .catch((error) => {
          console.log('error.messages', error.response.data.error);
          toast.error("Email already exits!", {
            position: "top-center",
          })
        })
    }
    else {
      console.log("Error!!!");
    }
  }


  return (
    <>
      <Navbar />
      <div className='mainn'>
        <div className='container'>
          <div className='row contactroww'>
            <div className='col-xl-12'>
              <div className='card contact'>
                <div className='row'>
                  <div className='col-xl-1 col-12'></div>
                  <div className='col-xl-2 col-12'>
                    <p className='licon'><i class="fa fa-map-marker"></i></p>
                    <p className='addresss'>Address</p>
                    <p className='add'>419-420, Angel Business Center 1, abc Circle, Mota Varachha, Surat, Gujarat 394101</p>
                    <p className='licon'><i class="fa fa-phone"></i></p>
                    <p className='addresss'>Contact</p>
                    <p className='add'>+91 7643598073</p>
                    <p className='add'>+91 9733487623</p>
                    <p className='licon'><i class="fa fa-envelope"></i></p>
                    <p className='addresss'>Email</p>
                    <p className='add'>adventure021@gmail.com</p>
                    <p className='add'>payal0214@gmail.com</p>
                  </div>
                  <div className='col-xl-1 col-12'>
                    <div className='val'>
                      <div className='vall'></div>
                    </div>
                  </div>
                  <div className='col-xl-7 col-12'>
                    {isEdit === "show" ? (
                      <div>
                        <h2 className='mainlline'>&#128578; Thank you for getting in touch!</h2>
                        <p className='firstline'>We have received your message and would like to thank you for writing to us. If your inquiry is urgent, please use the telephone number listed below to talk to one of our staff members.
                          <p className='senline'> Otherwise, we will reply by email as soon as possible.</p>
                          <p className='thirdline'>Talk to you soon, <span className='comname'>Rent Adventure</span></p>
                        </p>
                      </div>
                    ) : (
                      <form method='POST'>
                        <div className="row justify-content-center align-items-center h-100">
                          <div className="col-xl-12">
                            <div className="row">
                              <p className='hcon'>Get in Touch</p>
                              <p className='pcon'>Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within a matter of hours to help you.</p>
                              <div className="col">
                                <div className="form-outline">
                                  <input type="text"
                                    className="form-control frm "
                                    name="name"
                                    placeholder='Your Name'
                                    value={contact.name}
                                    onChange={handlechange}
                                  />
                                </div>
                              </div>
                              <div>
                                <div className="form-outline">
                                  <input type="email"
                                    className="form-control frm "
                                    name="emailid"
                                    placeholder='Your Emaild'
                                    value={contact.emailid}
                                    onChange={handlechange}

                                  />
                                  {<span style={{ color: "red"}}>{err["ename"]}</span>}

                                </div>
                              </div>
                              <div>
                                <div className="form-outline">
                                  <input type="number"
                                    className="form-control frm "
                                    name="contactnumber"
                                    placeholder='Your Contact Number'
                                    value={contact.contactnumber}
                                    onChange={handlechange}
                                  />
                                  {<span style={{ color: "red" }}>{err["cname"]}</span>}

                                </div>
                              </div>
                            </div>
                            <div className="form-outline mb-2">
                              <input type="text"
                                className="form-control frm"
                                name="subject"
                                placeholder='Subject'
                                value={contact.subject}
                                onChange={handlechange}
                              />
                            </div>
                            <div className="form-outline mb-4">
                              <textarea type="text"
                                className="form-control frm"
                                name="message"
                                placeholder='Message'
                                value={contact.message}
                                onChange={handlechange}
                              />
                            </div>
                            <NavLink exact to="/contact">
                              <button type="submit" onClick={contacts} className="btn  btn-block  btncontact">Submit</button>
                            </NavLink>
                          </div>
                        </div>
                      </form>
                    )}
                    <div className='col-xl-1 col-12'></div>
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
    </>
  )
};
export default Contact;