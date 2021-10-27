import {Switch, Route} from 'react-router-dom';
import {useState, useEffect} from "react"
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import EditReminder from './EditReminder.js';
import ReminderList from './ReminderList.js';
import ReminderCalendar from './ReminderCalendar.js';
import AddNew from './AddNew.js';
import styled from 'styled-components';


function App() {

  const [reminders, setReminders] = useState([])

  useEffect(retrieveData,[])

  function retrieveData() {
    fetch("http://localhost:4000/reminders")
    .then(resp => resp.json())
    .then(setReminders)
  }

  console.log(reminders)

  return (
    <Page>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/calendar">
          <ReminderCalendar reminders={reminders} />
        </Route>
        <Route path="/list/new">
          <AddNew setReminders={setReminders}/>
        </Route>
        <Route path="/list/:id/edit">
          <EditReminder setReminders={setReminders}/>
        </Route>
        <Route exact path={["/", "/list"]}>
          <ReminderList setReminders={setReminders} reminders={reminders}/>
        </Route>
        <Route>
          <p>404</p>
        </Route>
      </Switch>
    </Page>
  );
}

export default App;

const Page = styled.div``

// import
// NavBar
// 