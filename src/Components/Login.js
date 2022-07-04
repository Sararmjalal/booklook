import React, { useContext, useState } from "react";
import {Database} from "../Database"
import { useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate()
    const {loginFunction, ban} = useContext(Database)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const clearInputs = (url) => {
        setEmail("")
        setPassword("")
        if (url) {
            navigate(url)
        }
            
    }

    return(
        <div>
            <div className="formContainer">
                <input placeholder="Email Address" className="formInput" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input placeholder="Password" className="formInput" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className="devider"></div>
            <div className="buttonContainer">
                <button type="submit" className="formButton" onClick={() => loginFunction(email, password, clearInputs)}>Login</button>
            </div>
            <div className="banStatus">{ban}</div>
            </div>
    )
}

export default Login