import React, { isValidElement } from "react";
import { useState, useEffect } from "react";
import userSignUp from '../API/signup';
import checkUser from '../API/checkuser'

function UsernameValid(props){
    if(props.valid === 200) return (<p style={{
        color: 'green'
    }}>Username is able to use!</p>);
    if(props.valid === 201) return (<p style={{
        color: 'red'
    }}>Username is used before!</p>);
}

function CheckPassword(props){
    if(props.cnfPassword === "") return (<p></p>);
    if(props.password === props.cnfPassword) return (<p style={{
        color: 'green'
    }}>Password matches.</p>);
    else return(<p style={{
        color: 'red'
    }}>Password doesn't matches</p>)
}

function SignUp(){
    const [name, setName] = useState('')
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [cnfPassword, setCnfPassword] = useState('');
    const [valid, setValid] = useState(0);

    useEffect(() => {
        if(user === '') setValid(0);
        const isUserValid = async(username) => {
            const params = {
                'username': username,
            }
            const result = await checkUser(params);
            setValid(result.status)
        }  
        if(user !== '') isUserValid(user)
    }, [user])

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
        const result = await userSignUp(params)
        console.log(result)
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

            <div><UsernameValid valid={valid}/></div>

            <form>
                <label>Password</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    value={password}
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
                    value={cnfPassword}
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