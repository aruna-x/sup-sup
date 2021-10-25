import {Switch, Route} from 'react-router-dom';
import {useState, useEffect} from "react"
import Header from "./Header.js";
import NavBar from "./NavBar.js";
import EditReminder from './EditReminder.js';
import ReminderList from './ReminderList.js';
import Calendar from './Calendar.js';
import AddNew from './AddNew.js';


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
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route path="/calendar">
          <Calendar />
        </Route>
        <Route path="/list/new">
          <AddNew />
        </Route>
        <Route path="/list/:id">
          
        </Route>
        <Route path="/list/:id/edit">
          <EditReminder />
        </Route>
        <Route path="/list/:id/delete">
          
        </Route>
        <Route exact path={["/", "/list"]}>
          <ReminderList reminders={reminders}/>
        </Route>
        <Route>
          <p>404</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;

// import
// NavBar
// 