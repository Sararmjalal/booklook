import React, { useEffect, useContext, useState } from "react";
import { Database } from "../Database";
import { useParams } from "react-router-dom";


const EditGenre = () => {
    const params = useParams()
    const { editGenre, database } = useContext(Database)
    const [name, setName] = useState("")
    const genres = [...database.db.genres]
    const thisGenre = genres.find(item => item._id == params._id)

    useEffect(() => {
    setName(thisGenre.name)
    }, [])

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
            <button className="addGenreFormButton" onClick={() => editGenre(name, thisGenre._id)}>Edit Genre</button>
                </div>
                </div>
            </div>
    )
}


export default EditGenre