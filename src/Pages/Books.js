import React from "react";
import { GetContext } from '../Database';
import ReactStars from "react-rating-stars-component";
const Books = () => {
    const { database } = GetContext()

    return (
        <div className="container">
            <div>
                <h1 className="title">Books List</h1>
                <p className="titleDescription"><a href="/">Home</a> | <a href="/books">Books</a></p>
            </div>
            <div className="devider"></div>
        <div className="homeBooksContainer">
                {
                    database.db.books.map(book => {
                        return (
                            <div className="homeBookCard">
                                <div className="cardScoreContainer"><img src={book.img} className="cardImg" /></div>
                                <h2 className="cardName">{book.name}</h2>
                                <div className="cardScoreContainer">
                                <ReactStars
                                    count={5}
                                    value={book.totalRate}
                                    size={24}
                                    edit={false}
                                    activeColor="#3f3730"
                                    />
                                </div>
                                <div className="cardScoreContainer"><a href={`/books/${book._id}`}><button className="cardButton">Learn More</button></a></div>
                                </div>
                      )
                  })  
               } 
        </div>
        </div>
    )
}

export default Books