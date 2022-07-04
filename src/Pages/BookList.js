import React, {useContext} from "react";
import { Database } from "../Database";

const BooksList = () => {
    const {database, removeBook } = useContext(Database)
    return(
        <div className="listContainer">
        <div className="titleDashboardContainer">
            <div  className="titleDashboard">
            <a href="/dashboard/books"><h1>Books List</h1></a>
            </div>
            <div className="titleDashboardButtonContainer">
                <a href="/dashboard/addBook"><button className="titleDashboardButton">Add Book</button></a>
            </div>
        </div>
        <div className="devider"></div>
        {
                database.db.books.map((book, i) => {
                console.log(book)
                return(
                    <div className="list">
                    <img src={book.img} className="listImg"></img>
                    <div className="listNameContainer"><a>{book.name}</a></div>
                    <div className="editRemoveContainer">
                    <a href={`/dashboard/editbook/${book._id}`}> Edit </a>
                    |
                    <a onClick={() => removeBook(i)}> Remove </a>
                    </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default BooksList