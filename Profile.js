import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import { getToken } from '../services/getToken'
import Axios from 'axios'
import "../Users_style/Profile.css"
import { NavLink, useNavigate } from 'react-router-dom'
import PopUp from './PopUp'
import Footer from "./Footer"
const Profile = () => {
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        if (getToken) {
            Axios.get("http://localhost:8000/loggedin", { headers: { 'authorization': getToken } })
                .then((res) => {
                    setData(res.data.userValid)
                    console.log("uservalid", res.data.userValid)
                })
        }
        else {
            navigate("/login")
        }
    }, [])

    return (
        <div className='back'>
            <Navbar />
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm profile">
                        <div className="col-md-3 mb-3">
                            <PopUp />
                        </div>
                        <div className="col-md-8 bd">
                            <div className="card mb-3">
                                <div className="card-body pcard ">
                                    <div className="row justify-content-center font-weight-bold fs-4 ">
                                        Profile data
                                    </div>
                                    <hr />
                                    <div className="row ">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">First Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.first_name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Last Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.last_name}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.emailid}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Contact Number</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.contact_number}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">city</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {data.city}
                                        </div>
                                    </div>
                                    <hr />
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

export default Profile