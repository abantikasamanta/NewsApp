import "./App.css";

import React, { Component, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";

// Create the Context
const MyContext = createContext(null);

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <div>
        <Router>
          <MyContext.Provider value={{ basename: "/my-base" }}>
            <NavBar />
            <Routes>
              <Route
                path="/business"
                element={
                  <News
                    key="business"
                    apiKey={this.apiKey}
                    pagesize={5}
                    country="us"
                    category="business"
                  />
                }
              />
              <Route
                path="/entertainment"
                element={
                  <News
                    key="entertainment"
                    apiKey={this.apiKey}
                    pagesize={5}
                    country="us"
                    category="entertainment"
                  />
                }
              />
              <Route
                path="/general"
                element={
                  <News
                    key="general"
                    apiKey={this.apiKey}
                    pagesize={5}
                    country="us"
                    category="general"
                  />
                }
              />
              <Route
                path="/health"
                element={
                  <News
                    key="health"
                    apiKey={this.apiKey}
                    pagesize={5}
                    country="us"
                    category="health"
                  />
                }
              />
              <Route
                path="/science"
                element={
                  <News
                    key="science"
                    apiKey={this.apiKey}
                    pagesize={5}
                    country="us"
                    category="science"
                  />
                }
              />
              <Route
                path="/sports"
                element={
                  <News
                    key="sports"
                    apiKey={this.apiKey}
                    pagesize={5}
                    country="us"
                    category="sports"
                  />
                }
              />
              <Route
                path="/technology"
                element={
                  <News
                    key="technology"
                    apiKey={this.apiKey}
                    pagesize={5}
                    country="us"
                    category="technology"
                  />
                }
              />
            </Routes>
          </MyContext.Provider>
        </Router>
      </div>
    );
  }
}
