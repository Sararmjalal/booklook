import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Signup from "../Components/Signup";
import Login from "../Components/Login";

const LoginSignUp = () => {
    const navigate = useNavigate()
    const [classBtnSU, setClassBtnSU] = useState("LoginSignUpButtonActive")
    const [classBtnL, setClassBtnL] = useState("LoginSignUpButtonNotActive")
    const [classForm, setClassForm] = useState("signUpContainer")
    const [form, setForm] = useState(<Signup />)

     const login = () => {
        setForm(<Login />)
            setClassBtnL("LoginSignUpButtonActive")
            setClassBtnSU("LoginSignUpButtonNotActive")
            setClassForm("loginContainer")
     }
     
     const signUp = () => {
        setForm(<Signup />)
        setClassBtnL("LoginSignUpButtonNotActive")
        setClassBtnSU("LoginSignUpButtonActive")
        setClassForm("signUpContainer")
     }

    return(
        <div className="LoginSignUpPage">
            <div onClick={() => navigate(-1)} className="goBack">Go Back</div>
            <div className={classForm}>
                <div className="LoginSignUpButtonContainer">
                    <button className={classBtnSU} onClick={signUp}>Sign Up</button>
                    <button className={classBtnL} onClick={login}>Login</button>
                </div>
                <div className="devider"></div>
                <>{form}</>
            </div>
        </div>
    )
}

export default LoginSignUp