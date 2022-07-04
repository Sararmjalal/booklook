import React, {useContext} from "react";
import { Database } from "../Database";

const GenreList = () => {

    const { database, removeGenre } = useContext(Database)

    return(
        <div className="listContainer">
        <div className="titleDashboardContainer">
            <div  className="titleDashboard">
            <a href="/dashboard/books"><h1>Genres List</h1></a>
            </div>
            <div className="titleDashboardButtonContainer">
                <a href="/dashboard/addGenre"><button className="titleDashboardButton">Add Genre</button></a>
            </div>
        </div>
        <div className="devider"></div>
        {
            database.db.genres.map((genre, i) =>{
                return(
                    <div className="list">
                    <div className="listNameContainer"><a>{genre.name}</a></div>
                    <div className="editRemoveContainer">
                    <a href={`/dashboard/editgenre/${genre._id}`}> Edit </a>
                    |
                    <a onClick={() => removeGenre(i)}> Remove </a>
                    </div>
                    </div>
                )
            })
        }
        </div>
    )
}
export default GenreList