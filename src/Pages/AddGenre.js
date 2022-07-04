import React, {useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Database } from "../Database";

const AddGenre = () => {
    const { addGenre } = useContext(Database)
    const [name, setName] = useState("")
    const navigate = useNavigate()
    const redirect = () => {
        navigate("/dashboard/genres")
    }

    return(
        <div className="listContainer">
        <div className="titleDashboardContainer">
            <div  className="titleDashboard">
            <a href="/dashboard/addGenre"><h1>Add Genre</h1></a>
            </div>
        </div>
            <div className="devider"></div>
            <div className="addGenreFormContainer">
            <div>
            <input placeholder="Genre Name" className="formInput" value={name} onChange={(e) => {setName(e.target.value)}}></input>
            </div>
            <div className="addGenreButtonContainer">
            <button className="addGenreFormButton" onClick={() => addGenre(name, redirect)}>Add Genre</button>
                </div>
                </div>
            </div>
    )
}

export default AddGenre