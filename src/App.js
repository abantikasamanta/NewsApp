import "./App.css";

import React, { Component, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

// Create the Context
const MyContext = createContext(null);

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <MyContext.Provider value={{ basename: "/my-base" }}>
            <NavBar />
            <Routes>
              <Route
                path="/business"
                element={<News key="business" pagesize={5} country="us" category="business" />}
              />
              <Route
                path="/entertainment"
                element={
                  <News  key="entertainment" pagesize={5} country="us" category="entertainment" />
                }
              />
              <Route
                path="/general"
                element={<News key="general" pagesize={5} country="us" category="general" />}
              />
              <Route
                path="/health"
                element={<News key="health" pagesize={5} country="us" category="health" />}
              />
              <Route
                path="/science"
                element={<News key="science" pagesize={5} country="us" category="science" />}
              />
              <Route
                path="/sports"
                element={<News key="sports" pagesize={5} country="us" category="sports" />}
              />
              <Route
                path="/technology"
                element={
                  <News key="technology" pagesize={5} country="us" category="technology" />
                }
              />
            </Routes>
          </MyContext.Provider>
        </Router>
      </div>
      

    );
  }
}
