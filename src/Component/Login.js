import React from "react";
import {useEffect, useState, useRef} from 'react';
import { Navigate, useNavigate } from "react-router-dom";

import userLogin from '../API/login'

const Login = () => {
    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [success, setSuccess] = useState(false)
    const [showWarning, setShowWarning] = useState(false)
    const [warning, setWarning] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const params = {
            'username': user,
            'password': password
        }
        const result = await userLogin(params)
        console.log(result);
        if(result.status === 200){
            navigate("/user/" + result.userID, {
                userID: result.userID,
            })
        }else{
            setShowWarning(true)
            if(result.status == 202){
                setWarning("Wrong password!")
            }else{
                setWarning("User doesn't exist!")
            }
        }

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

            {showWarning && (<p style={{
                color: 'red',
            }}>{warning}</p>)}
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