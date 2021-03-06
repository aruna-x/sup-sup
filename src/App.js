// Libraries
import { Switch, Route } from 'react-router-dom';
import { useState, useEffect } from "react"
import styled from 'styled-components';

// Components
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import ReminderCalendar from './ReminderCalendar.js';
import AddNew from './AddNew.js';
import EditReminder from './EditReminder.js';
import ReminderList from './ReminderList.js';


function App() {

  const [reminders, setReminders] = useState([]);

  // Use state to check whether a notification is necessary every 1 minute
  const [notification, setNotification] = useState(false);
  setTimeout(() => {setNotification(!notification)}, 60000);

  useEffect(retrieveData,[])
  function retrieveData() {
    fetch("http://localhost:4000/reminders")
    .then(resp => resp.json())
    .then(setReminders)
  }

  useEffect(throwAlert, [notification])
  function throwAlert() {
    if (!notification) return;
    else {
      const today = new Date()
      const currentTime = today.toString().slice(16,21);
      const todayReminders = filterReminders(today);
      const alertSupplements = todayReminders.filter(r => r.times === currentTime).map(r => r.supplement);
      const supplements = alertSupplements.toString().replaceAll(',', ', ');
      if (supplements !== "") {
        const ping = new Audio('https://thevitiligocoach.com/ping.m4a');
        ping.play();
        setTimeout(() => {alert(`Sup! Time to take your ${supplements}.`);}, 1000);
      }
    }
  }

  function filterReminders(selectedDay) {
    return reminders.filter((reminder) => {
      const formattedSelectedDay = getSeletedDay(selectedDay);
        if (Date.parse(reminder.startDate) > Date.parse(formatDate(selectedDay).toString())) {
            return false;
        }
        const datesArray = Object.entries(reminder.days).filter(day=> day[1]).map(day=>day[0]);

        for (let i=0; i<datesArray.length; i++) {
            if (datesArray[i] === formattedSelectedDay) return true;
        }
        return false;
    })
  }

  function getSeletedDay(selectedDay) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[selectedDay.getDay()];
  }

  function formatDate(dateObj) {
    const month = dateObj.getUTCMonth() + 1; //months from 1-12 (shift by 1)
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return year + "/" + month + "/" + day;
  }

  return (
    <Page>
      <Header />
      <NavBar />
      <Style>
        <Switch>
          <Route path="/calendar">
            <UpperSpace>
              <Title>Calendar</Title>
              <ReminderCalendar filterReminders={filterReminders} reminders={reminders} getSeletedDay={getSeletedDay}/>
            </UpperSpace>
          </Route>
          <Route path="/list/new">
            <UpperSpace>
              <Title>Create Reminder</Title>
              <AddNew setReminders={setReminders} formatDate={formatDate} setNotification={setNotification}/>
            </UpperSpace>
          </Route>
          <Route path="/list/:id/edit">
            <UpperSpace>
              <Title>Edit Reminder</Title>
              <EditReminder setReminders={setReminders} setNotification={setNotification}/>
            </UpperSpace>
          </Route>
          <Route exact path={["/", "/list"]}>
            <UpperSpace>
              <Title>Reminders</Title>
              <ReminderList setReminders={setReminders} reminders={reminders}/>
            </UpperSpace>
          </Route>
          <Route>
            <p>404</p>
          </Route>
        </Switch>
    </Style>
    </Page>
  );
}

export default App;

const Title = styled.h1`
    text-align: center;
    font-family: 'Carter One', cursive;
`

const Page = styled.div`
  margin: -8px;
  width: 100vw;
  height: 100vh;
  background-image: url("https://thevitiligocoach.com/background.jpg");
`

const Style = styled.div`
  margin: 0px auto 0px auto;
  box-shadow: 4px 4px 8px 0px rgba(0,0,0,0.4);
  background-color: rgb(245, 238, 220);
  border-radius: 2%;
  margin: auto;
  width: 55vw;
  font-size: 25px;
  min-height: 200px;
  padding-bottom: 20px;
`
const UpperSpace = styled.div`
  margin-top: 70px;
  padding: 20px 40px;
`