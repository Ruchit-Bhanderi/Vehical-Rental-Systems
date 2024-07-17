import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { RatingStar } from "rating-star";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from "react-router-dom";
import "../Users_style/feedback.css"
import Navbar from './Navbar'
import Footer from './Footer';
const Feedback = () => {
    let navigate = useNavigate();
    const [rating, setRating] = useState();
    const onRatingChange = val => {
        setRating(val);
        console.log("rate", rating)
    };
    const [data, setData] = useState({
        name: "",
        emailid: "",
        feedback: "",
    })
    const handlechange = (e) => {
        const { name, value } = e.target
        console.log(name, value);
        console.log(e);
        setData({
            ...data,
            [name]: value,
        })
    }
    const url = window.location.href;
    var id = url.substring(url.lastIndexOf('/') + 1);
    const feedbacks = async (e) => {
        console.log('first res');
        const { name, emailid, feedback } = data
        const feedbackData = {
            name, emailid, feedback, rating
        };
        console.log("feedback", feedbackData)
        console.log("rating", rating)

        Axios.post(`http://localhost:8000/feedback/${id}`, feedbackData)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Feedback successfully..", {
                        position: "top-center",
                    })
                    navigate('/')
                    window.location.reload();
                }
                console.log('first res', res);
            })
            .catch((error) => {
                console.log('error.messages', error.response.data.error);
                toast.error("Email already exits!", {
                    position: "top-center",
                })
            })
    }
    return (
        <>
            <Navbar />
            <div className=''>
                <div className='container mainny'>
                    <div className='card feedbackk'>
                        <div className='row'>
                            <div className='col-xl-4 col-12'></div>
                            <div className='col-xl-5 col-12'>
                                <form method='POST'>
                                    <div className="row justify-content-center align-items-center h-100">
                                        <div className="col-xl-12">
                                            <div className="row">
                                                <p className='fcon'>Feedback</p>
                                                <div className="col">
                                                    <div className="form-outline">
                                                        <input type="text"
                                                            className="form-control frm "
                                                            name="name"
                                                            placeholder='Your Name'
                                                            value={data.name}
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
                                                            value={data.emailid}
                                                            onChange={handlechange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-outline mb-4">
                                                <textarea type="text"
                                                    className="form-control frm"
                                                    name="feedback"
                                                    placeholder='Feedback'
                                                    value={data.feedback}
                                                    onChange={handlechange}
                                                />
                                            </div>
                                            <div className='rate'>
                                                <RatingStar
                                                    id="clickable"
                                                    clickable
                                                    className="ratingstar"
                                                    rating={rating}
                                                    onRatingChange={onRatingChange}
                                                />
                                            </div>
                                            <button type="submit" onClick={feedbacks} className="btn  btn-block  feedbutton">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <div className='col-xl-3 col-12'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='rtf'>
                    <Footer />
                </div>
            </div>
        </>
    )
};
export default Feedback;