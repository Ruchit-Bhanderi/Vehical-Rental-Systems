import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { getToken } from '../services/getToken'
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Users_style/Login.css"
import firstlogin from '../images/login/firstlogin.jpg'
import secondlogin from '../images/login/secondlogin.jpg'

toast.configure();
const Login = () => {
  const [isEdit, setisEdit] = useState(false);
  const [err, seterr] = useState({})
  useEffect(() => {
    if (getToken) {
      Axios.get("http://localhost:8000/aloggin", { headers: { 'authorization': getToken } })
        .then((res) => {
          const data = res.data.data;
          if (data.type === "login") {
            navigate('/vehicle')
            // window.location.reload();
          }
          else {
            navigate('/');
            // window.location.reload();
          }
        })
    }

  }, [])
  let navigate = useNavigate();
  const [user, setUser] = useState({
    emailid: "",
    password: "",
    comfirmpassword: ""
  })
  const handlechange = (e) => {
    const { name, value } = e.target
    // console.log(name , value)
    setUser({
      ...user,
      [name]: value,
    })
  }
  const change = () => {
    setisEdit(!isEdit);
    navigate("/login")
  }

  const validation = () => {
    const err = {};
    let isValid = true;
    if (!user.password) {
      err.pname = "Fill the informations";
      isValid = false;
    }
    else if (typeof user.password !== "undefined") {
      if (!user.password.match(/^[A-Za-z]\w{7,14}$/)) {
        err.pname = "Strong password like : Abc1234";
        isValid = false;
      }
    }
    else {
      console.log("no data")
    }
    //cpass
    if (!user.comfirmpassword) {
      err.cpname = "Fill the informations";
      isValid = false;
    }
    else if (typeof user.comfirmpassword !== "undefined") {
      if (!(user.password === user.comfirmpassword)) {
        err.cpname = "Do not match password";
        isValid = false;
      }
    }
    else {
      console.log("no data")
    }
    seterr(err)
    return isValid
  }

  const changePassword = (e) => {
    e.preventDefault();
    const isValid = validation();
    if (isValid) {
      const { emailid, password } = user
      Axios.put(`http://localhost:8000/updatepassword/`, { emailid, password })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Update Successfully.."
            // toast.success("Update Successfully..", { autoClose: 1000 }
              , {
                position: "top-center",
              })
            setisEdit(!isEdit);
            setUser({
              password: "",
            })
            window.location.reload();
            navigate('/login')
          }
        })
        .catch((error) => {
          toast.error("failed to update data", {
            position: "top-center"
          })
        })
    }
  }
  
  //login
  const handleSubmit = (e) => {
    e.preventDefault();
    const { emailid, password } = user

    Axios.post("http://localhost:8000/login", { emailid, password })
      .then((res) => {
        if (res.status === 200) {
          navigate("/")
          window.location.reload();
          // toast.success("Login Successfully..",{autoClose:1000}
          toast.success("Login Successfully.."
          ,{
              position:"top-center",
          })
          
          localStorage.setItem("token", `Bearer ${res.data.token}`)
        }
        
      }
      )

      .catch((error) => {
        console.log("2 error", error);
        toast.error("Invalid Details!", {
          position: "top-center",
        })
      })

  }

  return (
    <div className='loginform'>
  
      <div className='container'>
        <div className='row loginrow'>
          <div className='col-xl-6 col-12 loform'>
            {isEdit ? (
              <div >
                <div className="form-outline">
                  <i className="fas fa-user fa-9x logoo"></i><br></br>
                  <input type="email"
                    className="form-control lform_control"
                    placeholder='Email Id'
                    name='emailid'
                    value={user.emailid}
                    onChange={handlechange}
                  />
                </div>
                <div className="form-outline ">
                  <input type="password"
                    className="form-control lform_control"
                    placeholder='Password'
                    name='password'
                    value={user.password}
                    onChange={handlechange} />
                </div>
                {<span className='loginspan' style={{ color: "red" }}>{err["pname"]}</span>}
                <div className="form-outline mb-2">
                  <input type="password"
                    className="form-control lform_controlls"
                    placeholder='Confirm Password'
                    name='comfirmpassword'
                    value={user.comfirmpassword}
                    onChange={handlechange} />
                </div>
                {<span className='loginspann' style={{ color: "red" }}>{err["cpname"]}</span>}
                <button type="submit" onClick={changePassword} className="btn  btn-block mb-4 mt-4 loginbutton">Submit</button>
              </div>
            ) : (
              <>
                <div className=''>
                  <div className="form-outline">
                    <i className="fas fa-user fa-9x logoo"></i><br></br>
                    <input type="email"
                      className="form-control lform_control"
                      placeholder='Email Id'
                      name='emailid'
                      value={user.emailid}
                      onChange={handlechange}
                    />
                  </div>
                  <div className="form-outline mb-2">
                    <input type="password"
                      className="form-control lform_control"
                      placeholder='Password'
                      name='password'
                      value={user.password}
                      onChange={handlechange} />
                  </div>
                  <p className="loginp" onClick={change} >Forget Password</p>
                  <button type="submit" onClick={handleSubmit} className="btn  btn-block mb-4  loginbuttonss">Sign in</button>
                  <div className="">
                    <p className="lodedp" >Not A Member.?Register Now <a href="/register">Register</a></p>
                  </div>
                </div>
              </>
            )}
          </div>
          {isEdit ?
            (
              <div className='col-xl-6 col-12   '>
                <img className="logedimg" src={firstlogin} alt="" />
              </div>
            ) : (
              <div className='col-xl-6 col-12   '>
                <img className="logedimg" src={secondlogin} alt="" />
              </div>
            )}
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  )
};

export default Login;
