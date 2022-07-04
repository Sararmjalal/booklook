import React, {useContext, useEffect, useState} from "react";
import { Database } from "../Database";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditBook = () => {

    const params = useParams()
    const { editBook, database } = useContext(Database)
    const books = [...database.db.books]
    const thisBook = books.find(item => item._id === params._id)

	const [genres, setGenres] = useState([])
	const [img, setImage] = useState("")
	const [nameB, setName] = useState("")
	const [author, setAuthor] = useState("")
	const [publishYear, setPublishYear] = useState("")
    const [summary, setSummary] = useState("")



    useEffect(() => {
        const arr = database.db.genres.map(item => {

            const isSelected = thisBook.genres.some(_id => _id === item._id)

            return {
                ...item,
                isSelected,
            }
        })
        setGenres(arr)
        setImage(thisBook.img)
        setName(thisBook.name)
        setAuthor(thisBook.author)
        setPublishYear(thisBook.publish_date)
        setSummary(thisBook.summary)
    }, [])
    
    return(
			<>
        <div className="listContainer">
        <div className="titleDashboardContainer">
            <div  className="titleDashboard">
            <a href={`/dashboard/editbook/${thisBook._id}`}><h1>Edit Book</h1></a>
            </div>
        </div>
        <div className="devider"></div>
        <div className="addBookContainer">
        <div className="addBookFormContainer">
            <div>
            <div>
            <input placeholder="Image URL" className="formInput" value={img} onChange={(e) => setImage(e.target.value)}></input>
            <input placeholder="Book Name" className="formInput" value={nameB} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div> 
                <input placeholder="Author" className="formInput" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <input placeholder="Publish Year" className="formInput" value={publishYear} onChange={(e) => setPublishYear(e.target.value)}></input>
            </div>
            <div>
            <textarea className="summaryInput" rows="4" cols="50" placeholder="Summary" value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
            </div>
            </div>
            <div className="devider"></div>
							<div>
								
								<button onClick={() => {
									
									const selectedGenres2 = genres.reduce((acc, cur) => cur.isSelected ? [...acc, cur._id] : acc ,[])
									editBook({
											img,
											nameB,
											author, 
											publishYear,
											summary,
                                            genres: selectedGenres2,
                                            _id: thisBook._id
									})
                }} className="formButton">Edit</button>
            </div>
        </div>
        <div className="addBookeGenresContainer">
							<h2 className="genresAddBookTitle">Select Genres</h2>
							<ul>
							{
            genres.map((genre, index) =>{
                return(
                <li
                    className={genre.isSelected? "genreSelect" : "genreNotSelect"} 
                    onClick={() => {
                        const arr = [...genres]
                        arr[index].isSelected = !arr[index].isSelected
                        setGenres(arr)
                    }}
                >
                    {genre.name}
                </li>)
            })
								}
								</ul>
        </div>
        </div>
        </div>
        
        </>
        )
}
export default EditBook