// Libraries
import { Link } from "react-router-dom"
import styled from "styled-components";

function Reminder({reminder: {supplement, days, times, id}, setReminders}) {

    const displayDays = Object.entries(days).filter((array)=>array[1]).map(grabLetters).toString().replaceAll(",", ", ").toUpperCase()
    const BASE_URL = `http://localhost:4000/reminders/${id}`;

    function grabLetters(array) {
        const day = array[0];
        switch (day) {
            case "Thursday":
            case "Tuesday":
            case "Saturday":
            case "Sunday":
                return day.slice(0,2)
            default:
                return day.slice(0,1)
        }
    }

    function convertTime(timeToConvert) {
        const hours = parseInt(timeToConvert.slice(0,2));
        const minutes = parseInt(timeToConvert.slice(3));
        const convertedTime = "" + ((hours > 12) ? hours - 12 : hours) + ((minutes < 10) ? ":0" : ":") + minutes + ((hours >= 12) ? " PM" : " AM");
        return convertedTime;
    }

    function handleDelete() {
        fetch(BASE_URL, {
            method: "DELETE"
        })
        .then(() => setReminders(current => current.filter((reminder) => (reminder.id !== id))))
    }

    return (
        <tr>
            <td>{supplement}</td>
            <td>{displayDays}</td>
            <td>{convertTime(times)}</td>
            <td><Link to={`/list/${id}/edit`}><Button>🖊️</Button></Link></td>
            <td><Button onClick={handleDelete}>❌</Button></td>
        </tr>
    )
}


export default Reminder;

const Button = styled.button`
    background-color: rgba(0,0,0,.05);
    color: inherit;
	border: 1px solid gray;
	padding: 0px 5px 0px 5px;
	font: inherit;
	cursor: pointer;
    :hover{
        background-color: rgba(0,0,0,.2);
    }
`