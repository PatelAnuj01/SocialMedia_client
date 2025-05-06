import React, { useState } from "react";
import "./Auth.css";
import logo from "../../img/logo-transparent-png.png";
import { useDispatch, useSelector } from 'react-redux'
import { login, signUp } from "../../actions/AuthAction";

const Auth = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state) => state.authReducer.loading)
    const [isSignUp, setIsSignUp] = useState(true);
    const [data, setData] = useState({firstname: "", lastname: "", password: "", confirmpass: "", username: "", email: ""});
    const [confirmPass, setConfirmPass] = useState(true);


    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp) {
            data.password === data.confirmpass ? dispatch(signUp(data)) : setConfirmPass(false)
        } else {
            dispatch(login(data))
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({firstname: "", lastname: "", password: "", confirmpass: "", username: "", email: ""})
    }

    return (
        <div className="Auth">
            {/**Left side */}
            <div className="a-left">
                <img src={logo} alt="" />
                <div className="Webname">
                    <h1>Sociofy</h1>
                    <h3>Expore the all new World!</h3>
                    
                </div>
            </div>

            {/** Right side */}
            <div className="a-right">
            <form className="infoForm authForm" onSubmit={handleSubmit}>
                <h3>{isSignUp ? "Sign up":"Log in"}</h3>

                
                {isSignUp && 
                    <div>
                        <input
                        type="text"
                        placeholder="First Name"
                        className="infoInput"
                        name="firstname"
                        onChange={handleChange}
                        value={data.firstname}
                        />
                        <input
                        type="text"
                        placeholder="Last Name"
                        className="infoInput"
                        name="lastname"
                        onChange={handleChange}
                        value={data.lastname}
                        />
                    </div>
                }
                    

                <div>
                    {isSignUp &&<input
                        type="email"
                        placeholder="Email"
                        className="infoInput"
                        name="email"
                        onChange={handleChange}
                        value={data.email}
                        />
                    }
                    <input
                        type="text"
                        className="infoInput"
                        name="username"
                        placeholder="Usernames"
                        onChange={handleChange}
                        value={data.username}
                    />
                </div>

                <div>
                    <input
                        type="password"
                        className="infoInput"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={data.password}
                    />
                    {isSignUp && 
                        <input
                        type="password"
                        className="infoInput"
                        name="confirmpass"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        value={data.confirmpass}
                        />
                    }
                    
                </div>

                    <span style={{display: confirmPass? "none":"block", color:"red", fontSize:'12px', alignSelf: 'flex-end', marginRight:"5px"}}>
                        * Confirm Password is not same
                    </span>

                <div>
                    <span style={{ fontSize: "12px", cursor: "pointer" }} onClick={() => {setIsSignUp((prev) => !prev); resetForm()}}>
                        {isSignUp ? "Already have an account. Log in": "Don't have an account? Sign Up"}
                    </span>
                </div>
                <button className="button infoButton" type="submit" disabled={loading}>
                    {loading ? "Loading..." : isSignUp ? "Signup": "Log in"}
                </button>
            </form>
        </div>

        </div>
    );
};

export default Auth;
