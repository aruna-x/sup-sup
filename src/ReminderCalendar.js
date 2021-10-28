import { useState } from 'react';
import Calendar from 'react-calendar';
import styled from 'styled-components';
import ReminderList from './ReminderList';

function ReminderCalendar({filterReminders}) {

    const [selectedDay, setSelectedDay] = useState(new Date());
    console.log(selectedDay)

    const displayReminders = filterReminders(selectedDay);

    console.log(displayReminders)

    return (
        <>
            <Style>
                <Calendar value={selectedDay} onChange={setSelectedDay} />
            </Style>
            <ReminderList reminders={displayReminders} />
        </>
    )
}

export default ReminderCalendar;

const Style = styled.div`
    margin: auto;
    width: 50%;
    text-align: center;
    font-family: 'Zen Kaku Gothic New', sans-serif;
    text-decoration: underline;
    .react-calendar__month-view__days{
        width: 102%;
    }
    .react-calendar__month-view__weekdays__weekday{
       
    }
    button{
        background-color: #ABC01D;
        border: none;
        padding: 3px;
        margin: 4px;
        :hover{
            background-color: green;
        }
    }
`