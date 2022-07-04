import React from "react";
import { GetContext } from '../Database';
import ReactStars from "react-rating-stars-component";


const Home = () => {
    const { database } = GetContext()

    return (
        <div className="container">
            <div>
                <h1 className="title">Book Look</h1>
                <p className="titleDescription">Welcome to my small library!</p>
            </div>
            <div className="devider"></div>
            <h1 className="title">Most Popular Genres</h1>
            <div>
                {
                    database.db.genres.map((genre, i) => {
                        if (genre.total !== 0)
                            return (
                                <div>
                                    <h1 className="homeGenreName"><span>{i + 1}) </span><span>{genre.name}</span></h1>
                                    <div className="homeBooksContainer">
                                        {
                                            genre.books.map(gBook => {
                                                const thisBooks = []
                                                database.db.books.map(book => {
                                                    if (book._id === gBook)
                                                        thisBooks.push(book)
                                                })
                                                return (
                                                    <div className="homeBookCard">
                                                        {
                                                            thisBooks.map(thisBook => {
                                                                return (
                                                                    <>
                                                                        <div className="cardScoreContainer"><img src={thisBook.img} className="cardImg" /></div>
                                                                        <h2 className="cardName">{thisBook.name}</h2>
                                                                        <div className="cardScoreContainer">
                                                                        <ReactStars
                                                                            count={5}
                                                                            value={thisBook.totalRate}
                                                                            size={24}
                                                                            edit={false}
                                                                            activeColor="#3f3730"
                                                                            />
                                                                        </div>
                                                                        <div className="cardScoreContainer"><a href={`/books/${thisBook._id}`}><button className="cardButton">Learn More</button></a></div>
                                                                    </>
                                                                )
                                                            })
 
                                                        }
                                                    </div>)
                                            })
                                        }
                                    </div>
                                </div>
                            )
                    })
                }
            </div>
        </div>
    )
}

export default Home