import {NavLink} from "react-router-dom"

function NavBar() {
    return(
        <ul style={{display: "flex", justifyContent: "space-around"}}>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
            <NavLink to="/list/new">New Reminder</NavLink>
        </ul>
    );
}

export default NavBar;