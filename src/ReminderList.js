import Reminder from './Reminder.js'
import styled from 'styled-components'

function ReminderList({reminders, setReminders}) {
    const reminderItem = reminders.map(handleMap)
    
    function handleMap(reminder) {
        return <Reminder setReminders={setReminders} key={reminder.id} reminder={reminder}/>
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>SUPPLMENTS</th>
                    <th>DAYS</th>
                    <th>TIMES</th>
                </tr>
            </thead>
            <tbody>
            {reminderItem}
            </tbody>
        </Table>
    )
}


export default ReminderList;

const Table = styled.table`
    height: 200px;
    padding-left: 40px;
    padding-bottom: 20px;
    box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.4);
    background-color: rgb(245, 238,220);
    border-radius: 2%;
    margin: 50px auto 0px auto;
    width: 55vw;
    font-size: 25px;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    border-spacing: 0.7rem;

    tr{
        text-align: left;
    }
    thead{
        height: 75px;
    }
    tbody>tr {
        height: 30px;
    }
`