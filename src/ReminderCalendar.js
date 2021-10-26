import { useState } from 'react';
import Calendar from 'react-calendar'
import ReminderList from './ReminderList';

function ReminderCalendar({reminders}) {

    const [selectedDay, setSelectedDay] = useState(new Date());
    console.log(selectedDay)

    const displayReminders = reminders.filter((reminder) => {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = days[selectedDay.getDay()];
        console.log('Format Date: '+formatDate(selectedDay).toString())
        console.log("This should be true", reminder.startDate.toString() > formatDate(selectedDay).toString())
        if (reminder.startDate.toString() > formatDate(selectedDay).toString()) {
            return false;
        }
        const datesArray = Object.entries(reminder.days).filter(day=> day[1]).map(day=>day[0]);
        console.log('dates array'+datesArray)

        for (let i=0; i<datesArray.length; i++) {
            if (datesArray[i] === today) return true;
        }
        return false;
    });
    console.log(displayReminders)

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