import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Users_style/BikeBook.css";
import { ReactDialogBox } from 'react-js-dialog-box'
import 'react-js-dialog-box/dist/index.css'
import { ToastContainer, toast } from 'react-toastify';
import ReactStars from 'react-stars'
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { getToken } from '../services/getToken'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Footer from "./Footer"
toast.configure();

const Book = () => {
  const url = window.location.href;
  var id = url.substring(url.lastIndexOf('/') + 1);

  let navigate = useNavigate();
  const [err, seterr] = useState({})
  const [bike, setBike] = useState([]);
  const [feedback, setFeedback] = useState([]);
  const [bookData, SetBookData] = useState({
    name: "",
    contact_number: "",
    from_date: "",
    to_date: "",
    pickup_time: "",
    drop_time: "",
  })
  useEffect(() => {
    Axios.get(`http://localhost:8000/uservehicledata/${id}`)
      .then((res) => {
        setBike(res.data.vehicledata)
        console.log("first", res.data.vehicledata)
      })
  }, []);

  useEffect(() => {
    Axios.get(`http://localhost:8000/feedbackdata`)
      .then((res) => {
        setFeedback(res.data.feedbackdata)
        console.log("setfeedback", res.data.feedbackdata);
      })
  }, [])

  const handlechange = (e) => {
    const { name, value } = e.target
    SetBookData({
      ...bookData,
      [name]: value,
    })

  }

  const validation = () => {
    const err = {};
    let isValid = true;
    if (!bookData.name) {
      err.name = "Fill the information";
      isValid = false;
    }


    if (!bookData.contact_number) {
      err.cname = "Fill the informations";
      isValid = false;
    }
    else if (typeof bookData.contact_number !== "undefined") {
      if (!bookData.contact_number.match(/^\d{10}$/)) {
        err.cname = "enter 10 digit";
        isValid = false;
      }
    }

    if (!bookData.from_date) {
      err.fdname = "Fill the informations";
      isValid = false;
    }

    if (!bookData.to_date) {
      err.tdname = "Fill the informations";
      isValid = false;
    }

    if (!bookData.pickup_time) {
      err.ptname = "Fill the informations";
      isValid = false;
    }

    if (!bookData.drop_time) {
      err.dtname = "Fill the informations";
      isValid = false;
    }

    seterr(err)
    return isValid;

  }

  const [isEdit, setisEdit] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [ispayment, setIsPayment] = useState(false);
  const [book, setBook] = useState([]);

  const booking = async (e) => {
    const isValid = validation();
    if (getToken) {
      if (isValid) {
        const { name, contact_number, from_date, to_date, pickup_time, drop_time } = bookData
        const bookingData = {
          name, contact_number, from_date, to_date, pickup_time, drop_time, totalamount
        };
        Axios.post(`http://localhost:8000/bookingdata/${id}`, bookingData, { headers: { 'authorization': getToken } })
          .then((res) => {
            if (res.status === 200) {
              setBook(res.data.userBooking)
              // toast.success("Booking successfully..", { autoClose: 1000 }, {
              //   position: "top-center",
              // })
              // navigate('/vehicle')
              setIsPayment(!ispayment)
            }
          })
          .catch((error) => {
            console.log('error.messages', error.response.data.error);
            setisOpen(!isOpen)
          })
      }
      else {
        console.log("Error!!!")
        toast.error("Fill up all imformation..!!", {
          position: "top-center",
        });
      }
    }
    else {
      setisEdit(!isEdit)
    }
  }

  const current = new Date();
  const date = `${current.getFullYear()}-0${current.getMonth() + 1}-${current.getDate()}`;
  const date1 = new Date(bookData.from_date)
  const date2 = new Date(bookData.to_date)
  var Difference_In_Time = date2.getTime() - date1.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  const totalamount = Difference_In_Days * bike.amount;
  // const fdate = new Date(bookData.from_date)
  // fdate.setDate(fdate.getDate() + 1)
  // const todate = `${fdate.getFullYear()}-0${fdate.getMonth() + 1}-0${fdate.getDate()}`;
  let adata = feedback.filter((i) => {
    return i.Booking[0].Vehicle.includes(bike._id)
  })

  return (
    <>
      <Navbar />
      <div className="container-fuild containerbooks">
        {bike ? (<div className="row bikebook ">
          <div className="col-xl-2 col-12">
            <Card className="cardbook">
              <Card.Img variant="top" src={bike.vehicleimage} className="vehiclebookimage" />
              <p className="model">Name : {bike.name}</p>
              <p className="model">Type : {bike.type}</p>
              <p className="model">Number : {bike.number}</p>
              <p className="model">Mileage : {bike.milege}</p>
              <p className="model">Amount : {bike.amount}</p>
              <p className="model" name="totalamount">Total Amount : {totalamount || 0}</p>
            </Card>
          </div>
          <div className="col-xl-3 col-12"></div>
          <div className="col-xl-7 col-12 align-center ">
            <div className="form">
              <form>
                <div className="row  justify-content-center  align-items-center ">
                  <div className="col-12 col-lg-9 col-xl-9">
                    <div className="row mb-2 mt-4">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example1">
                            Name :
                          </label>
                          <input
                            type="text"
                            id="form3Example1"
                            className="form-control formcontrol"
                            placeholder=" Your Name"
                            name="name"
                            value={bookData.name}
                            onChange={handlechange}
                          />
                          {<span style={{ color: "red" }}>{err["name"]}</span>}
                        </div>
                      </div>

                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example1">
                            Contact Number :
                          </label>
                          <input
                            type="Number"
                            id="form3Example1"
                            className="form-control formcontrol"
                            placeholder="Contact number"
                            name="contact_number"
                            value={bookData.contact_number}
                            onChange={handlechange}
                          />
                          {<span style={{ color: "red" }}>{err["cname"]}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example1">
                            From Date :
                          </label>
                          <input
                            type="date"
                            id="datePickerId"
                            className="form-control formcontrol"
                            placeholder=" From Date"
                            name="from_date"
                            value={bookData.from_date}
                            onChange={handlechange}
                            min={date}
                            onfocus="this.min=new Date().toISOString().split('T')[0]" />
                          {<span style={{ color: "red" }}>{err["fdname"]}</span>}
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label" for="form3Example2">
                            To Date :
                          </label>
                          <input
                            type="date"
                            id="form3Example2"
                            className="form-control formcontrol"
                            placeholder=" To Date "
                            name="to_date"
                            value={bookData.to_date}
                            min={bookData.from_date}
                            onfocus="this.min=new Date().toISOString().split('T')[0]"
                            onChange={handlechange}
                          />
                          {<span style={{ color: "red" }}>{err["tdname"]}</span>}
                        </div>
                      </div>
                    </div>
                    <div className="row mb-2">
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label">Pickup Time</label>
                          <input placeholder="Selected time"
                            type="time"
                            id="input_starttime"
                            className="form-control  formcontrol"
                            name="pickup_time"
                            value={bookData.pickup_time}
                            onChange={handlechange}
                          />
                          {<span style={{ color: "red" }}>{err["ptname"]}</span>}
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-outline">
                          <label className="form-label">Drop Time :</label>
                          <input
                            type="time"
                            className="form-control formcontrol"
                            placeholder=" To Date "
                            name="drop_time"
                            value={bookData.drop_time}
                            onChange={handlechange}
                          />
                          {<span style={{ color: "red" }}>{err["dtname"]}</span>}
                        </div>
                      </div>
                    </div>
                    <h5 className="paras"><span className="spaddress">Address</span> :-  419-420, Angel Business Center 1, abc Circle, Mota Varachha, Surat, Gujarat 394101</h5>
                    <button type="button" onClick={booking} className="btn bkbutton mrbtn">Book</button>
                    <NavLink exact to="/bike">
                      <button type="button" className="btn bkbutton mrbtn">Back</button>
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        ) : (
          <p className="bookhs2">This Bike is Not avilable</p>
        )}
        <Carousel>
          {adata.map((i) => (
            <>
              <div className="npmc">
                <div className="npmcc">
                  <p className="feed">{i.name}</p>
                  <p className="feedd">{i.emailid}</p>
                  <p className="feeddd">{i.feedback}</p>
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
              </div>
            </>
          ))}
        </Carousel>
      </div>
      {isEdit && (
        <ReactDialogBox
          modalWidth='30%'
          headerBackgroundColor='#1d4979'
          headerTextColor='white'
          headerTextAlignItem="center"
          headerHeight='65%'
          bodyBackgroundColor='white'
          bodyHeight='150px'
          headerText='First Login'
          className="md"
          closeButtonColor='#1d4979'
        >
          <div>
            <h5 className="">you can only book after you have logged in...!!</h5>
            <NavLink className="nav-link" exact to="/login">
              <button className="btn lobutton">Login Now! </button>
            </NavLink>
          </div>
        </ReactDialogBox>
      )}
      {isOpen && (
        <ReactDialogBox
          modalWidth='30%'
          headerBackgroundColor='#1d4979'
          headerTextColor='white'
          headerHeight='65'
          bodyBackgroundColor='white'
          // headerText="center"
          bodyHeight='150px'
          headerText='Already Book'
          className="md"
          closeButtonColor='#1d4979'
        >
          <div>
            <h5 className="">This Bike is Already booked, So please choose another bike..!</h5>
            <NavLink className="nav-link" exact to="/bike">
              <button className="btn lobutton">Another Bike</button>
            </NavLink>
          </div>
        </ReactDialogBox>
      )
      }
      {ispayment && (
        <ReactDialogBox
          modalWidth='30%'
          headerBackgroundColor='#1d4979'
          headerTextColor='white'
          headerHeight='65'
          bodyBackgroundColor='white'
          // headerText="center"
          bodyHeight='150px'
          headerText='Payment'
          className="md"
          closeButtonColor='#1d4979'
        >
          <div>
            <h5 className="">Please select how you want to make the Payment..</h5>

            <NavLink className="nav-link" exact to={{ pathname: `/stripte/${book._id}` }}>
              <button className="btn lobutton">Payment</button>
            </NavLink>

          </div>
        </ReactDialogBox>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Book;
