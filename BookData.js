import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios'
import "../Users_style/BookData.css"
import Footer from "./Footer"
import "../Users_style/Profile.css"
import { NavLink, useNavigate } from 'react-router-dom'
import PopUp from './PopUp'
toast.configure();

const BookData = () => {
    let navigate = useNavigate();
    const [bookdata, setBookData] = useState([]);
    const [payment, setPayment] = useState([]);
    const url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);

    useEffect(() => {
        if (id) {
            Axios.get(`http://localhost:8000/getuserbookdata/${id}`)
                .then((res) => {
                    setBookData(res.data.regdata)

                    // console.log("regdata", res.data.regdata)
                })
        }
    }, [bookdata])
    useEffect(() => {
        if (id) {
            Axios.get("http://localhost:8000/getpayment")
                .then((res) => {
                    setPayment(res.data.getpaymentdata)
                    console.log("res.data.getpaymentdata",res.data.getpaymentdata)
                })
        }
    }, [])
    const DeleteData = (e, id) => {
        e.preventDefault();
        Axios.delete(`http://localhost:8000/deletebookdata/${id}`)
            .then((res) => {
                toast.success("Delete successfully..", {
                    position: "top-center",
                })
            })
    }
    const feedback = (e, id) => {
        console.log("feedback");
        navigate('/feedback')
    }
    const current = new Date();
    const date = `${current.getFullYear()}-0${current.getMonth() + 1}-0${current.getDate()}`;

    return (
        <div>
            <Navbar />
            <div className='bookdt'>
                <div className="container">
                    <div className="main-body">
                        <div className="row gutters-sm profile">
                            <div className="col-md-3 mt-3 popupp ">
                                <PopUp />
                            </div>
                            <div className='col-md-9 cardds '>
                                {bookdata.map((i) => (
                                <>
                                    {i.from_date >= date || i.to_date >= date ? (
                                        <div className="card bookcard overflow-auto">
                                            <div className="card-body imm">
                                                <div className='row'>
                                                    <div className='col-md-1'></div>
                                                    <div className='col-md-4'>
                                                        {i.Vehicle[0] &&
                                                            <div className="d-flex flex-column align-items-left text-center">
                                                            <img src={i.Vehicle[0].vehicleimage} height="100px" width="150px" />
                                                            </div>
                                                        }
                                                    </div>
                                                    <div className="col-md-4 bikename">
                                                        {/* {console.log("i", i.Vehicle[0].name)} */}
                                                        {i.Vehicle[0].name}
                                                    </div>
                                                    <div className='col-md-1'> </div>
                                                    <div className='col-md-1'>
                                                        <p><i className='far fa-trash-alt fa-1x bdelete' onClick={(e) => DeleteData(e, i._id)}></i></p>
                                                    </div>
                                                    <div className='col-md-1'>
                                                        <NavLink exact className="nav-link fdelete" to={{ pathname: `/feedback/${i._id}` }}>
                                                            <i className="fa fa-comments-o" onClick={feedback}></i>
                                                        </NavLink>
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-2">
                                                        <h6 className="mb-0">Type</h6>
                                                    </div>
                                                    <div className="col-sm-2 text-secondary">
                                                        {i.Vehicle[0].type}
                                                    </div>
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">From Date & Time  </h6>
                                                    </div>
                                                    <div className="col-sm-3   text-secondary">
                                                        {i.from_date} & {i.pickup_time}
                                                        {/* {console.log("i.from_date", i.from_date)} */}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-2">
                                                        <h6 className="mb-0">Number</h6>
                                                    </div>
                                                    <div className="col-sm-2 text-secondary">

                                                        {i.Vehicle[0] && i.Vehicle[0].number}
                                                    </div>
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">To Date & Time</h6>
                                                    </div>
                                                    <div className="col-sm-3 text-secondary">
                                                        {i.to_date} & {i.drop_time}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-2">
                                                        <h6 className="mb-0">Mileage</h6>
                                                    </div>
                                                    <div className="col-sm-2 text-secondary">

                                                        {i.Vehicle[0] && i.Vehicle[0].milege}
                                                    </div>
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Status</h6>
                                                    </div>
                                                    <div className="col-sm-3 text-secondary">
                                                        {i.status}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-2">
                                                        <h6 className="mb-0">Amount</h6>
                                                    </div>
                                                    <div className="col-sm-2 text-secondary">

                                                        {i.Vehicle[0] && i.Vehicle[0].amount}
                                                    </div>
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-3">
                                                        <h6 className="mb-0">Payment</h6>
                                                    </div>
                                                    <div className="col-sm-3 text-secondary">
                                                        {payment.map((p)=>(
                                                            <>
                                                        {console.log("p.Booking[0]._id",i._id)}
                                                            {p.Booking[0]._id === i._id ? (
                                                                <>
                                                                {p.payment}
                                                                {console.log("p.payment",p.payment)}
                                                                </>
                                                            ) : (<></>)} 
                                                            </>
                                                        ))}
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className="row">
                                                    <div className='col-md-1'></div>
                                                    <div className="col-sm-2">
                                                        <h6 className="mb-0"> totalAmount</h6>
                                                    </div>
                                                    <div className="col-sm-2 text-secondary">
                                                        {i.totalamount}
                                                    </div>
                                                    <div className='col-md-1'></div>
                                                    <div className='col-sm-2'>
                                                        <h6 className='mb-0'>Address  </h6>
                                                    </div>
                                                    <div className='col-sm-4 text-secondary'>
                                                        <h6 className='mb-0'>419-420, Angel Business Center 1, abc Circle, Mota Varachha, Surat, Gujarat 394101 </h6>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      ) : ( 
                                         <></>
                                    )}  
                                </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    )
}

export default BookData


