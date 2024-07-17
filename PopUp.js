import React, { useState, useEffect } from 'react'
import "../Users_style/PopUp.css"
import { getToken } from '../services/getToken'
import Axios from 'axios'
import "../Users_style/Profile.css"
import { NavLink, useNavigate } from 'react-router-dom'
import homeprofile from '../images/home/homeprofile.png'

const PopUp = () => {
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        if (getToken) {
            Axios.get("http://localhost:8000/loggedin", { headers: { 'authorization': getToken } })
                .then((res) => {
                    setData(res.data.userValid)
                })
        }
        else {
            navigate("/login")
        }
    }, [])

    const handlelogout = () => {
        localStorage.clear();
        navigate("/")
        window.location.reload();
    }
    return (
        <div>
            <div className="card card-popup " >
                <div className="card-body im ">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src={homeprofile} alt="Admin" className="rounded-circle dev " width="100" />
                        <div className="mt-3 justify-content-center font-weight-bold pfile fs-4">
                            Hello {data.first_name}
                        </div>
                    </div>
                    <hr className='hr' />
                    <div className="row d-flex flex-column align-items-center text-center">
                        <div className="col ">
                            <NavLink className="nav-link  bookdataedit" exact to={{ pathname: `/edituser/${data._id}` }}>
                                <p type="submit " className="mb-0">Edit</p>
                            </NavLink>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div className="row d-flex flex-column align-items-center text-center">
                        <div className="col">
                            <NavLink className=" nav-link bookdataedit" exact to={{ pathname: `/bookdata/${data._id}` }}>
                                <p type="submit " className="mb-0">BookData</p>
                            </NavLink>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div className="row d-flex flex-column align-items-center text-center">
                        <div className="col ">
                            <p type="submit" className="mb-0" onClick={handlelogout}>LogOut</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopUp