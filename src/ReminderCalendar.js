import { useState } from 'react';
import Calendar from 'react-calendar'
import ReminderList from './ReminderList';

function ReminderCalendar({filterReminders}) {

    const [selectedDay, setSelectedDay] = useState(new Date());
    console.log(selectedDay)

    const displayReminders = filterReminders(selectedDay);

    console.log(displayReminders)

return (
    <>
        <Calendar value={selectedDay} onChange={setSelectedDay} />
        <ReminderList reminders={displayReminders} />
    </>
)
}

export default ReminderCalendar;