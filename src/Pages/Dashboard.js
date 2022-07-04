import React, {useContext} from "react";
import { Database } from "../Database";

const Dashboard = () => {
    const {database} = useContext(Database)
    return(
        <h1 className="dashboardMsg">Welcome {database.db.users[0].fname}! You can Manage BookLook Here</h1>
    )
}

export default Dashboard