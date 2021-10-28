import Reminder from './Reminder.js'
import styled from 'styled-components'

function ReminderList({reminders, setReminders}) {
    const reminderItem = reminders.map(handleMap)
    
    function handleMap(reminder) {
        return <Reminder setReminders={setReminders} key={reminder.id} reminder={reminder}/>
    }
    return (
        <>
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
    </>
    )
}


export default ReminderList;

const Title = styled.h1`
    text-align: center;
`

const Table = styled.table`
    min-height: 200px;
    padding-left: 30px;
    padding-bottom: 20px;
    margin: 0px auto 0px auto;
    width: 50vw;
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