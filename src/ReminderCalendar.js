import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import ReminderList from './ReminderList';


function ReminderCalendar({filterReminders, reminders, getSeletedDay}) {

    const [selectedDay, setSelectedDay] = useState(new Date());
    const displayReminders = filterReminders(selectedDay);

    const findEnabledDays = () => {
        let enabledDays = new Set();
        reminders.map((reminder)=>{
            if (enabledDays.size === 7) return;
            for (let day in reminder.days) {
                if (reminder.days[day] === true) {
                    if (! enabledDays.has(reminder.days[day])) {
                        enabledDays.add(day);
                    }
                }
            }
        });
        return enabledDays;
    }

    function tileDisabled({ date, view }) {
        // Disable tiles in month view only
        if (view === 'month') {
            const enabledDays = findEnabledDays();
            return (!enabledDays.has(getSeletedDay(date)) || date < new Date( Date.now() - 24*60*60*1000));
        }
    }

    return (
        <>
            <Style>
                <Calendar value={selectedDay} onChange={setSelectedDay} tileDisabled={tileDisabled}/>
            </Style>
            { displayReminders.length === 0 ? "" : <ReminderList reminders={displayReminders} /> }
        </>
    )
}

export default ReminderCalendar;

const Style = styled.div`
    margin: 20px auto;
    width: 50%;
    text-align: center;
    border: 1px solid rgba(171, 192, 29, 0.4);
    border-radius: 8px;
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,.3);
    padding: 20px;
    .react-calendar__tile {
        background-color: #ABC01D;
        border: 1px solid rgb(245, 238, 220);
        margin: 0px;
        cursor:pointer;
        font-size: 20px;
        :hover{
            background-color: rgba(171, 192, 29, 0.5);
        }
    }
    .react-calendar__month-view {
        margin-top: 20px;
        font-family: 'Zen Kaku Gothic New', sans-serif;
    }
    .react-calendar__navigation {
        button {
            background-color: rgb(255,165,2);
            padding: 5px 10px;
            border: 1px solid rgb(245, 238, 220);
            box-shadow: 0px 0px 3px 0px rgba(0,0,0,.2);
            cursor:pointer;
            :hover {
                background-color: rgba(255, 165, 2, 0.7);
            }
        }
    }
`

// margin: auto;
// width: 100%;
// text-align: center;
// font-family: 'Zen Kaku Gothic New', sans-serif;
// text-decoration: underline;
// .react-calendar__month-view__days{
//     width: 100%;
// }
// .react-calendar__month-view__weekdays__weekday{
   
// }
// button{
//    background-color: #ABC01D;
//     padding: 1px;
//     margin: 1px;
//     :hover{
//         background-color: green;
//     }
// }