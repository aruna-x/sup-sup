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
                    <th>Supplement</th>
                    <th>Days</th>
                    <th>Times</th>
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
    box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.4);
    background: rgb(255,171,0);
    background: linear-gradient(0deg, rgba(255,171,0,1) 0%, rgba(255,220,0,1) 0%, rgba(255,169,0,1) 100%);
    margin: auto;
    font-size: 25px;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    border-spacing: 0.7rem;
    border: 1px solid black;
    :hover {
        background-color: orange;
        box-shadow: 2px 2px 8px 0px rgb(204, 102, 0);
    }
`