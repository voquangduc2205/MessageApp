import React from "react";
import { useState, useEffect } from "react";
import userSignUp from '../API/signup';

function checkUser(props){

}

function CheckPassword(props){
    if(props.cnfPassword === "") return (<p></p>);
    if(props.password === props.cnfPassword) return (<p>Password matches.</p>);
    else return(<p>Password doesn't matches</p>)
}

function SignUp(){
    const [name, setName] = useState('')
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [valid, setValid] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        const params = {
            'name': name,
            'username': user,
            'password': password,
        }
        setName('')
        setUser('')
        setPassword('')
        setCnfPassword('')
        
        console.log(userSignUp(params))

        
    }

    return (
        <div>

            <form>
                <label>Your Name</label>
                <input
                    type="text"
                    id="displayName"
                    onChange={(e) => {
                        setName(e.target.value)
                    }}
                    autoComplete="off"
                    value={name}
                    required>
                    
                </input>
            </form>

            <form>
                <label>Username</label>
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
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    autoComplete="off"
                    required>
                </input>
            </form>

            <form>
                <label>Confirm Password</label>
                <input
                    type="password"
                    id="cnfPassword"
                    onChange={(e) => {
                        setCnfPassword(e.target.value)
                    }}
                    autoComplete="off"
                    required>
                </input>
            </form>

            <div><CheckPassword password={password} cnfPassword={cnfPassword}/></div>
            
            <button onClick={handleSubmit}>
                Submit
            </button>
        </div>
    )
}

export default SignUp;