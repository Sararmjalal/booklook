import React, {useContext, useEffect} from "react";
import { Outlet } from "react-router-dom";
import { Database } from "../Database";
import "../Dashboard.css"
import { useNavigate } from "react-router-dom";



const DashboardLayout = () => {
    const navigate = useNavigate()
    const { database, logoutFunction } = useContext(Database)
    const thisUser = database.db.current_user
    useEffect(() => {
        if (!thisUser || thisUser.status !== "admin") return navigate('/') 
    }, [])

    return(
        <div>
            <div className="dashboardHeader">
                <div className="dashboardHeaderLogoutContainer">
                <button className="dashboardHeaderLogoutButton" onClick={() => logoutFunction(navigate("/"))}>Logout</button>
                </div>
                <div className="dashboardHeaderNameContainer">
                <a href="/dashboard"><span style={{color: "#bfac93"}}>Hello {database.db.users[0].fname} !</span></a>
                </div>
            </div>
            <div className="dashboardMenu">
                <ul>
                    <a href="/dashboard/books"><li className="dashboardMenuItem">Books</li></a>
                    <a href="/dashboard/genres"><li className="dashboardMenuItem">Genres</li></a>
                    <a href="/dashboard/users"><li className="dashboardMenuItem">Users</li></a>
                </ul>
            </div>
        <Outlet />
        </div>
    )
}

export default DashboardLayout