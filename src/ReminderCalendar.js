import { useState } from 'react';
import Calendar from 'react-calendar'
import ReminderList from './ReminderList';

function ReminderCalendar({reminders}) {

    const [selectedDay, setSelectedDay] = useState(new Date());
    console.log(selectedDay)

    

    const displayReminders = reminders.filter((reminder) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = days[selectedDay.getDay()];
        if (reminder.startDate > formatDate(selectedDay).toString()) {
            return false;
        }
        for (let i=0; i<reminder.days.length; i++) {
            if (reminder.days[i] === today) return true;
        }
        return false;
    });

 return (
    <>
        <Calendar value={selectedDay} onChange={setSelectedDay} />
        <ReminderList reminders={displayReminders} />
    </>
 )
}

function formatDate(dateObj) {
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return year + "/" + month + "/" + day;
}

export default ReminderCalendar;

// ROUTE