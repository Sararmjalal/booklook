import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { Database } from "../Database";

const AddBook = () => {
    const navigate = useNavigate()
    const {addBook, database, calcTotalGenre} = useContext(Database)
	const [genres, setGenres] = useState([])
	const [img, setImage] = useState("")
	const [nameB, setName] = useState("")
	const [author, setAuthor] = useState("")
	const [publishYear, setPublishYear] = useState("")
	const [summary, setSummary] = useState("")


    useEffect(() => {
        const arr = database.db.genres.map(item => {
            return {
                ...item,
                isSelected: false
            }
        })
        setGenres(arr)
    }, [])

    const redirect = () => {
        navigate("/dashboard/books")
    }
    
    return(
			<>
        <div className="listContainer">
        <div className="titleDashboardContainer">
            <div  className="titleDashboard">
            <a href="/dashboard/addBook"><h1>Add Book</h1></a>
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
									addBook({
											img,
											nameB,
											author, 
											publishYear,
											summary,
											genres: selectedGenres2
                                    }, redirect)

                }} className="formButton">Publish</button>
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
                        if (arr[index].isSelected) {
                            calcTotalGenre(genre._id)
                        }
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

export default AddBook 