import Reminder from './Reminder.js'

function ReminderList({reminders}) {
    const reminderItem = reminders.map(handleMap)
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

function handleMap(reminder) {
    return <Reminder key={reminder.id} reminder={reminder}/>
}

export default ReminderList;

// ROUTE