import React from "react";
import {useEffect, useState, useRef} from 'react';

import userLogin from '../API/login'
const Login = () => {
    const userRef = useRef();
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser('')
        setPassword('')
        setSuccess(true);
        const params = {
            'username': user,
            'password': password
        }
        console.log(params)
        console.log(userLogin(params))
    }

    return(
        <>
        {
            success ? (<div>
            <h1>You are logged in</h1>
            <br />
            <p>
                <a href="/">Go to home</a>
            </p>
        </div>) : (<div>
            <h1>Please Sign In</h1>
            <form>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text" 
                    id="username" 
                    onChange={(e) => {
                        setUser(e.target.value)
                    }}
                    autoComplete="off"
                    value={user}
                    required>
                </input>
            </form>

            <form>
                <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    autoComplete="off"
                    value={password}
                    required>
                </input>
            </form>

            <button
                id="btn_signin"
                onClick={handleSubmit}
                >SIGN IN</button>

            <p>
                Need an account?<br/>
                <span className="line">
                    {}
                    <a href="sign_up">Sign Up</a>
                </span>
            </p>

        </div> )
        }
        </>
    )
}

export default Login;