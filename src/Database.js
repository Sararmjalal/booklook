import React, {useState, createContext ,useEffect ,useContext} from "react";

export const Database = createContext()

export const DatabaseProvider = (props) => {

    const [database, setDatabase] = useState(null)

    useEffect(() => {
        if (database)
            localStorage.setItem("bookLookData", JSON.stringify(database))
    }, [database])

    const [ban, setBan] = useState("")
    
    const id = `${new Date().getTime()}${String(Math.random()).slice(3, 9)}`

    const refresh = () => {
        window.location.reload(false);
    }

    const signUpFunction = (fname, lname, email, password, cb) => {

        if (!fname || !lname || !email || !password) return alert("You should fill out the Form")

        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.users.push({
            _id: `BLU_${id}`,
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            status: "active"
        })

        setDatabase(dbclone)

        cb()
    }

    const loginFunction = (email, password, cb) => {
        const thisUser = database.db.users.find(item => email === item.email && password === item.password)
        if (!thisUser) {
            return alert("The email or the password you've entered are wrong. Please try again!")
        }

        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.current_user = thisUser

        setDatabase(dbclone)

        if (thisUser.status === "active") {
            return cb('/')
        }

        if (thisUser.status === "admin") {
            return cb('/dashboard')
        }

        setBan(<h1>Sorry, you're banned. for solving this, please contact admin.</h1>)
    }

    const logoutFunction = (cb) => {

        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.current_user = null

        setDatabase(dbclone)
        
        cb()
    }

    const addBook = ({img, nameB, author, publishYear, summary, genres}, cb) => {
        if (!img || !nameB || !author || !publishYear || !summary || !genres || !Array.isArray(genres) || !genres[0]) return alert("You should compelete all sections!")

        const dbclone = JSON.parse(JSON.stringify(database))
        const bookId = `BLK_${id}`
        dbclone.db.books.push({
            _id: bookId,
            img,
            name: nameB,
            rate: [],
            totalRate: 0,
            author,
            publish_date: publishYear,
            genres,
            summary,
            comment: []
        })

        genres.map(item=> {
            dbclone.db.genres.map(genre => {
                if (item === genre._id)
                    genre.books.push(bookId)
            })
        })

        setDatabase(dbclone)
        cb()
    }

    const editBook = ({img, nameB, author, publishYear, summary, genres, _id}) => {
        if (!img || !nameB || !author || !publishYear || !summary || !genres || !Array.isArray(genres) || !genres[0]) return alert("You should compelete all sections!")

        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.books.map(item => {
            if (item._id === _id)
            {item.img = img
            item.name = nameB
            item.author = author
            item.publish_date = publishYear
            item.genres = genres
            item.summary = summary}
        })

        setDatabase(dbclone)
        refresh() 
    }

    const addGenre = (name, cb) => {
        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.genres.push({
            _id: `BLG_${id}`,
            name,
            books: [],
            total:0,
        })

        setDatabase(dbclone)

        cb()
    }

    const editGenre = (name, _id) => {
        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.genres.map(item => {
            if (item._id === _id)
            item.name = name
        } )

        setDatabase(dbclone)

        refresh()
    }

    const calcTotalGenre = (id) => {
        const dbclone = JSON.parse(JSON.stringify(database))
        dbclone.db.genres.map(genre => {
            if (genre._id === id)
                genre.total ++
        })
        setDatabase(dbclone)
    }

    const removeGenre = (i) => {
        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.genres.splice(i, 1)
        
        setDatabase(dbclone)
    }

    const removeBook = (i) => {
        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.books.splice(i, 1)
        
        setDatabase(dbclone)
    }

    const userBan = (id) => {
        const dbclone = JSON.parse(JSON.stringify(database))

        dbclone.db.users.map(user => {
            if (id === user._id) {
                if (user.status === "active")
                    user.status = "inActive"
                else user.status = "active"
            }
        })

        setDatabase(dbclone)
    }

    const addComment = (thisUser, bookId, text) => {
        const dbclone = JSON.parse(JSON.stringify(database))
        if (!text) return alert("The field is empty. Please try again!")
        if(!thisUser)return alert("You must login before commenting!")
        const thisBook = dbclone.db.books.find(book => book._id === bookId).comment.push({text, user: thisUser._id})
        setDatabase(dbclone)
        refresh()
    }

    const rating = (rate , index) => {
        const dbclone = JSON.parse(JSON.stringify(database))
        const thisUser = dbclone.db.current_user

        dbclone.db.books[index].rate.push({
            user: thisUser._id,
            count: rate
        })
        dbclone.db.books[index].totalRate += rate
        setDatabase(dbclone)
    }

    return (
        <Database.Provider value={{
            database: database,
            setDatabase: setDatabase, ban: ban,
            refresh, signUpFunction, loginFunction, logoutFunction, addBook, editBook,
            addGenre, editGenre, calcTotalGenre, removeGenre, removeBook, userBan, addComment, rating
        }}>
            {props.children}
        </Database.Provider>
    )
}

export const GetContext = () => {
    const context = useContext(Database)
    if (!context) throw new Error("Hook called out of bound")
    return context
}