import {Switch, Route} from 'react-router-dom';

import Header from "./Header.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Switch>
        <Route path={["/", "/list"]}>
          
        </Route>
        <Route path="/calendar">
          
        </Route>
        <Route path="/list/new">
          
        </Route>
        <Route path="/list/:id">
          
        </Route>
        <Route path="/list/:id/edit">
          
        </Route>
        <Route path="/list/:id/delete">
          
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