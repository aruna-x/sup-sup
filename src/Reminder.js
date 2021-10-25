
function Reminder({reminder:{id, supplement, days, times}}) {

    const displayDays = days.map(grabLetters).toString().replaceAll(",", "-").toUpperCase()

    function grabLetters(day) {
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

    const displayTimes = times.toString().replaceAll(",", ", ")

    return (
        <tr>
            <td>{supplement}</td>
            <td>{displayDays}</td>
            <td>{displayTimes}</td>
            <td><button>🖊️</button></td>
            <td><button>❌</button></td>
        </tr>
    )
}


export default Reminder;

// each reminder will have a delete button.
// ALSO: "edit" button