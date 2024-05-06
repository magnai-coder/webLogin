import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {


   const [email , checkEmail] = useState();
   const [password , checkPassword] = useState();
   const navigate = useNavigate();
   const handleSubmit = (e) =>{
    console.log("fucking worked");
    e.preventDefault();
       axios.post("http://localhost:3000/routes/login",{email,password})
       .then((response)=>{console.log(response); navigate(".././home");})
       .catch((err)=>console.log(err));
   };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Welcome</h3>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Enter email"
                            onChange={(e)=>checkEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            onChange={(e)=>checkPassword(e.target.value)}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Sign in
                        </button>
                    </div>
                    <p className="forgot-password text-right mt-2">
                        Forgot <a href="#">password?</a>
                    </p>
                </div>
            </form>
        </div>
    );
}
export default Login;
