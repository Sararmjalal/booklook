import React, {useContext} from "react";
import { Database } from "../Database";
import userImg from "../Uploads/dashboard/userImg.png"

const UserList = () => {

    const {database, userBan} = useContext(Database)
    return(
        <div className="listContainer">
        <div className="titleDashboardContainer">
            <div  className="titleDashboard">
            <a href="/dashboard/books"><h1>Users List</h1></a>
            </div>
        </div>
        <div className="devider"></div>
        {
            database.db.users.map(user =>{
                return(
                    <div className="list">
                        <img src={userImg} className="listImg"></img>
                    <div className="listNameContainer"><a>{user.fname} {user.lname}</a></div>
                    <div className="editRemoveContainer">
                            <a onClick={() => userBan(user._id)}>{user.status === "admin" ? "" : user.status ==="active"? "Ban" : "Unban" }</a>
                    </div>
                    </div>
                )
            })
        }
        </div>
    )
}

export default UserList