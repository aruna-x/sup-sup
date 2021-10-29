// Libraries
import {NavLink} from "react-router-dom"
import styled from "styled-components";

function NavBar() {
    return(
        <List>
            <NavLink to="/list">List</NavLink>
            <NavLink to="/calendar">Calendar</NavLink>
            <NavLink to="/list/new">New Reminder</NavLink>
        </List>
    );
}

export default NavBar;

const List = styled.ul`
    width: 98%;
    margin: 0px auto 0px auto;
    display: flex;
    justify-content: space-evenly;
    background-color: orange;
    padding: 8px;
    box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.4);
    a{
        box-shadow:inset 0px 1px 0px -38px #ebebeb;
        background-color:#ABC01D;
        display:inline-block;
        cursor:pointer;
        color:#000000;
        font-family:Arial;
        font-size:17px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.4);
    }
    a:hover {
        background-color: #91a41b;
        box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.4);
    }
    
`