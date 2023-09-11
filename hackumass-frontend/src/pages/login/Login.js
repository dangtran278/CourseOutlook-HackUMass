import "./login.css";
import React from "react";
import axios from "axios";
import { GoogleLogin } from '@react-oauth/google';
import { toast } from 'react-toastify';
const Login = (props) => {

  const responseSuccessGoogle = (res) => {
    const baseUrl = process.env.REACT_APP_ROOT_API;
    axios.post(`${baseUrl}/auth/googlelogin`, { idToken: res.credential }).then(res => {
      const { data } = res;
      const { status } = data;
      if (status === 200)
      {
        localStorage.setItem('token', data.data.token);
        toast.success(data.success);
      } else
      {
        console.log(data.message)
        toast.error(data.message);
      }
    }).catch(err => {
      toast.error(err.message);
    })
  }

  const responseErrorGoogle = (err) => {
    // toast.error(err.message);
  }
  return (
    // <div className="Auth-form-container">
    //   <form className="Auth-form">
    //     <div className="Auth-form-content">
    //       <h3 className="Auth-form-title">Sign In</h3>
    //       <div className="form-group mt-3">
    //         <label>Email address</label>
    //         <input
    //           type="email"
    //           className="form-control mt-1"
    //           placeholder="Enter email"
    //         />
    //       </div>
    //       <div className="form-group mt-3">
    //         <label>Password</label>
    //         <input
    //           type="password"
    //           className="form-control mt-1"
    //           placeholder="Enter password"
    //         />
    //       </div>
    //       <div className="d-grid gap-2 mt-3">
    //         <button type="submit" className="btn btn-primary">
    //           Submit
    //         </button>
    //       </div>
    //       <p className="forgot-password text-right mt-2">
    //         Forgot <a href="#">password?</a>
    //       </p>
    //     </div>
    //   </form>
    // </div>
    <GoogleLogin
      buttonText="Login"
      onSuccess={responseSuccessGoogle}
      onFailure={responseErrorGoogle}
      cookiePolicy={'single_host_origin'}
      useOneTap
    />
  )
}

export default Login;