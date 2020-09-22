import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./Pages/searchPage";
import SavedPage from "./Pages/savedPage";
import BookPage from "./Pages/bookPage"
import Navbar from "./Components/Navbar"
import Wrapper from "./Components/Wrapper"

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/saved" component={SavedPage} />
          <Route exact path="/book/:id" component={BookPage} />
        </Wrapper>
      </>
    </Router>
  );
}

export default App;