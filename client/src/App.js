import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./Pages/searchPage";
import SavedPage from "./Pages/savedPage";
import BookPage from "./Pages/bookPage"
import login from "./Pages/login"
import register from "./Pages/register"
import Navbar from "./Components/Navbar"
import Wrapper from "./Components/Wrapper"
import UserContextProvider from "./Context/userContext";

function App() {
  return (
    <UserContextProvider>
      <Router>
        <>
          <Navbar />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={SearchPage} />
              <Route exact path="/saved" component={SavedPage} />
              <Route exact path="/book/:id" component={BookPage} />
              <Route exact path="/login" component={login} />
              <Route exact path="/register" component={register} />
            </Switch>
          </Wrapper>
        </>
      </Router>
    </UserContextProvider>
  );
}

export default App;