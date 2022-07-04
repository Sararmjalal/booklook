import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetContext } from '../Database';
import ReactStars from "react-rating-stars-component";

const Book = () => {
  const params = useParams()
  const { database, addComment, rating} = GetContext()
  const genres = [...database.db.genres]
  const thisBook = database.db.books.find(book => book._id === params._id)
  const thisUser = database.db.current_user
  const index = database.db.books.findIndex(book => book === thisBook)
  const [readMore, setReadMore] = useState(false)
  const[comment, setComment] = useState("")
  const [isRating, setIsRating] = useState(false)

  useEffect(()=>{
    thisBook.rate.map(item => {
      if(!thisUser) return
      if(thisUser._id === item.user) {
        setIsRating(true)
      }
    })
  }, [])
  

  const ratingChanged = (newRating) => {
    rating(newRating, index)
  };

  console.log(index)
  console.log(database.db.books)
  console.log(thisBook)

    return(
      
        <div className="container">
            <div>
                <h1 className="title">{thisBook.name }</h1>
                <p className="titleDescription"><a href="/books">Books</a> | <a href={`/books/${thisBook._id}`}>{thisBook.name}</a></p>
            </div>
            <div className="devider"></div>
            <div className="bookContainer">
          <div style={{ width: "60%"}}>
          <div className="bookImgContainer"><img src={thisBook.img} className="bookImg" /></div>
          <div className="bookDetailsContainer">
            <ul className="bookDetails">
            <li><h2>Book Details</h2></li>
                    <li><div style={{display: "flex"}}>
                    <span className="bookDetailLable"  style={{marginTop: "4px"}}>Rate:</span>
                      <span><ReactStars
                      count={5}
                      value={thisBook.totalRate}
                      size={20}
                      edit={false}
                      activeColor="#3f3730"
                      /></span>
                    </div>
                    </li>
                    <li><span className="bookDetailLable">Author:</span> {thisBook.author}</li>
                    <li><span className="bookDetailLable">Publish Date:</span> {thisBook.publish_date}</li>
                    <li><span className="bookDetailLable">Genre(s):</span> 
                        {
                            genres.map(genre => {
                                return (
                                    <>
                                        {
                                            thisBook.genres.map(bGenre => {
                                                if (bGenre === genre._id)
                                                return (
                                                    <span> {genre.name} </span>
                                                )
                                            })
                                    }
                                    </>
                                )

                            })
                        }
              </li>
              <li><span><span className="bookDetailLable">Summary: </span>
                        {
                thisBook.summary.length > 200 ?    

                readMore ?
                  
                  <span> {thisBook.summary} <span className="readmore" onClick={() => setReadMore(false)}>  Read less </span>  </span>
                  :
                  <span> {thisBook.summary.slice(0, 200)+"..." }<span className="readmore" onClick={() => setReadMore(true)}>  Read more</span> </span>
                  
                   :
                   <span> {thisBook.summary}</span>
                   
              } </span></li>
            </ul>
            </div>    
          </div>
          <div className="commentsContainer">
            <div className="commentsContainerOverlay"></div>
            {
              thisBook.comment.map(item => {
                const user = database.db.users.find(user => user._id === item.user)
                const rate = thisBook.rate.find(rate => rate.user === item.user)
                if (!user) return <h3>Be the first one who comments!</h3>

                return (
                  <div className="commentRow">
                    <div className="commentInfo">
                    <span className="commentName">{user.fname}</span>
                    <span className="commentLname">{user.lname}</span>
                    <ReactStars
                      count={5}
                      value={rate ? rate.count : 0}
                      size={20}
                      edit={false}
                      activeColor="#3f3730"
                      />
                      </div>
                    <div className="line"></div>
                    <p>{item.text}</p>
                  </div>
                )
              })
            }
          </div>
          </div>
        <div className="bookCommentForm">

          {
            <><textarea className="bookCommentInput" rows="4" cols="50" placeholder="Comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            {
              isRating ? "" 
              : 
              <div>
              <p>Rate This Book</p>
              <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#3f3730"
              />
              </div>
            }
            <button className="bookCommentButton" onClick={() => addComment( thisUser, thisBook._id, comment)}>Submit</button>
            </>
          }
          </div>
        </div>
        
    )
}

export default Book