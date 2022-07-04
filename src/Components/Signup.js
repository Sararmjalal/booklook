import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {Database} from "../Database"
import "../Dashboard.css"

const Signup = () => {
    const navigate = useNavigate()
    const {signUpFunction} = useContext(Database)
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")

    const clearInputs = () => {
        setFname("")
        setLname("")
        setEmail("")
        setPassword("")
        setMsg(<h2>You Successfully Signed up. Please login to continue!</h2>)
    }


    return(
        <div>
        <div className="formContainer">
        <div>
        <input placeholder="First Name" className="formInput" value={fname} onChange={(e) => setFname(e.target.value)}></input>
        <input placeholder="Last Name" className="formInput" value={lname} onChange={(e) => setLname(e.target.value)}></input>
        </div>
        <div>
            <input placeholder="Email Address" className="formInput" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <input placeholder="Password" className="formInput" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        </div>
        <div className="devider"></div>
        <div className="buttonContainer">
            <button type="submit" className="formButton" onClick={() => signUpFunction(fname, lname, email, password, clearInputs)}>GET STARTED</button>
            </div>
            <div className="successStatus">{msg}</div>
    </div>
    )
}

export default Signup