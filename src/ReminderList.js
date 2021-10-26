import Reminder from './Reminder.js'

function ReminderList({reminders, setReminders}) {
    const reminderItem = reminders.map(handleMap)
    
    function handleMap(reminder) {
        return <Reminder setReminders={setReminders} key={reminder.id} reminder={reminder}/>
    }
    return (
        <table>
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
        </table>
    )
}


export default ReminderList;

// ROUTE