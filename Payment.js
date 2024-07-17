import "../Users_style/payment.css"
import React, { useState, useEffect } from "react";
import "../Users_style/Register.css";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import {
    CardNumberElement, CardExpiryElement, CardCvcElement
} from '@stripe/react-stripe-js';
toast.configure();

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            lineHeight: "27px",
            color: "#212529",
            fontSize: "1.1rem",
            "::placeholder": {
                color: "#aab7c4",
            },
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a",
        },
    },
};

export const Payment = () => {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [load, setLoad] = useState(false);
    const [isEdit, setIsEdit] = useState(false)
    let navigate = useNavigate();


    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (event) => {
        event.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement, CardExpiryElement, CardCvcElement),
        });

        if (!error) {
            console.log("Stripe 23 | token generated!", paymentMethod.id);
            setLoading(!loading)
            try {
                let modelamount = data.totalamount;
                const { name, emailid, contactnumber, type } = user
                const pid = paymentMethod.id;
                console.log("pid", pid)
                const response = await Axios.post(
                    `http://localhost:8000/stripe/charge/${id}`,
                    {
                        amount: modelamount,
                        pid: pid,
                        name, emailid, contactnumber, type
                    }
                );

                console.log("Stripe 35 | data", response.data.success);
                if (response.data.success) {
                    console.log("CheckoutForm.js 25 | payment successful!");
                    // toast.success("Payment Successfully..!"
                    //     , {
                    //         position: "top-center",
                    //     })
                    setIsEdit(!isEdit)
                }

            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error);
            }
        } else {

            toast.error(error.message, {
                position: "top-center",
            })
        }
    };

    const url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);

    const [data, setData] = useState([]);
    useEffect(() => {
        Axios.get(`http://localhost:8000/paymentdata/${id}`)
            .then((res) => {
                setData(res.data.paymentdata)
                console.log("first", res.data.paymentdata)
            })
    }, []);
    const [err, seterr] = useState({});
    const [user, setUser] = useState({
        name: "",
        emailid: "",
        contactnumber: "",
        type: ""
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
        if (!user.name) {
            err.name = "Fill the information";
            isValid = false;
        } else if (typeof user.first_name !== "undefined") {
            if (!user.first_name.match(/^[a-zA-Z]+$/)) {
                err.name = "Only letters";
                isValid = false;
            }
        }
        if (!user.emailid) {
            err.ename = "Fill the informations";
            isValid = false;
        } else if (typeof user.emailid !== "undefined") {
            if (!user.emailid.match(/[^\s@]+@[^\s@]+\.[^\s@]+/)) {
                err.ename = "Valid Email";
                isValid = false;
            }
        }
        if (!user.contactnumber) {
            err.cname = "Fill the informations";
            isValid = false;
        } else if (typeof user.contactnumber !== "undefined") {
            if (!user.contactnumber.match(/^\d{10}$/)) {
                err.cname = "enter 10 digit";
                isValid = false;
            }
        }
        seterr(err);
        return isValid;
    };

    const payment = async (e) => {
        const isValid = validation();
        if (isValid) {
            let modelamount = data.totalamount;
            const { name, emailid, contactnumber, type } = user
            const paymentdata = { name, emailid, contactnumber, type, modelamount }
            Axios.post(`http://localhost:8000/payment/${id}`, paymentdata)
                .then((res) => {
                    if (res.status === 200) {
                        toast.success(" Successfully..", { autoClose: 1000 }
                            , {
                                position: "top-center",
                            })
                        navigate("/");
                        window.location.reload();
                    }
                })
                .catch((error) => {
                    console.log("error.messages", error.response.data.error);
                    toast.error("Email already exits!", {
                        position: "top-center",
                    });
                });
        }
        else {
            console.log("Error!!!");
        }

    };

    return (
        <>
            <Navbar />
            <div class="container-fuild">
                <div class="row">
                    <div class="col-xl-2"></div>
                    <div class="col-xl-8">
                        <div className='userpayment'>
                            {isEdit ? (
                                <></>
                            ) : (
                                <div className='paymentdrpdown'>
                                    Choose  type of the payment <select
                                        name="type"
                                        className="dropdownn"
                                        onChange={handlechange}
                                    >
                                        <option value="" className="optionns">--Select--</option>
                                        <option className="optionns">Cash Payment</option>
                                        <option className="optionns">Online Payment</option>

                                    </select>
                                </div>
                            )}

                            {user.type === "Cash Payment" ? (
                                <div>

                                    <div className='row'>
                                        <div className="col-xl-7">
                                            <div className='frmpayment'>
                                                <div className="col">
                                                    <label className='paymentforminput'>Name:</label>
                                                    <div className="form-outline">
                                                        <input type="text"
                                                            className="form-control  "
                                                            name="name"
                                                            placeholder='Your Name'
                                                            value={user.name}
                                                            onChange={handlechange}
                                                        />
                                                        {<span style={{ color: "red" }}>{err["name"]}</span>}
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <label className='paymentforminput'>Email Id:</label>
                                                    <div className="form-outline">
                                                        <input type="text"
                                                            className="form-control  "
                                                            name="emailid"
                                                            placeholder='Your Emailid'
                                                            value={user.emailid}
                                                            onChange={handlechange}
                                                        />
                                                        {<span style={{ color: "red" }}>{err["ename"]}</span>}
                                                    </div>
                                                </div><div className="col">
                                                    <label className='paymentforminput'>Contact Number:</label>
                                                    <div className="form-outline">
                                                        <input type="text"
                                                            className="form-control  "
                                                            name="contactnumber"
                                                            placeholder='Your Contact Number'
                                                            value={user.contactnumber}
                                                            onChange={handlechange}
                                                        />
                                                        {<span style={{ color: "red" }}>{err["cname"]}</span>}
                                                    </div>
                                                </div>
                                                <div className="col">

                                                    <div>
                                                        <button type="submit" onClick={payment} className="btn w-100 btnpaymments">Submit</button>
                                                    </div></div>
                                            </div>

                                        </div>
                                        <div className="col-xl-4">
                                            <div className='useredapayment'>
                                                <img className="paymentiiges" src={data.Vehicle && data.Vehicle[0].vehicleimage} /><br />
                                                <div className="paymentdetails">
                                                    <p className="pmtdetaills">   {data.Vehicle && data.Vehicle[0].companyname}</p>
                                                    <p className="pmtdetaills">  {data.Vehicle && data.Vehicle[0].name}</p>
                                                    <p className="pmtdetaills"> {data.totalamount}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <>
                                </>
                            )}

                            {user.type === "Online Payment" ? (

                                <>
                                    {isEdit ? (
                                        <>
                                            <div className="paymentsuccess">
                                                <div className="paymenticon">
                                                    <i class="fa fa-check checkicon" ></i><br />
                                                </div>
                                                <p className="paythanks">&#128578; Thank You,</p>
                                                <p className="paysuccess">Your Payment is Successfully..!</p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <form className="onlinepmt" onSubmit={handleSubmit}>
                                                <div className="row">

                                                    <div className="col-xl-7">
                                                        <div className="row">

                                                            <div className="col">
                                                                <label htmlFor="cc-email" className='paymentforminput'>Email</label>
                                                                <input
                                                                    id="cc-email"
                                                                    type="text"
                                                                    name="emailid"
                                                                    placeholder="Your Emailid"
                                                                    className="form-control"
                                                                    value={user.emailid}
                                                                    onChange={handlechange}
                                                                />
                                                            </div>
                                                        </div>


                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="cc-email" className='paymentforminput'>Name</label>
                                                                <input
                                                                    id="cc-email"
                                                                    type="text"
                                                                    placeholder="Your Name"
                                                                    name="name"
                                                                    className="form-control"
                                                                    value={user.name}
                                                                    onChange={handlechange}
                                                                />

                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor="cc-email" className='paymentforminput'>Contact Number</label>
                                                                <input
                                                                    id="cc-email"
                                                                    type="number"
                                                                    name="contactnumber"
                                                                    className="form-control"
                                                                    placeholder="Contact Number"
                                                                    value={user.contactnumber}
                                                                    onChange={handlechange}
                                                                />
                                                            </div>

                                                        </div>

                                                        <div className="row">

                                                            <div className="col">
                                                                <label htmlFor="cc-number" className='paymentforminput'>Card Number</label>
                                                                <CardNumberElement
                                                                    id="cc-number"
                                                                    className="form-control"
                                                                    options={CARD_ELEMENT_OPTIONS}
                                                                />
                                                            </div></div>
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="expiry" className='paymentforminput'>Expiration Date</label>
                                                                <CardExpiryElement
                                                                    id="expiry"
                                                                    className="form-control"
                                                                    options={CARD_ELEMENT_OPTIONS}
                                                                />
                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor="cvc" className='paymentforminput'>CVC</label>
                                                                <CardCvcElement
                                                                    id="cvc"
                                                                    className="form-control"
                                                                    options={CARD_ELEMENT_OPTIONS}
                                                                />
                                                            </div>
                                                        </div>



                                                        <hr className="mb-4" />
                                                        <div className="col">

                                                            <button className="btn btn-dark w-100 " type="submit" disabled={loading}>
                                                                {loading ? <div className="spinner-border spinner-border-sm text-light" role="status"></div> : `PAY ₹${data.totalamount}`}
                                                            </button>
                                                         
                                                            {errorMsg && <div className="text-danger mt-2">{errorMsg}</div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-4">
                                                        <div className='useredapayment'>
                                                            <img className="paymentiiges" src={data.Vehicle && data.Vehicle[0].vehicleimage} /><br />
                                                            <div className="paymentdetails">
                                                                <p className="pmtdetaills">   {data.Vehicle && data.Vehicle[0].companyname}</p>
                                                                <p className="pmtdetaills">  {data.Vehicle && data.Vehicle[0].name}</p>
                                                                <p className="pmtdetaills"> {data.totalamount}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </>
                                    )}

                                </>

                            ) : (
                                <></>
                            )}
                        </div>
                    </div>
                    <div class="col-xl-2"></div>
                </div>
            </div>
         <Footer/>
        </>

    )
}

export default Payment