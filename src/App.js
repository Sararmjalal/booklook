import React, { useEffect, useState } from 'react';
import "./App.css"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebLayout from './Layout/WebLayout';
import DashboardLayout from './Layout/DashboardLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Books from './Pages/Books';
import Book from './Pages/Book';
import Dashboard from './Pages/Dashboard';
import UserList from './Pages/UserList';
import BookList from "./Pages/BookList"
import AddBook from "./Pages/AddBook"
import EditBook from "./Pages/EditBook"
import GenreList from './Pages/GenreList';
import AddGenre from './Pages/AddGenre';
import EditGenre from './Pages/EditGenre';
import LoginSignUp from './Pages/LoginSignUp';
import {NotFound} from './Pages/NotFound';

import { GetContext } from './Database';
import dummyData from './dummyData';

// onerror img - rating process and css - scroll css - comment box css - sample books

export default function App() {
  const [loading, setLoading] = useState(true)
  const { setDatabase } = GetContext()

  useEffect(()=> {
    const x = localStorage.getItem("bookLookData")
    const database = dummyData(JSON.parse(x))
    setDatabase(database)
    setLoading(false)
  }, [])


  if (loading) return <h1>Loading...</h1>
return (
    
        <Router>
          <Routes>
          <Route path='*' element={<NotFound />} />
      
            <Route path='/' element={<WebLayout />}>
              <Route path='' element={<Home />}/>
              <Route path='about' element={<About />}/>
              <Route path='contact' element={<Contact />}/>
              <Route path='books' element={<Books />}/>
              <Route path='books/:_id' element={<Book />}/>
            </Route>

            <Route path='/dashboard/' element={<DashboardLayout />}>
                <Route path='' element={<Dashboard />}/>
                <Route path='users' element={<UserList />}/>
                <Route path='books' element={<BookList />}/>
                <Route path='addBook' element={<AddBook />}/>
                <Route path='editBook/:_id' element={<EditBook />}/>
                <Route path='genres' element={<GenreList />}/>
                <Route path='addGenre' element={<AddGenre />}/>
                <Route path='editGenre/:_id' element={<EditGenre />}/>

            </Route>

            <Route path='/loginSignUp' element={<LoginSignUp />}/>

          </Routes>
        </Router>
    
    )
}