import {Link} from "react-router-dom"
import styled from "styled-components";

function Reminder({reminder: {supplement, days, times, id}, setReminders}) {
    console.log();

    const displayDays = Object.entries(days).filter((array)=>array[1]).map(grabLetters).toString().replaceAll(",", ", ").toUpperCase()

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
        fetch(`http://localhost:4000/reminders/${id}`, {
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
    background-color: transparent;
    color: inherit;
	border: 1px solid black;
	padding: 0;
	font: inherit;
	cursor: pointer;
`

// each reminder will have a delete button.
// ALSO: "edit" button